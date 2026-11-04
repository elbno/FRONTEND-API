import { Pokemon, PokemonApiResponse } from './types';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (query: string, signal?: AbortSignal): Promise<Pokemon> => {
  const res = await fetch(`${API_URL}/${encodeURIComponent(query)}`, { signal });

  if (res.status === 404) {
    throw new Error(`No existe ningún Pokémon con el código o nombre "${query}".`);
  }

  if (!res.ok) {
    throw new Error(`Error del servidor (HTTP ${res.status}).`);
  }

  const raw = (await res.json()) as PokemonApiResponse;

  return {
    id: raw.id,
    name: raw.name,
    types: raw.types.map((t) => t.type.name),
    abilities: raw.abilities.map((a) => a.ability.name),
    imageUrl: raw.sprites.front_default,
  };
};