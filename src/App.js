import './App.css';
import Pokedex from "./Pokedex";
import PokeList from './PokeList';
import Pokecard from "./Pokecard"; 
import "./Pokecard.css";
import "./Pokedex.css";


function App() {
  return (
    <div className="App">
      <Pokedex items={PokeList} />
    </div>
  );
}

export default App;
