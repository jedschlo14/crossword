/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import { Timer } from "components";
import { CrosswordWrapper } from "./Board.styles";
import { useBoard } from "./useBoard";

export const Board = () => {
    const { puzzle, theme } = useBoard();

    return (
        <ThemeProvider theme={theme.crossword}>
            {puzzle != null ? (
                <CrosswordWrapper>
                    <Timer />
                    <Crossword data={puzzle} />
                </CrosswordWrapper>
            ) : null}
        </ThemeProvider>
    );
};
