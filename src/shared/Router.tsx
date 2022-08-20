import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
