"use client";

import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-l  to-[--purple] from-[--pink] p-26">
      <div className="w-[52.875rem] h-[39.5rem] flex flex-col gap-[2.375rem] bg-[--gray-dark] mx-[18.5625rem] my-[8.3125rem] px-[6rem] py-[4rem] rounded-2xl boxShadowstyled ">
        <div className="flex justify-between">
          <Image src="/logo.svg" width={86} height={44} alt={"Logo Movie AI"} />

          <Button textButton="Nova recomendação" />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-9 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-2 justify-center ">
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
          <div className="border-2 border-white w-[194px] h-[290px]"></div>
        </div>
      </div>
    </main>
  );
}
