import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import { login, logout } from "../state/dataReducer"

export default function Header() {
    const loggedIn = useSelector((state) => state.data.loggedIn)
    console.log(loggedIn)
    const dispatch = useDispatch()

    return <header className="flex justify-between flex-wrap pb-5">
        <span className="text-2xl font-bold italic">Dashbord app 1.0</span>
        <Navbar/>
        {
            loggedIn ?
            <span>Användarnamn <button onClick={() => dispatch(logout())} >Logga ut</button></span>
            :
            <span><button onClick={() => dispatch(login())} >Logga in</button></span>

        }

    </header>
}