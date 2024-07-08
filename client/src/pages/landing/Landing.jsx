/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { LandingWrapper, MenuSelector } from './Landing.styles';
import { Header } from 'assets/styles/Common.styles';

export const Landing = () => {
    return (
        <LandingWrapper>
            <MenuSelector to='/puzzle'>
                <Header>Puzzles</Header>
            </MenuSelector>
        </LandingWrapper>
    );
};
