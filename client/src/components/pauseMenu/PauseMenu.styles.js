import styled from "@emotion/styled";

export const PauseMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: ${({ isActive, isPaused }) =>
        !isActive || isPaused ? "rgba(0, 0, 0, 0.5)" : "transparent"};
    backdrop-filter: ${({ isActive, isPaused }) =>
        !isActive || isPaused ? "blur(8px)" : "none"};
    display: ${({ isActive, isPaused }) =>
        !isActive || isPaused ? "flex" : "none"};
    transition: all 0.3s ease;
`;

// export const PauseMenuModal = styled.div`
//     background-color: ${({ theme }) => theme.foreground};
//     padding: 1.5rem;
//     border-radius: 0.5rem;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// export const PauseMenuTitle = styled.h2``;

// export const PauseMenuButton = styled.button`
//     background-color: ${({ theme }) => theme.button.background};
//     font-size: 1rem;
//     font-weight: 600;
//     border-radius: 0.5rem;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//     padding: 0.5rem 1rem;
//     appearance: none;
//     border: none;
//     background-color: transparent;
//     color: inherit;
//     text-decoration: none;
// `;
