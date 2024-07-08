/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';
import { Timer } from 'components';
import { PuzzlePageWrapper, CrosswordWrapper } from './Puzzle.styles';
import { usePuzzle } from './usePuzzle';

export const Puzzle = () => {
    const { puzzle, puzzleName, theme } = usePuzzle();

    return (
        <ThemeProvider theme={theme.crossword}>
            {puzzle != null ? (
                <PuzzlePageWrapper>
                    <CrosswordWrapper>
                        <Crossword data={puzzle} />
                    </CrosswordWrapper>
                    <Timer puzzleName={puzzleName} />
                </PuzzlePageWrapper>
            ) : null}
        </ThemeProvider>
    );
};
