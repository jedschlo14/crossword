import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LandingWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
`;

export const MenuSelector = styled(Link)`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.foreground};
    text-decoration: none;
    width: 250px;
    height: 250px;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    line-height: 225px;
    padding: 1rem;
`;
