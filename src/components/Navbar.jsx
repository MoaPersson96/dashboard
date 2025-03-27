import { NavLink } from "react-router-dom";


export default function Navbar() {


    return <nav className="bg-white-200 p-2">
        <menu className="list-none flex center gap-6 flex-wrap">
            <li><NavLink to="/"> Dashboard </NavLink></li>
            <li><NavLink to="/form"> Form </NavLink></li>
            <li><NavLink to="/pictures"> Pictures </NavLink></li>
        </menu>
    </nav>
}