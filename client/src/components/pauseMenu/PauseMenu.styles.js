import styled from '@emotion/styled';
import { Button } from 'assets/styles/Common.styles';

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
        !isActive || isPaused ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
    backdrop-filter: ${({ isActive, isPaused }) =>
        !isActive || isPaused ? 'blur(8px)' : 'none'};
    display: ${({ isActive, isPaused }) =>
        !isActive || isPaused ? 'flex' : 'none'};
    transition: all 0.3s ease;
`;

export const PauseMenuModal = styled.div`
    background-color: ${({ theme }) => theme.foreground};
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 120px;
`;

export const PauseMenuTitle = styled.h3``;

export const PauseMenuButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`;

export const PauseMenuButton = styled(Button)`
    font-size: 1rem;
    font-weight: 600;
`;
