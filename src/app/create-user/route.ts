// app/create-admin/route.ts
import clientPromise from "@/helpers/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

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
