import { useEffect, useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [massa, setMassa] = useState(0);

    useEffect(() => {
        console.log({altura})
    },[altura])

    useEffect(() => {
        console.log({massa})
    },[massa])

    return (
        <form className='form'>
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" placeholder="183 cm" onChange={({target}) => setAltura(parseInt(target.value))}/>

            <label htmlFor="massa">Massa</label>
            <input type="number" id="massa" placeholder="64 kg" onChange={({target}) => setMassa(parseInt(target.value))}/>
        </form>
    )
}

export default Form;