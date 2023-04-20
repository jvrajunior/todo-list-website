import { useState, useEffect } from "react"

const Hooks = () => {

    {/*A variavel novaIdade recebe o valor de useState e a variavel setNovaIdade define um novo valor pra novaIdade*/}
    const [novaIdade, setNovaIdade] = useState(40)

    {/*Função para alterar o valor da variavel novaIdade declarada anteriormente*/}
    const changeAge = () => {
        setNovaIdade(45)
    }

    return (
        <div>
            <p>Idade: {novaIdade}</p>
            {/*Chama a função changeAge ao clicar no botão*/}
            <button onClick={changeAge}>Mudar idade</button>
            
        </div>
    )
}

export default Hooks