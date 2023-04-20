const Events = () => {

    const handleClick = () => {
        console.log("Clicou no botão")
    }

    return (
        <div className="Exemplo 2">
            <p>Exemplo 2</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => console.log("Teste")}>Evento no Elemento</button>
        </div>
    );
};

export default Events