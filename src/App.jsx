import { Search, GridGifs } from "./components";
import { useSearchGifs } from "./useSearchGifs";

function App() {
  const {valorInput, onChange, onSubmit, gifs, loading} = useSearchGifs();

  return (
    <div className="App">
      <h1>Buscador de Gifs</h1>
      <Search
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {
      loading ? <h2>Cargando...</h2> : <GridGifs gifs={gifs} />
      }
    </div>
  );
}

export default App;
