import styled from '@emotion/styled';

export const PuzzlePageWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(10, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    padding: 3rem;
    overflow: hidden;
    max-width: 75vw;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    .clues {
        grid-row: 1 / -1;
        grid-column: 2;
        display: flex;
        background-color: ${({ theme }) => theme.foreground};
        border-color: ${({ theme }) => theme.border};
        border-radius: 0.5rem;
        border-width: 0.25rem;
        border-style: solid;
        padding: 0;
    }

    .clue {
        // display: table;
        font-size: 1rem;
        padding: 0.125rem 0.25rem;
        margin: 0;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .direction {
        overflow-y: scroll;
        scrollbar-color: ${({ theme }) => theme.scrollbar} transparent;
        padding: 1.5rem;
        margin-bottom: 0 !important;
        border-style: solid;
        border-color: ${({ theme }) => theme.border};
        border-width: 0.125rem;
    }

    .crossword {
        grid-row: 2;
        grid-column: 1;
        flex: 1 !important;
    }

    svg {
        border-color: ${({ theme }) => theme.border};
        border-radius: 0.5rem;
        border-width: 0.25rem;
        border-style: solid;
    }

    input:focus-visible {
        outline: none;
    }
`;

export const CrosswordWrapper = styled.div`
    grid-row: 1 / -1;
    grid-column: 1 / -1;

    display: grid;
    grid-template-rows: repeat(10, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    overflow: hidden;

    @media (max-width: 1200px) {
        grid-row: 2 / -1;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .direction {
            padding: 1rem;
        }

        .crossword {
            max-width: 625px;
            width: 100%;
        }

        .clues {
            height: 125px;
        }
    }
`;
