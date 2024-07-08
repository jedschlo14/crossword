import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`;

export const Foreground = styled.div`
    gap: 1rem;
    background-color: ${({ theme }) => theme.foreground};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 2rem;
    border-radius: 1rem;
`;

export const Header = styled.div`
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    line-height: 225px;
    color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, isSpecial }) =>
        isSpecial ? theme.button.special.background : theme.button.background};
    border-color: ${({ theme, isSpecial }) =>
        isSpecial ? theme.button.special.hover : theme.button.hover};
    border-style: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: ${({ theme, isSpecial }) =>
            isSpecial ? theme.button.special.hover : theme.button.hover};
        color: ${({ theme }) => theme.textAlternate};
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.text};
`;
