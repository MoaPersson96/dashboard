import { NavLink } from "react-router-dom";


export default function Navbar() {


    return <nav>
        <menu className="list-none flex center">
            <li><NavLink to="/"> Dashboard </NavLink></li>
            <li><NavLink to="/form"> Form </NavLink></li>
            <li><NavLink to="/pictures"> Pictures </NavLink></li>
        </menu>
    </nav>
}