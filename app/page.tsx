"use client";

import PointerGlow from "./components/BackgroundEffects/PointerGlow";
import FadingText from "./components/BackgroundEffects/FadingText";
import { useState } from "react";
import { UserStatus } from "@/enums/enums";
import { Info } from "./components/Info";
import { Background } from "./components/Background";


export default function Home() {
  const [userStatus, setUserStatusTo] = useState<UserStatus>(
    UserStatus.LoggedOut
  );
  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  };
  console.log(getStatusClass());
  const loggedOut = userStatus === UserStatus.LoggedOut;
  const loggingIn = userStatus === UserStatus.LoggingIn;
  const loggedIn = userStatus === UserStatus.LoggedIn;


  return (
    <main className="relative h-full w-full">
      <div
        className={` m-10 absolute z-20
        ${loggedOut || loggingIn ? "translate-x-0" : "translate-x-100"}
        ${loggedOut || loggingIn ? " bottom-0" : undefined} 
        ${loggedOut || loggingIn ? "left-0" : undefined}
        ${loggedOut ? "ml-10" : "ml-0"}
        ${loggedOut || loggedIn ? "opacity-100" : "opacity-0"} 
        transition-all duration-300 
          text-2xl font-bold`}
      >
        <Info userStatus={userStatus} />
      </div>
      <Background userStatus={userStatus} setUserStatusTo={setUserStatusTo} />

    </main>
  );
}
