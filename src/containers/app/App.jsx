/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Board, About, PageNotFound } from "pages";
import { EmotionProvider } from "containers/emotionProvider";
import { PageContainer } from "assets/styles/Common.styles";

export const App = () => {
    return (
        <EmotionProvider>
            <BrowserRouter>
                <PageContainer>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/:year/:month/:day" element={<Board />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </PageContainer>
            </BrowserRouter>
        </EmotionProvider>
    );
};
