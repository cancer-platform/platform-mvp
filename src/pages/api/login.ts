// src\pages\api\login.ts
import { NextApiRequest, NextApiResponse } from "next";
// import { backLogger } from "../../middleware";

export default async function handler(
  req: NextApiRequest & { rawBody: any }, // add rawBody type
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      // TODO: Add credential check logic here

      // console.log("Request body:", req.body);

      // backLogger.info("Request body in login.ts:", JSON.stringify(req.body));

      /*    backLogger.info(
        "Login request in login.ts:",
        JSON.stringify(req.rawBody),
      );
 */
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      // backLogger.error("Login error", error);
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
