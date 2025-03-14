import Navbar from "./Navbar"

export default function Header() {


    return <header className="flex justify-between flex-wrap pb-5">
        <span className="text-2xl font-bold italic">Dashbord app 1.0</span>
        <Navbar/>
        <span>Användarnamn <a href="#">Logga ut</a></span>
    </header>
}