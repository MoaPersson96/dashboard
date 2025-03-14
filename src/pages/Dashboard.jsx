

export default function Dashboard() {


    return <main className="grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense grid-rows-">
        <h1 className="col-span-full relative left-1/12">Dashboard</h1>
        <section className="col-start-1 col-span-5 bg-blue-100">
            <h2>Stapeldiagram</h2>
            <img/>
        </section>
        <section className=" col-span-4 bg-blue-200">
            <h2>Tårtdiagram</h2>
            <img/>
        </section>
        <section className=" col-span-3 row-span-2 bg-pink-200">
            <h2>Visare</h2>
            <img/>
            <img/>
            <img/>
        </section>
        <section className=" col-span-7 bg-blue-200">
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
        <section className=" col-span-2 bg-blue-100">
            <h2>Mätare</h2>
            <section>
                <h3>Tillbud</h3>
                <span>0</span>
            </section>
            <section>
                <h3>Olyckor</h3>
                <span>0</span>
            </section>
        </section>
    </main>
}