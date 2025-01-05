import { useEffect, useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [massa, setMassa] = useState(0);
    let [imc, setImc] = useState(0);
    let [categoria, setCategoria] = useState('Seu IMC');
    let imcAtualizado = 0;

    useEffect(() => {
        calculaImc();
    },[massa, altura])

    const calculaImc = () => {
        let aluraEmMetros = altura / 100;
        
        if (massa != 0 && altura != 0){
            imcAtualizado = (massa / (aluraEmMetros * aluraEmMetros));
            setImc(imcAtualizado.toFixed(2));
            // console.log(`Atualizou imc para ${imcAtualizado}`)
            // console.log('Altura ou massa diferente de zero')
        } else {
            setImc('');
            setCategoria('Seu IMC');
        }

        switch (true) {
            case (imcAtualizado < 1):
                setCategoria('Seu IMC');
                break;
            case (imcAtualizado < 18.50):
                setCategoria(` - Magreza`);
                break;
            case (imcAtualizado <= 24.99):
                setCategoria(` - Normal`);
                break;
            case (imcAtualizado <= 29.99):
                setCategoria(` - Sobrepeso`);
                break;
            case (imcAtualizado <= 39.99):
                setCategoria(` - Obesidade`);
                break;
            default:
                setCategoria(` - Obesidade Grave`);
        }
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
        </>
    )
}

export default Form;