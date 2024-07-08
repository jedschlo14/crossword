/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { StyledTreeView } from './TreeView.styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TreeView = (props) => {
    return (
        <ThemeProvider theme={createTheme()}>
            <StyledTreeView {...props} />
        </ThemeProvider>
    );
};
