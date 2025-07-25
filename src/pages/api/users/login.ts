import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  try {
    await dbConnect();

    const user = await User.findOne({ userName });
    console.log("User found:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
        email: user.email,
        role: "user",
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // Set cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("userToken", token, {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
      })
    );

    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
