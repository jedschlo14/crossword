/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
    PauseMenuWrapper,
    PauseMenuButton,
    PauseMenuTitle,
    PauseMenuModal,
    PauseMenuButtons,
} from './PauseMenu.styles';
import { StyledLink } from 'assets/styles/Common.styles';

export const PauseMenu = ({
    puzzleName,
    isActive,
    isPaused,
    handleStart,
    handlePauseResume,
}) => {
    const handleResumeClick = () =>
        isActive ? handlePauseResume() : handleStart();

    return (
        <PauseMenuWrapper
            isActive={isActive}
            isPaused={isPaused}
            // onClick={handleResumeClick}
        >
            <PauseMenuModal onClick={(e) => e.stopPropagation()}>
                <PauseMenuTitle>Puzzle: {puzzleName}</PauseMenuTitle>
                <PauseMenuButtons>
                    <PauseMenuButton onClick={handleResumeClick}>
                        {isActive ? 'Resume' : 'Start'}
                    </PauseMenuButton>
                    <StyledLink to='/puzzle'>
                        <PauseMenuButton isSpecial={true}>Exit</PauseMenuButton>
                    </StyledLink>
                </PauseMenuButtons>
            </PauseMenuModal>
        </PauseMenuWrapper>
    );
};
