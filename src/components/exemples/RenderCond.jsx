const RenderCond = ({x,y}) => {


    return (
        <div>
            {x > 20 ? <p> X é maior que 5</p> : <p>X é menor que 5</p>}
            <p>O valor de Y é {y}</p>
        </div>
    )
}

export default RenderCond