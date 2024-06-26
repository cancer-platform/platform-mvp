// src/components/client/ClientAuthForm.tsx
"use client";
import Link from "next/link";
interface AuthFormProps {
  formType: "register" | "login";
}
import { useSession } from "next-auth/react";
import { useState, useEffect, useCallback } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const ClientAuthForm = ({ formType }: { formType: "register" | "login" }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const { data: session, status } = useSession();

  const validateForm = useCallback(() => {
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
  }, [username, password]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/welcome");
    }
  }, [status, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      setIsSubmitting(true);
      try {
        const endpoint =
          formType === "register" ? "/api/register" : "/api/login";
        console.log(JSON.stringify({ username, password })); // logging pass/login
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (formType === "register" && response.status === 409) {
          // User exists
          const errorData = await response.json();
          setErrors({ username: errorData.error.message });
        } else if (formType === "login" && response.status === 401) {
          // Invalid credentials
          setErrors({ username: "Invalid username or password." });
        } else if (response.ok) {
          if (formType === "register") {
            console.log("User registered successfully");
            router.push("/sign-in");
          } else {
            console.log("User logged in successfully");
            router.push("/welcome");
          }
        } else {
          const errorData = await response.json();
          setErrors({ username: errorData.error.message });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ username: "An error occurred. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            autoComplete="new-user"
            className="input-with-images mt-0.5 ml-2 w-full h-14 border-[#221F1F1A] border bg-[url('/envelope__icon.png')] bg-no-repeat bg-[10%] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsFormTouched(true);
            }}
          />
          {errors.username && isFormTouched && (
            <span className="text-red-500 text-sm ml-7">{errors.username}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            className="input-with-images input-with-2-images ml-2 mt-px w-full h-14 border-[#221F1F1A] py-2 pr-8 pl-20 shadow bg-transparent font-inherit text-inherit text-lg px-4 text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline border"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsFormTouched(true);
            }}
          />
          {errors.password && isFormTouched && (
            <span className="text-red-500 text-sm ml-7">{errors.password}</span>
          )}
        </div>
        <button
          disabled={!isFormValid || isSubmitting}
          type="submit"
          className={
            "mt-12 rounded-full px-4 py-2 bg-[#407CE2] w-full text-white font-semibold transition duration-200" +
            (!isFormValid || isSubmitting
              ? " opacity-50 cursor-not-allowed"
              : " hover:bg-[#3066BE] active:bg-[#244E8E]")
          }
        >
          {isSubmitting
            ? formType === "register"
              ? "Registering..."
              : "Logging in..."
            : formType === "register"
              ? "Register"
              : "Log in"}
        </button>
      </form>
      {formType === "login" ? (
        <>
          <div className="mt-4 flex items-center">
            <p>Don&apos;t have an account? </p>
            <Link
              className="ml-2 text-[#407CE2] leading-4 text-sm"
              href="/sign-up/"
            >
              Sign up
            </Link>
          </div>
          <div className="mt-4 text-center w-3/4">
            <span className="hr">OR</span>
          </div>
          <button className="mt-4 rounded-lg px-4 py-2">
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <div className="mt-4 flex items-center">
            <p>Already have the account?</p>
            <Link
              className="ml-2 text-[#407CE2] leading-4 text-sm"
              href="/sign-in/"
            >
              Sign in here
            </Link>
          </div>
          <div className="mt-4 text-center w-3/4">
            <span className="hr">OR</span>
          </div>
          <button className="mt-4 rounded-lg px-4 py-2">
            Sign in with Google
          </button>
        </>
      )}
    </>
  );
};

export default ClientAuthForm;
