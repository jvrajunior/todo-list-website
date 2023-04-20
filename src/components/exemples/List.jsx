const List = () => {

    const items = [
        {
            id: 1,
            name: "Joao"
        },
        {
            id: 2,
            name: "Lucas"
        },
        {
            id: 3,
            name: "Matheus"
        },
        {
            id: 4,
            name: "Pedro"
        }
    ]

    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List