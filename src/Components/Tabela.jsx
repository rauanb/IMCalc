const Tabela = () => {
    return (
        <>
        <h2>Tabela</h2>
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Menor que 18.5</th>
                    <th>Magreza</th>
                </tr>
                <tr>
                    <th>Entre 18.5 e 24.9</th>
                    <th>Normal</th>
                </tr>
                <tr>
                    <th>Entre 25e 29.9</th>
                    <th>Sobrepeso</th>
                </tr>
                <tr>
                    <th>Entre 30 e 39.9</th>
                    <th>Obesidade</th>
                </tr>
                <tr>
                    <th>Maior que 40</th>
                    <th>Obesidade Grave</th>
                </tr>
            </tbody>
        </table>
        <tbody>
            <tr></tr>
        </tbody>
        </>
    )
}

export default Tabela;