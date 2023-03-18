import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const useBoard = () => {
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

    return {
        puzzle,
        theme,
    };
};
