import Pokemon from "../interfaces/Pokemon";

export async function getDataAsync() {
  const response: Array<Pokemon> = [];

  const pokemons: any = await (
    await fetch("https://pokeapi.co/api/v2/pokemon")
  ).json();

  for (const pokemon of pokemons.results) {
    const pokemonDetails: Pokemon = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    ).json();

    response.push(pokemonDetails);
  }

  for (const iterator of response) {
    for (const item of iterator.abilities) {
      const abilityDetails: any = await (await fetch(item.ability.url)).json();

      item.ability = {
        ...item.ability,
        description: abilityDetails.flavor_text_entries.filter(
          (e) => e.language.name === "en"
        )[0].flavor_text,
      };
    }
  }

  return response;
}
