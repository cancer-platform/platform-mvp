// src\pages\api\login.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest & { rawBody: any }, // add rawBody type
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      // TODO: Add credential check logic here

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
