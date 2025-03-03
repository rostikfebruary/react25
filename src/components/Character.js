const Character = ({character}) => {
const {name, img} = character
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <img
                    src={img}
                    alt={name}/>
            </div>
        </div>
    );
};

export {Character};