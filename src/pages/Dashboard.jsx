

export default function Dashboard() {


    return <main className="grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense grid-rows-">
        <h1 className="md:col-span-full relative left-1/12">Dashboard</h1>
        <section className="p-2 col-start-1 md:col-span-5 bg-blue-100">
            <h2>Stapeldiagram</h2>
            <img/>
        </section>
        <section className="p-2  md:col-span-4 bg-blue-200">
            <h2>Tårtdiagram</h2>
            <img/>
        </section>
        <section className="p-2 md:col-span-3 row-span-2 bg-pink-200 flex flex-col items-center gap-6">
            <h2>Visare</h2>

            <div>
                <div>Vinst</div>
                <meter value="50" min="0" low="25" optimum="100" high="75" max="100"/>
                <div>50%</div>
            </div>
            <div>
                <div>Utsläpp</div>
                <meter value="10" min="0" low="25" optimum="0" high="75" max="100"/>
                <div>10%</div>
            </div>
            <div>
                <div>Arbetsglädje</div>
                <meter value="90" min="0" low="25" optimum="100" high="75" max="100"/>
                <div>90%</div>
            </div>
        </section>
        <section className="p-2  md:col-span-7 bg-blue-200">
            <h2>Tabell</h2>
            <table>
                <tr>
                    <th>Namn</th>
                    <th>Poäng</th>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Eva</td>
                    <td>102</td>
                </tr>
                <tr>
                    <td>Inger</td>
                    <td>0</td>
                </tr>
            </table>
        </section>
        <section className="p-2  md:col-span-2 bg-blue-100">
            <h2>Mätare</h2>
            <section>
                <h3>Tillbud</h3>
                <span className="text-8xl text-green-500 font-mono">0</span>
            </section>
            <section>
                <h3>Olyckor</h3>
                <span className="text-8xl text-green-500 font-mono">0</span>
            </section>
        </section>
    </main>
}