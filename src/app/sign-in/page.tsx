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
      </main>
      <footer className="bg-gray-200 py-4" />
    </>
  );
};

export default LoginPage;
