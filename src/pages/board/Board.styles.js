import styled from "@emotion/styled";

export const CrosswordContainer = styled.div`
    background-color: ${({ theme }) => theme.background};
    display: flex;
    padding: 3rem;
    border-radius: 0.75rem;
    overflow: hidden;

    .clues {
        background-color: ${({ theme }) => theme.foreground};
        display: flex;
        border-radius: 0 0.5em 0.5em 0.5em;
        border: 0.25em solid;
        border-color: ${({ theme }) => theme.border};
    }

    .direction {
        overflow-y: scroll;
        padding: 1.5em;
        margin: 0;
    }

    .clue {
        font-size: medium;
        padding: 0.125em;
    }

    .crossword {
        flex: 1 !important;
    }

    svg {
        border-radius: 0.5em 0em 0em 0.5em;
        border-width: 0.25em 0 0.25em 0.25em;
        border-style: solid;
        border-color: ${({ theme }) => theme.border};
    }

    input:focus-visible {
        outline: none;
    }
`;
