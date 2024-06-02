// pages/api/register.js

import { NextApiRequest, NextApiResponse } from "next";
import createError from "http-errors";
import bcrypt from "bcrypt";
import clientPromise from "@/helpers/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      const users = db.collection("users");

      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          error: createError(400, "Missing required fields"),
        });
      }

      // User if exists
      const existingUser = await users.findOne({ username });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          error: createError(409, "User already exists"),
        });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      await users.insertOne({
        username,
        password: hashedPassword,
        role: "user",
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        error: createError(500, "Internal Server Error"),
      });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      error: createError(405, `Method ${req.method} Not Allowed`),
    });
  }
}
