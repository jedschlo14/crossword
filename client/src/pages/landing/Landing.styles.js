import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LandingWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
`;

export const MenuSelector = styled(Link)`
    background-color: ${({ theme }) => theme.foreground};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 1rem;
    border-radius: 1rem;
    width: 250px;
    height: 250px;
    cursor: pointer;
    text-decoration: none;
`;
