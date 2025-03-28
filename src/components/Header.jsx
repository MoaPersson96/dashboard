import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { login, logout } from "../state/dataReducer";
import Menu from "./Menu";

export default function Header() {
    const loggedIn = useSelector((state) => state.data.loggedIn);
    const dispatch = useDispatch();

    return (
        <header className="flex flex-col bg-gray-300 dark:bg-gray-800 text-black dark:text-white p-4">
            {/* Rubrik, Navbar och inloggningsstatus */}
            <div className="flex justify-between items-center">
                {/* Rubrik */}
                <span className="text-2xl font-bold italic">Dashboard v. Moa</span>

                {/* Navbar och inloggningsstatus */}
                <div className="flex items-center gap-4">
                    <Navbar />
                    {loggedIn ? (
                        <button
                            onClick={() => dispatch(logout())}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logga ut
                        </button>
                    ) : (
                        <button
                            onClick={() => dispatch(login())}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Logga in
                        </button>
                    )}
                </div>
            </div>

            {/* Meny */}
            <div className="mt-2">
                <Menu />
            </div>
        </header>
    );
};