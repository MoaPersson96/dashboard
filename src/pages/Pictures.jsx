

export default function Pictures() {


    return <main className="dark:bg-gray-800 dark:text-white bg-white text-black min-h-screen p-4">
        <h1 className="text-2xl mb-4">Pictures</h1>
        <section className="grid grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md">
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <figure className="col-span-2 flex flex-col items-center bg-gray-200 dark:bg-gray-600 p-4 rounded">
                <img className="w-1/2 h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
                <figcaption className="mt-2 text-lg dark:text-white">Bild</figcaption>
                <button aria-label="close" className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"> X </button>
            </figure>
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
            <img className="w-full h-auto rounded shadow-md dark:shadow-gray-700" alt="Placeholder" />
        </section>
    </main>
}