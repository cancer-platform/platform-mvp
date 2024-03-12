// src\app\create-user\route.ts
import clientPromise from "@/helpers/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import createError from 'http-errors';

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
    try {
      const { username, password } = req.body;
      const client = await clientPromise;
      const users = client.db(process.env.DB_NAME).collection("users");
      const hashedPassword = bcrypt.hashSync(password, 10);
      const result = await users.insertOne({ username, password: hashedPassword, });
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      throw createError(500, 'User could not be created Error: ' + (error as Error).message);
    }
  } else {
    throw createError(405, 'Method is bot allowed');
  }
}
