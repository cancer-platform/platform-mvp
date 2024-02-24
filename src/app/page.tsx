import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className=" flex flex-col items-center justify-center h-screen">
        <div className="content-area flex flex-col items-center p-4 max-w-xs w-full font-poppins">
          <Image
            src="/landing__logo.png"
            alt="First"
            width="184"
            height="244"
            className="mb-4 max-w-full h-auto"
          />
          <h1 className="landing-text-width text-header mb-4 text-4xl font-semibold">
            T-CAre
          </h1>
          <p className="landing-text-width text-paragraph mb-4">
            Self-management App for Cancer
          </p>
          <Image
            src="/landing__ribbon.png"
            alt="Second"
            width="351"
            height="416"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
