/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { LandingWrapper, MenuSelector } from "./Landing.styles";

export const Landing = () => {
    return (
        <LandingWrapper>
            <MenuSelector to="/boards">Boards</MenuSelector>
        </LandingWrapper>
    );
};
