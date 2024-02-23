
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

import React from 'react';

export default function HomePage() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center p-4 max-w-xs w-full">
              <img src="/landing__logo.png" alt="First" className="mb-4 max-w-full h-auto"/>
              <h1 className="text-center mb-4 font-poppins text-4xl font-semibold">T-CAre</h1>
              <p className="text-center mb-4">Self-management App for Cancer</p>
              <img src="/landing__ribbon.png" alt="Second" className="max-w-full h-auto"/>
          </div>
      </div>
  );
}