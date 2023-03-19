/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { PauseMenuWrapper } from "./PauseMenu.styles";

export const PauseMenu = ({
    isActive,
    isPaused,
    handleStart,
    handlePauseResume,
}) => {
    const handleClick = () => (isActive ? handlePauseResume() : handleStart());

    return (
        <PauseMenuWrapper
            isActive={isActive}
            isPaused={isPaused}
            onClick={handleClick}
        />
    );
};

// {
//     /* <PauseMenuModal onClick={(e) => e.stopPropagation()}>
//     <PauseMenuTitle>Pause Menu</PauseMenuTitle>
//     <PauseMenuButton onClick={handleClick}>
//         {isActive ? "Resume" : "Start"}
//     </PauseMenuButton>
// </PauseMenuModal> */
// }
