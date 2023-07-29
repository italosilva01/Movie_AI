import Image from "next/image";

interface ButtonProps {
  textButton: string;
}
export const Button = ({ textButton }: ButtonProps) => {
  return (
    <button className="w-[13.75rem] h-[3rem] bg-gradient-to-l  to-[--purple] from-[--pink] text-base font-normal leading-5	rounded flex px-4 py-2 items-center	gap-x-3.5">
      {textButton}
      <Image src="/icons/icon-flash.svg" width={18} height={18} alt="" />
    </button>
  );
};
