import React, { useState } from 'react';

export const BuscadorPokemon: React.FC = () => {
  const [busqueda, setBusqueda] = useState<string>('pikachu');
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const consultarPokemon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!busqueda.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      
      const data = await response.json();
      setPokemon(data);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Buscador</h2>
      <form onSubmit={consultarPokemon} style={{ marginBottom: '1rem' }}>
        <input 
          type="text" 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ej: charizard, 1..."
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Buscar</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && (
        <div style={{ marginTop: '1rem' }}>
          {pokemon.sprites?.front_default && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '120px' }} />
          )}
          <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
          <p><strong>ID:</strong> {pokemon.id}</p>
        </div>
      )}
    </div>
  );
};