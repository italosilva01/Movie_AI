import Image from "next/image";
import { ButtonPlay } from "../ButtonPlay";

export const Movie = () => {
  return (
    <div className="w-[12.125rem] h-[25.0625rem] ">
      {/* --title */}
      <div className="w-full flex justify-between justify-items-center	justify-self-center	mb-6">
        <span className="text-white text-xl font-medium	leading-5 max-w-[8.75rem]	">
          Barbie
        </span>
        <div className="flex items-center	">
          <Image width={16} height={15.42} src="/icons/star.png" alt={""} />

          <span className="text-[--yellow] text-base font-semibold leading-[0.9005rem]">
            4.9
          </span>
        </div>
      </div>
      {/* post */}
      <div>
        <Image alt={""} src="/posts/barbier.png" width={194} height={289} />
      </div>

      <div className="flex justify-between my-[0.5rem]">
        <div className="flex gap-[0.25rem]">
          <Image alt="" src="/icons/clock.svg" width={20} height={20} />
          1:54:00
        </div>
        <div className="flex gap-[0.25rem]">
          <Image alt="" src="/icons/CalendarBlank.svg" width={20} height={20} />
          2023
        </div>
      </div>
      <ButtonPlay />
    </div>
  );
};
