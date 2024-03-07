import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <Contador/>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1)
    }

    function SubtrairContador() {
        setContador(contador - 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={SubtrairContador}>Subtrair</button>
        </div>
    )
}

function CapsLock(props) {
    const textoInserido = props.children
    const textoEmCapsLock = textoInserido.toUpperCase()

    return (
        <div>{textoEmCapsLock}</div>
    )
}

export default Home