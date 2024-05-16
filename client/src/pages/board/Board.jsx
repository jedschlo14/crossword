/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';
import { Timer } from 'components';
import { BoardPageWrapper, CrosswordWrapper } from './Board.styles';
import { useBoard } from './useBoard';

export const Board = () => {
    const { puzzle, puzzleName, theme } = useBoard();

    return (
        <ThemeProvider theme={theme.crossword}>
            {puzzle != null ? (
                <BoardPageWrapper>
                    <CrosswordWrapper>
                        <Crossword data={puzzle} />
                    </CrosswordWrapper>
                    <Timer puzzleName={puzzleName} />
                </BoardPageWrapper>
            ) : null}
        </ThemeProvider>
    );
};
