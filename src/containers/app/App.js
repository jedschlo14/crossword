import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Board, About, PageNotFound } from "pages";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:year/:month/:day" element={<Board />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
