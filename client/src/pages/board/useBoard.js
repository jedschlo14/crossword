import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const useBoard = () => {
    const [puzzle, setPuzzle] = useState(null);
    const params = useParams();
    const theme = useTheme();

    useEffect(() => {
        const date = params.date.split("-");
        const URL = "http://localhost:8080/puzzle/" + date[0] + "/" + date[1] + "/" + date[2]; // prettier-ignore
        axios
            .get(URL)
            .then((response) => {
                setPuzzle(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params]);

    return {
        puzzle,
        theme,
    };
};
