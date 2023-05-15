function PokeCard({ pokemon }) {
  const { abilities, types } = pokemon;

  return (
    pokemon && (
      <div className="card h-100 shadow bg-dark bg-gradient">
        <div className="card-body">
          <div
            className={`card-title bg-${types[0].type.name} text-white text-center m-3 p-1 rounded shadow-sm`}
          >
            <h5 className="d-inline">{pokemon.name}</h5>
          </div>
          <div className="d-flex">
            {types.map(({ type }, idx) => (
              <h6
                key={idx}
                className={`card-subtitle mb-2 text-white m-1 p-1 rounded bg-${types[0].type.name}-transparent`}
              >
                {type.name}
              </h6>
            ))}
          </div>
          <img
            className="border card-img-top bg-white"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <div className={`rounded-bottom p-3 bg-${types[0].type.name}-transparent`}>
            {abilities.map(({ ability }, idx) => (
              <div key={idx}>
                <h6 className="card-text text-white"> {ability.name}</h6>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default PokeCard;
