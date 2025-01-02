import { useEffect, useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState(180);
    let [massa, setMassa] = useState(60);
    let [imc, setImc] = useState(0);

    useEffect(() => {
        // console.log({altura})
        calculaImc();
    },[altura])

    useEffect(() => {
        // console.log({massa})
        calculaImc();
    },[massa])

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
        <h2>{imc}</h2>
        </>
    )
}

export default Form;