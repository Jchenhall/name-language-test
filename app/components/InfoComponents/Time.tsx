"use client";
import { useCurrentDateEffect } from "@/context/Date";
import { T } from "@/utils/TimeUtil";

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();

  return (
    <h1 className="text-8xl  h-24  drop-shadow-md cursor-pointer">
      {T.format(date)}
    </h1>
  );
};
export default Time;
