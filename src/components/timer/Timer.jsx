/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { TimerWrapper, PauseButton, Digits } from "./Timer.styles";
import { PauseMenu } from "components";
import { useTimer } from "./useTimer";

export const Timer = () => {
    const { isActive, isPaused, time, handleStart, handlePauseResume } =
        useTimer();

    return (
        <TimerWrapper>
            <Digits>
                {("0" + Math.floor(time / 3600000)).slice(-2)}:
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </Digits>
            <PauseButton onClick={handlePauseResume}>Pause</PauseButton>
            <PauseMenu
                isActive={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
            />
        </TimerWrapper>
    );
};
