import photo from "/src/assets/exemple.jpg"

const Images = () => {
    return (
        <div>
            <img src="/exemple.png" />
            <img src={photo} />
        </div>
    );
};

export default Images