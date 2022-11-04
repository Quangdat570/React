const PokemonList = ({pokemons}) => {
    const List = pokemons.map((pokemon) => <Pokemon pokemon = {pokemon}/>)
    return <div>{List}</div>
}