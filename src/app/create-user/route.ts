// src\app\create-user\route.ts
import clientPromise from "@/helpers/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const client = await clientPromise;
  const users = client.db(process.env.DB_NAME).collection("users");

  const password = bcrypt.hashSync("password", 10);
  await users.insertOne({
    email: "user@example.com",
    password: password,
    role: "user",
  });

  return NextResponse.json({ success: true });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const client = await clientPromise;
    const users = client.db(process.env.DB_NAME).collection("users");

    const hashedPassword = bcrypt.hashSync(password, 10);

    const result = await users.insertOne({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ id: result.insertedId });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
