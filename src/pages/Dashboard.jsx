export default function Dashboard() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense">
            
            <section className="p-4 col-start-1 md:col-span-5 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded shadow-md">
                <h2>Stapeldiagram</h2>
                <img />
            </section>
            
            <section className="p-4 md:col-span-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded shadow-md">
                <h2>Tårtdiagram</h2>
                <img />
            </section>
            
            <section className="p-4 md:col-span-3 row-span-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded shadow-md flex flex-col items-center gap-6">
                <h2>Visare</h2>
                <div>
                    <div>Vinst</div>
                    <meter value="50" min="0" low="25" optimum="100" high="75" max="100" />
                    <div>50%</div>
                </div>
                <div>
                    <div>Utsläpp</div>
                    <meter value="10" min="0" low="25" optimum="0" high="75" max="100" />
                    <div>10%</div>
                </div>
                <div>
                    <div>Arbetsglädje</div>
                    <meter value="90" min="0" low="25" optimum="100" high="75" max="100" />
                    <div>90%</div>
                </div>
            </section>
            
            <section className="p-4 md:col-span-7 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded shadow-md">
                <h2>Tabell</h2>
                <table className="w-full text-black dark:text-gray-100">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-400 dark:border-gray-600">Namn</th>
                            <th className="border-b border-gray-400 dark:border-gray-600">Poäng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-gray-300 dark:border-gray-600">Adam</td>
                            <td className="border-b border-gray-300 dark:border-gray-600">100</td>
                        </tr>
                        <tr>
                            <td className="border-b border-gray-300 dark:border-gray-600">Eva</td>
                            <td className="border-b border-gray-300 dark:border-gray-600">102</td>
                        </tr>
                        <tr>
                            <td className="border-b border-gray-300 dark:border-gray-600">Inger</td>
                            <td className="border-b border-gray-300 dark:border-gray-600">0</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section className="p-4 md:col-span-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded shadow-md">
                <h2>Mätare</h2>
                <section>
                    <h3>Tillbud</h3>
                    <span className="text-8xl text-green-600 dark:text-green-400 font-mono">0</span>
                </section>
                <section>
                    <h3>Olyckor</h3>
                    <span className="text-8xl text-green-600 dark:text-green-400 font-mono">0</span>
                </section>
            </section>
        </main>
    );
}