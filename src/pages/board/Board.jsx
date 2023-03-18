/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CrosswordContainer } from "./Board.styles";
import { useTheme } from "@emotion/react";

export const Board = () => {
    const [puzzle, setPuzzle] = useState(null);
    const date = useParams();
    const theme = useTheme();

    useEffect(() => {
        const URL =
            "http://localhost:8080/puzzle/" +
            date.year +
            "/" +
            date.month +
            "/" +
            date.day;
        axios
            .get(URL)
            .then((response) => {
                setPuzzle(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [date]);

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
