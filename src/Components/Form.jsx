import { useEffect, useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [massa, setMassa] = useState(0);
    let [imc, setImc] = useState(0);

    useEffect(() => {
        calculaImc();
    },[massa, altura])

    const calculaImc = () => {
        let aluraEmMetros = altura / 100;
        
        setImc((massa / (aluraEmMetros * aluraEmMetros)).toFixed(2));

    }

    return (
        <>
        <form className='form'>
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" placeholder="180 cm" onChange={({target}) => setAltura(parseInt(target.value))}/>

            <label htmlFor="massa">Massa</label>
            <input type="number" id="massa" placeholder="60 kg" onChange={({target}) => setMassa(parseInt(target.value))}/>
        </form>
        <h2 className="imc">{imc}</h2>
        </>
    )
}

export default Form;