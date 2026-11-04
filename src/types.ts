export interface PokemonApiResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  imageUrl: string | null;
}