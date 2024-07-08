import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export const usePuzzle = () => {
    const [puzzle, setPuzzle] = useState(null);
    const [puzzleName, setPuzzleName] = useState('');
    const params = useParams();
    const theme = useTheme();

    useEffect(() => {
        const dateStr = new Date(
            params.year,
            params.month,
            params.day
        ).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setPuzzleName(dateStr);
        const URL = "http://localhost:8080/puzzle/" + params.year + "/" + params.month + "/" + params.day; // prettier-ignore
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
        puzzleName,
        theme,
    };
};
