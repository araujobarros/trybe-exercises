import React from 'react';
import Pokemon from './Pokemon';



class Pokedex extends React.Component{
    render() {
        const listPokemons = this.props.pokemons;
        return (
            <div>
            {listPokemons.map(element => <Pokemon key={element.id.toString()} card={element}/>)}
            </div>
        )
    }
}

export default Pokedex;