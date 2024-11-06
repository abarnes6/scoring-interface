import "./App.css";
import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";

export const App: FC = () => {
    const [account, setAccount] = useState<number | null>(null);

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {account && <Route path="/login" element={<Login />} />}
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};
