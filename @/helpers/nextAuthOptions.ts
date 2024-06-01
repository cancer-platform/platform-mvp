// src/helpers/nextAuthOptions.ts
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import clientPromise from "./db";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client
          .db(process.env.DB_NAME)
          .collection("users");
        const username = credentials?.username;
        const user = await usersCollection.findOne({ username: username });

        if (!user) {
          throw new Error("User does not exist.");
        }

        // validate password
        const passwordIsValid = await bcrypt.compare(
          credentials?.password as string,
          user.password,
        );

        if (!passwordIsValid) {
          throw new Error("Invalid credentials");
        }

        return { id: user._id.toString(), ...user };
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      console.log("Token:", token);
      console.log("Token User:", token.user);
      if (token.user) {
        session.user = token.user;
      } else {
        console.log("Token user is undefined or missing expected properties");
      }
      return session;
    },
  },
};
