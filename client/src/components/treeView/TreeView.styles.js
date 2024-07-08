import styled from '@emotion/styled';
import { TreeView } from '@mui/x-tree-view';

export const StyledTreeView = styled(TreeView)`
    .MuiTreeItem-content {
        border-radius: 0.75rem;
    }
    .MuiTreeItem-content:hover:not(.Mui-selected) {
        background-color: ${({ theme }) => theme.tree.hover} !important;
    }
    .Mui-selected {
        background-color: ${({ theme }) => theme.tree.selected} !important;
    }
`;
