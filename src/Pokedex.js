import React from "react";
import PokeList from "./PokeList";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
       
        return (
        <div>
            <h1>POKEDEX</h1>
            <div>
                {props.items.map(i => {
                    return (
                    <div className="Pokedex">
                        <Pokecard id={i.id} name={i.name} type={i.type} baseExperience={i.base_experience} />
                    </div>
                    )
                })}
                
            </div>
        </div>
        )
}

export default Pokedex; 