"use client";
import { UserStatus } from "@/enums/enums";
import { createContext } from "react";

export interface AppContextInterface {
  userStatus: UserStatus;
  setUserStatusTo: (status: UserStatus) => void;
}

export const AppContext = createContext<AppContextInterface>(null as any);
