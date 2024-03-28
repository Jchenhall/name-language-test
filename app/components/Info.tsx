"use client";
import { UserStatus } from "@/enums/enums";
import Time from "./InfoComponents/Time";

type InfoProps = {
  userStatus: UserStatus;
};
export const Info: React.FC<InfoProps> = ({ userStatus }) => {
  return (
    <div className="flex items-end z-40">
      <Time />
    </div>
  );
};
