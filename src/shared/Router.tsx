import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Detail from "../components/Detail";
import NotFound from "../components/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:todoID" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
