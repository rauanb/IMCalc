import { useEffect, useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [massa, setMassa] = useState(0);
    let [imc, setImc] = useState(0);
    let [categoria, setCategoria] = useState('Seu IMC');

    useEffect(() => {
        calculaImc();
    },[massa, altura])

    const calculaImc = () => {
        let aluraEmMetros = altura / 100;
        
        if (massa != 0 && altura != 0){
            setImc((massa / (aluraEmMetros * aluraEmMetros)).toFixed(2));
            // console.log('Altura ou massa diferente de zero')
        } else {
            setImc('');
            setCategoria('Seu IMC');
            // console.log("Altura ou massa igual a 0")
        }

        // Atualizar os cases
        switch (true) {
            case (imc < 1):
                setCategoria('Seu IMC');
                break;
            case (imc < 18.5):
                setCategoria(` - Magreza`);
                // setCategoria(`${imc} - Magreza`);
                break;
            case (imc < 24.9):
                setCategoria(` - Normal`);
                // setCategoria(`${imc} - Normal`);
                break;
            case (imc < 29.9):
                setCategoria(` - Sobrepeso`);
                // setCategoria(`${imc}  - Sobrepeso`);
                break;
            case (imc < 39.9):
                setCategoria(` - Obesidade`);
                // setCategoria(`${imc}  - Obesidade`);
                break;
            default:
                setCategoria(` - Obesidade Grave`);
                // setCategoria(`${imc}  - Obesidade Grave`);
        }
        // setImc((massa / (aluraEmMetros * aluraEmMetros)).toFixed(2));
        console.log({imc})
    }

    return (
        <>
        <form className='form'>
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" placeholder="180 cm" onChange={({target}) => setAltura(parseInt(target.value))}/>

            <label htmlFor="massa">Massa</label>
            <input type="number" id="massa" placeholder="60 kg" onChange={({target}) => setMassa(parseInt(target.value))}/>
        </form>
        <h2 className="imc">{imc}{categoria}</h2>
        {/* <h2 className="imc">{categoria}</h2> */}
        {/* {calculaImc()} */}
        </>
    )
}

export default Form;