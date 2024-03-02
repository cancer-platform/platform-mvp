import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <header className="bg-gray-200 py-4" />
      <main className="flex flex-col items-center p-4 max-w-xs w-full justify-center">
        <div className="w-full flex flex-row justify-items-stretch">
          <div className="w-10 h-10 bg-transparent flex items-center justify-center flex-none">
            <Link href="#">
              <Image
                src="/chevron_left.png"
                alt="Square Image"
                className="w-1/20 justify-center"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="font-bold mt-2 mb-2 ml-11 text-center w-2/5">
            Restore Access
          </div>
        </div>

        <div className="mt-8">
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
                        bg-[url('/envelope__icon.png')] 
                        bg-no-repeat 
                        bg-[10%]
                        py-2 
                        pr-8 
                        pl-20 
                        shadow
                        bg-transparent
                        font-inherit
                        text-inherit"
            />
          </div>

          <a href="#" className="block text-right mt-2">
            Forgot email?
          </a>
        </div>
        <button className="mt-4 rounded-lg px-4 py-2">Send Link</button>
        <div className="mt-4 text-center">
          <span>Don&apos;t have an account? </span>
          <a href="#">Sign up</a>
        </div>
        <div className="mt-4 text-center">
          <hr className="border-t border-black w-full" />
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
