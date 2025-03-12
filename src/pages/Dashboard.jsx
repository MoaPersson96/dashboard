

export default function Dashboard() {


    return <main>
        <h1>Dashboard</h1>
        <section>
            <h2>Stapeldiagram</h2>
            <img/>
        </section>
        <section>
            <h2>Tårtdiagram</h2>
            <img/>
        </section>
        <section>
            <h2>Visare</h2>
            <img/>
            <img/>
            <img/>
        </section>
        <section>
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
        <section>
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