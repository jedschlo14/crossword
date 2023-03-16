import Crossword from "@jaredreisinger/react-crossword";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Board.css";

export const Board = () => {
    const [puzzle, setPuzzle] = useState(null);
    const date = useParams();

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
        <div className="background">
            <div className="crossword-container">
                {puzzle != null ? <Crossword data={puzzle} /> : null}
            </div>
        </div>
    );
};
