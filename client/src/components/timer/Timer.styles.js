import styled from '@emotion/styled';
import { Button } from 'assets/styles/Common.styles';

export const TimerWrapper = styled.div`
    grid-row: 1;
    grid-column: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Digits = styled.span`
    font-family: 'Roboto Mono', monospace;
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textAlternate};
    -webkit-text-stroke: 1.5px black;
`;

export const PauseButton = styled(Button)`
    width: 6rem;
    height: 3rem;
    border-width: 0.25rem;
    border-style: solid;
    font-size: 1.25rem;
    font-weight: 600;
`;
