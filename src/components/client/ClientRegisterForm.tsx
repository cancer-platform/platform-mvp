// src/components/client/ClientRegisterForm.tsx
"use client";

import { useState } from "react";
import { FormEvent } from "react";

interface RegisterFormProps {
  onSubmit: (username: string, password: string) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(username, password);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User created:", data);
        // Additional after registration logic could be provided here
      } else {
        console.error("Error creating user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your username"
          className="input-with-images mt-0.5 ml-2 w-full h-14 border-[#221F1F1A] border bg-[url('/envelope__icon.png')] bg-no-repeat bg-[10%] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex items-center mt-6">
        <input
          type="password"
          placeholder="Enter your password"
          className="input-with-images input-with-2-images ml-2 mt-px w-full h-14 border-[#221F1F1A] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline mb-2 px-4 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-12 rounded-full px-4 py-2 bg-[#407CE2] w-full text-white font-semibold"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
