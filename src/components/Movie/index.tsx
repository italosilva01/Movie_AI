import Image from "next/image";
import { ButtonPlay } from "../ButtonPlay";

interface MovieProps {
  movie: {
    name: string;
    postUrl: string;
    duration: string;
    releaseYear: string;
  };
}
export const Movie = ({ movie }: MovieProps) => {
  const { name, duration, postUrl, releaseYear } = movie;

  return (
    <div className="w-[12.125rem] h-[25.0625rem] ">
      {/* --title */}
      <div className="w-full flex justify-between 	justify-self-center	mb-6 ">
        <span className="text-white text-xl font-medium	leading-5 max-w-[8.75rem] h-[40px] text-ellipsis flex items-center 	">
          {name}
        </span>
        <div className="flex items-center align-top	">
          <Image width={16} height={15.42} src="/icons/star.png" alt={""} />

          <span className="text-[--yellow] text-base font-semibold leading-[0.9005rem] align-top">
            4.9
          </span>
        </div>
      </div>
      {/* post */}
      <div>
        <Image alt={""} src={postUrl} width={194} height={289} />
      </div>

      <div className="flex justify-between my-[0.5rem] text-[--gray-light]">
        <div className="flex gap-[0.25rem]">
          <Image alt="" src="/icons/clock.svg" width={20} height={20} />
          {duration}
        </div>
        <div className="flex gap-[0.25rem]">
          <Image alt="" src="/icons/CalendarBlank.svg" width={20} height={20} />
          {releaseYear}
        </div>
      </div>
      <ButtonPlay />
    </div>
  );
};
