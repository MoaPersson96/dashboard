

export default function Form() {


    return <main>
        <h1>Kontaktformulär</h1>
        <form className="flex flex-col items-end">
            <label className="flex">
                Namn
                <input className="w-1/2 left-1.5"/>
            </label>
            <label>
                Efternamn
                <input/>
            </label>
            <label>
                Epost
                <input/>
            </label>
            <label>
                Meddelande
                <textarea/>
            </label>
            <button>Skicka</button>
        </form>
    </main>
}