import Image from "next/image";

export const ButtonPlay = () => {
  return (
    <div className="w-[12.125rem] h-[2.75rem] p-2 bg-[--gray] text-base font-normal leading-5 rounded flex justify-center items-center gap-2">
      <div>
        <Image src="/icons/play.svg" width={28} height={28} alt="" />
      </div>
      Assistir trailer
    </div>
  );
};
