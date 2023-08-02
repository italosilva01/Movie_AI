"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Movie } from "@/components/Movie";

export default function Home() {
  const movies = [
    {
      name: "Barbie",
      postUrl: "/posts/barbier.png",
      duration: "1:54:00",
      releaseYear: "2023",
    },
    {
      name: "Indiana Jones e o Chamado",
      postUrl: "/posts/indianaJones.png",
      duration: "1:54:00",
      releaseYear: "2023",
    },
    {
      name: "Oppenheimer",
      postUrl: "/posts/oppenheimer.png",
      duration: "3:00:00",
      releaseYear: "2023",
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-l  to-[--purple] from-[--pink] p-26">
      <div className="w-[52.875rem] h-[39.5rem] flex flex-col gap-[2.375rem] bg-[--gray-dark] mx-[18.5625rem] my-[8.3125rem] px-[6rem] py-[4rem] rounded-2xl boxShadowstyled border-8 border-[--purple]	">
        <div className="flex justify-between">
          <Image src="/logo.svg" width={86} height={44} alt={"Logo Movie AI"} />

          <Button textButton="Nova recomendação" />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-9 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-2 justify-center ">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
