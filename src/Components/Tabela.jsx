const Tabela = () => {
    return (
        <>
        {/* <h3>Tabela</h3> */}
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Menor que 18.50</th>
                    <th>Magreza</th>
                </tr>
                <tr>
                    <th>Entre 18.5 e 24.99</th>
                    <th>Normal</th>
                </tr>
                <tr>
                    <th>Entre 25 e 29.99</th>
                    <th>Sobrepeso</th>
                </tr>
                <tr>
                    <th>Entre 30 e 39.99</th>
                    <th>Obesidade</th>
                </tr>
                <tr>
                    <th>Maior que 40</th>
                    <th>Obesidade Grave</th>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Tabela;