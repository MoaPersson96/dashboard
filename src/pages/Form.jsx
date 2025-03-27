

export default function Form() {

    return (
    <main className="dark:bg-gray-800 dark:text-white bg-white text-black min-h-screen p-4">
        <h1 className="text-2xl mb-4 dark:text-white">Kontaktformulär</h1>
        <form className="flex flex-col items-end gap-4">
            <label className="flex flex-col w-full dark:text-white">
                Förnamn
                <input className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
            </label>
            <label className="flex flex-col w-full dark:text-white">
                Efternamn
                <input className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
            <label className="flex flex-col w-full dark:text-white">
                Epost
                <input className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
            <label className="flex flex-col w-full dark:text-white">
                Meddelande
                <textarea className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Skicka</button>
        </form>
    </main>
    );
}