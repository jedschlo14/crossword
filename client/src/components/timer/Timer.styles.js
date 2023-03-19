import styled from "@emotion/styled";

export const TimerWrapper = styled.div`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    padding: 0.5rem;
`;

export const Digits = styled.span`
    grid-column: 0;
    font-family: "Roboto Mono", monospace;
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textAlternate};
    -webkit-text-stroke: 1.5px black;
`;

export const PauseButton = styled.div`
    grid-column: 8 / 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.button.background};
    border-color: ${({ theme }) => theme.border};
    border-radius: 0.5rem;
    border-width: 0.25rem;
    border-style: solid;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.button.hover};
    }
`;
