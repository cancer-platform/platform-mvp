// src/components/client/ClientRegisterForm.tsx
"use client";
import { useState, useEffect } from "react";
import { FormEvent } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [username, password]);

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (!username) {
      errors.username = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      errors.username = "Email is invalid.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      console.log("Form submitted successfully!");
      // Form submit logic
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
          // User create Error handling
          const errorData = await response.json();
          console.error("Error creating user:", errorData.error);
          // Error message on Page or in modal
        }
      } catch (error) {
        console.error("Error:", error);
        // Error message on req post
        // Error message on Page or in modal
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="new-user"
          className="input-with-images mt-0.5 ml-2 w-full h-14 border-[#221F1F1A] border bg-[url('/envelope__icon.png')] bg-no-repeat bg-[10%] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <span className="text-red-500 text-sm ml-7">{errors.username}</span>
        )}
      </div>
      <div className="mb-4">
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="new-password"
          className="input-with-images input-with-2-images ml-2 mt-px w-full h-14 border-[#221F1F1A] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline px-4 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="text-red-500 text-sm ml-7">{errors.password}</span>
        )}
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
