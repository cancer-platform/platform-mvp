// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="bg-gray-200 py-4" />
      <section className="bg-white text-center flex flex-col items-center p-4 max-w-xs w-full">
        <Image
          src="/landing__logo.png"
          alt="First"
          width="184"
          height="244"
          className="mb-4 max-w-full h-auto"
        />
        <p className="w-40 mb-4 text-16 font-semibold leading-24 tracking-normal text-center text-blue-900">
          <Link href="/sign-in/"> Self-management App for Cancer </Link>
        </p>
        <Image
          src="/landing__ribbon.png"
          alt="Second"
          width="351"
          height="416"
          className="max-w-full h-auto"
        />
      </section>
      <footer className="bg-gray-200 py-4" />
    </>
  );
}
