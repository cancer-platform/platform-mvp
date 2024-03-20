import ClientAuthForm from "@/components/client/ClientAuthForm";
import ClientLink from "@/components/client/ClientLink";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <header className="bg-gray-200 py-4" />
      <main className="flex flex-col items-center p-4 max-w-xs w-full justify-center">
        <div className="w-full flex flex-row justify-items-stretch">
          <div className="w-10 h-10 bg-transparent flex items-center justify-center flex-none">
            <ClientLink href="#" back>
              <Image
                src="/chevron_left.png"
                alt="Square Image"
                className="w-1/20 justify-center"
                width={24}
                height={24}
              />
            </ClientLink>
          </div>
          <div className="font-bold mt-2 mb-2 ml-11 text-center w-2/5">
            Sign In
          </div>
        </div>

        <ClientAuthForm formType={"login"} />
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
      </main>
      <footer className="bg-gray-200 py-4" />
    </>
  );
};

export default LoginPage;
