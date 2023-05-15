import Abilities from "./Abilities";
import Types from "./Types";

export default interface Pokemon {
  id: number;
  name: string;
  abilities: Array<Abilities>;
  types: Array<Types>;
  sprites: { front_default: string };
}
