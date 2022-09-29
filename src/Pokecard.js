import React from "react"; 

const Pokecard = ({name, id, type, baseExperience}) => {
    return (
        <div className="Pokecard">
            <h1>{name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <p>Type: {type}</p>
            <p>EXP: {baseExperience}</p>
        </div>
    )
}

export default Pokecard; 