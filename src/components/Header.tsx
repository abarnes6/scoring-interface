import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="text-white mr-4">
                        Home
                    </Link>
                    <Link to="/about" className="text-white">
                        About
                    </Link>
                </div>
                <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};
