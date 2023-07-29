"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[--gray-dark]">
      <div className="p-y-16 p-x-24">
        <div className="flex border-white border-2">
          <Image src="/logo.svg" width={86} height={44} alt={"Logo Movie AI"} />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-9 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-2">
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
        </div>
      </div>
    </main>
  );
}
