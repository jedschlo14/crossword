/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import { CrosswordContainer } from "./Board.styles";
import { useBoard } from "./useBoard";

export const Board = () => {
    const { puzzle, theme } = useBoard();

    return (
        <CrosswordContainer>
            {puzzle != null ? (
                <ThemeProvider theme={theme.crossword}>
                    <Crossword data={puzzle} />
                </ThemeProvider>
            ) : null}
        </CrosswordContainer>
    );
};
