const { arrayOf } = require("prop-types")

const Pokemon = (pokemon) => {
    return (
        <div className="pokemon">
            <h3 className="pokemon-name">{pokemon.name}</h3>
            <img src={pokemon.image} alt="" />
        </div>
    )
}

Pokemon = Pokemons.propTypes = arrayOf( PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,

}));