/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
    PauseMenuWrapper,
    PauseMenuButton,
    PauseMenuTitle,
    PauseMenuModal,
} from './PauseMenu.styles';

export const PauseMenu = ({
    puzzleName,
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
        >
            <PauseMenuModal onClick={(e) => e.stopPropagation()}>
                <PauseMenuTitle>Puzzle: {puzzleName}</PauseMenuTitle>
                <PauseMenuButton onClick={handleClick}>
                    {isActive ? 'Resume' : 'Start'}
                </PauseMenuButton>
            </PauseMenuModal>
        </PauseMenuWrapper>
    );
};
