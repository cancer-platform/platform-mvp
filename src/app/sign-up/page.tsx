import ClientLink from "@/components/client/ClientLink";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
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
            Register
          </div>
        </div>

        <form className="mt-8">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="
              input-with-images 
                        mt-0.5
                        ml-2 
                        w-full 
                        h-14 
                        border-[#221F1F1A] 
                        border
                        bg-[url('/envelope__icon.png')] 
                        bg-no-repeat 
                        bg-[10%]
                        py-2 
                        pr-8 
                        pl-20 
                        shadow
                        bg-transparent
                        font-inherit
                        text-inherit
                        text-lg
                        px-4
                        text-gray-700
                        placeholder-gray-600
                        rounded-lg
                        focus:shadow-outline
                        mb-2
                        "
            />
          </div>
          <div className="flex items-center mt-6">
            {/*  <Image
              src="/lock__icon.png"
              alt="Lock Icon"
              className="w-4 h-4"
              width={24}
              height={24}
            /> */}
            <input
              type="password"
              placeholder="Enter your password"
              className="
              input-with-images 
              input-with-2-images 
              ml-2 
              mt-px	 
              w-full 
              h-14 
              border-[#221F1F1A] 
              py-2 
              pr-8 
              pl-20 
              shadow
              bg-transparent
              font-inherit
              text-inherit
              text-lg
              px-4
              text-gray-700
              placeholder-gray-600
              rounded-lg
              focus:shadow-outline
              mb-2
              px-4
              border 
              "
            />
          </div>

          <button className="mt-12 rounded-full px-4 py-2 bg-[#407CE2] w-full text-white font-semibold">
            Register
          </button>
        </form>
        <div className="mt-4 flex items-center">
          <p>Already have the account? </p>
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
      </main>
      <footer className="bg-gray-200 py-4" />
    </>
  );
};

export default RegisterPage;
