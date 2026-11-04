import { BuscadorPokemon } from './components/BuscadorPokemon';

function App() {
  return (
    <main style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Pokedex</h1>
      <p style={{ color: '#666' }}>Proyecto colaborativo de Frontend</p>
      
      <BuscadorPokemon />
    </main>
  );
}

export default App;