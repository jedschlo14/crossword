/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Board, About, PageNotFound, BoardSelector } from "pages";
import { EmotionProvider } from "containers/emotionProvider";
import { PageWrapper } from "assets/styles/Common.styles";

export const App = () => {
    return (
        <EmotionProvider>
            <BrowserRouter>
                <PageWrapper>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/board/:date" element={<Board />} />
                        <Route path="/boards" element={<BoardSelector />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </PageWrapper>
            </BrowserRouter>
        </EmotionProvider>
    );
};
