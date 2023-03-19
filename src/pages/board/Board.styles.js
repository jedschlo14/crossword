import styled from "@emotion/styled";

export const CrosswordWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(10, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    padding: 3rem;
    overflow: hidden;

    .clues {
        grid-row: 1 / 11;
        grid-column: 2;
        display: flex;
        background-color: ${({ theme }) => theme.foreground};
        border-color: ${({ theme }) => theme.border};
        border-radius: 0.5rem;
        border-width: 0.375rem;
        border-style: solid;
        padding: 0;
    }

    .clue {
        display: table;
        font-size: 1rem;
        padding: 0.125rem 0.25rem;
        margin: 0;
        border-radius: 0.25rem;
    }

    .direction {
        overflow-y: scroll;
        padding: 1.5rem;
        margin-bottom: 0 !important;
    }

    .crossword {
        grid-row: 2 / 4;
        grid-column: 1;
        flex: 1 !important;
    }

    svg {
        border-color: ${({ theme }) => theme.border};
        border-radius: 0.5rem;
        border-width: 0.375rem;
        border-style: solid;
    }

    input:focus-visible {
        outline: none;
    }
`;
