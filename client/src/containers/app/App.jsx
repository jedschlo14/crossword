/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Puzzle, About, PageNotFound, PuzzleSelector } from 'pages';
import { EmotionProvider } from 'containers/emotionProvider';
import { PageWrapper } from 'assets/styles/Common.styles';

export const App = () => {
    return (
        <EmotionProvider>
            <BrowserRouter>
                <PageWrapper>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route
                            path='/puzzle/:year/:month/:day'
                            element={<Puzzle />}
                        />
                        <Route path='/puzzle' element={<PuzzleSelector />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </PageWrapper>
            </BrowserRouter>
        </EmotionProvider>
    );
};
