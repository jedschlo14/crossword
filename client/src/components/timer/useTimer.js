import { useState, useEffect } from 'react';

export const useTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = isPaused
            ? null
            : setInterval(() => setTime((time) => time + 10), 10);
        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        console.log('handlePauseResume');
        setIsPaused(!isPaused);
    };

    return {
        isActive,
        isPaused,
        time,
        handleStart,
        handlePauseResume,
    };
};
