import Navbar from "./Navbar"

export default function Header() {


    return <header class="flex">
        <span class="text-3xl font-bold italic">Dashbord app 1.0</span>
        <Navbar/>
        <span>Användarnamn <a href="#">Logga ut</a></span>
    </header>
}