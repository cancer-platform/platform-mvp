import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      {" "}
      <header className="bg-gray-200 py-4" />
      <main className="content-area flex flex-col items-center p-4 max-w-xs w-full h-screen justify-center">
        <div className="w-full flex flex-row border-green-700 border-2 justify-items-stretch">
          <div className="w-10 h-10 bg-transparent border-red-600 border-2 flex items-center justify-center flex-none">
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
          <div className="font-bold mt-2 mb-2 ml-9 border-blue-700 border-2 w-2/5">
            Sign In
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <Image
              src="/envelope__icon.png"
              alt="Envelope Icon"
              className="w-4 h-4"
              width={24}
              height={24}
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <Image
              src="/lock__icon.png"
              alt="Lock Icon"
              className="w-4 h-4"
              width={24}
              height={24}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="ml-2"
            />
            <Image
              src="/eye__icon.png"
              alt="Eye Icon"
              className="w-4 h-4 ml-2"
              width={24}
              height={24}
            />
          </div>
          <a href="#" className="block text-right mt-2">
            Forgot password?
          </a>
        </div>
        <button className="mt-4 rounded-lg px-4 py-2">Sign In</button>
        <div className="mt-4 text-center">
          <span>Don&apos;t have an account? </span>
          <a href="#">Sign up</a>
        </div>
        <div className="mt-4 text-center">
          <hr className="border-t border-black w-full" />
          <span className="bg-white px-2">OR</span>
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
