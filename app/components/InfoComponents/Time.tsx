"use client";
import { useCurrentDateEffect } from "@/context/Date";
import { T } from "@/utils/TimeUtil";

const Time = () => {
  const date: Date = useCurrentDateEffect();

  return (
    <div className=" 
    text-8xl 
    relative 
    flex 
    place-items-center 
    before:absolute 
    before:h-[600px] 
    before:w-full            
    before:rounded-full 
    before:bg-gradient-radial
  before:from-white 
    before:to-transparent 
    before:blur-2xl 
    before:content-[''] 
                        
    after:absolute 
    after:-z-20 
    after:h-full 
    after:w-full 
    after:bg-gradient-conic 
    after:from-sky-200 
    after:via-blue-200 
    after:blur-2xl 
    after:content-[''] 
                        
    before:dark:bg-gradient-to-br 
    before:dark:from-transparent 
    before:dark:to-blue-700 
    before:dark:opacity-10 
    
  after:dark:from-sky-900 
  after:dark:via-[#0141ff] 
    after:dark:opacity-40 
    
    before:lg:h-full z-[-1]">


      {T.format(date)}
 
    </div>
  );
};
export default Time;
