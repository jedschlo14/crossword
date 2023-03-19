import styled from "@emotion/styled";

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
