/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from "@emotion/react";
import { dark } from "assets/styles/Theme.styles";

export const EmotionProvider = ({ children }) => {
    return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};
