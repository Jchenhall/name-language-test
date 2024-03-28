"use client";
import { Dispatch, SetStateAction } from "react";
import { UserStatus } from "@/enums/enums";
import FadingText from "./BackgroundEffects/FadingText";

type BackgroundProps = {
    userStatus: UserStatus;
    setUserStatusTo: Dispatch<SetStateAction<UserStatus>>;
};
export const Background: React.FC<BackgroundProps> = ({
    userStatus,
    setUserStatusTo,
}) => {
    const handleOnClick = (): void => {
        if (userStatus === UserStatus.LoggedOut) {
            setUserStatusTo(UserStatus.LoggingIn);
        }
    };

    const conditionRender =
        userStatus === UserStatus.LoggingIn ||
        userStatus === UserStatus.LogInError ||
        userStatus === UserStatus.VerifyingLogIn;
    const logginIn = userStatus === UserStatus.LoggingIn;
    return (
        <div className={`${logginIn ? 'opacity-0' : 'opacity-1'} w-full h-full`} onClick={handleOnClick}>
            <FadingText />
            <button className="text-white" >hi</button>
        </div>




    );
};
