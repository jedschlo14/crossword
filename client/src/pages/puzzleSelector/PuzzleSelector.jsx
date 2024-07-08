/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { TreeView } from 'components';
import { usePuzzleSelector } from './usePuzzleSelector';
import { PuzzleSelectorWrapper } from './PuzzleSelector.styles';
import { Foreground, Header, PageWrapper } from 'assets/styles/Common.styles';

export const PuzzleSelector = () => {
    const { treeData, selectedData, setSelectedData } = usePuzzleSelector();

    return (
        <PageWrapper>
            <Header>Select a Puzzle</Header>
            <Foreground>
                <PuzzleSelectorWrapper>
                    <TreeView
                        selected={selectedData}
                        onSelectedItemsChange={(_, itemId) => {
                            setSelectedData(itemId);
                        }}
                    >
                        {treeData}
                    </TreeView>
                </PuzzleSelectorWrapper>
            </Foreground>
        </PageWrapper>
    );
};
