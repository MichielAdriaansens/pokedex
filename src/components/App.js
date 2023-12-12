import { useEffect, useState } from 'react';
import '../style/App.css';
import Pokedex from './Pokedex';
import Searchbar from './Searchbar';
import falsePokemon from '../container/falsePokemon';

function App() {

  const [pokemonImg, setPokemonImg] = useState({ front: '', back: '' });
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonDescription, setPokemonDescription] = useState(null);
  const [pokeId, setPokeId] = useState('');
  const [pokeType, setPokeType] = useState([]);
  const [errorMode, setErrorMode] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getPokemonData(input = 241) {
    setLoading(true);
    input = input.toString().toLocaleLowerCase();

    let { pokemon, id, name, types, flavText } = '';
    let images = {};

    pokemon = input.toString();

    setErrorMode(false);

    //try catch error
    try {
      const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();
      const data2 = await ((await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)).json());

      id = data.id;
      name = data.name;

      images.front = data.sprites.front_default;
      //First check if data contains sprites.back_default. not included with all pokemon
      data.sprites.back_default ? (images.back = data.sprites.back_default) : (images.back = data.sprites.front_default);

      types = data.types[0].type.name;

      let flavorTexts = data2.flavor_text_entries.filter((entry => entry.language.name === 'en'));
      let rng = Math.floor(Math.random() * flavorTexts.length);
      flavText = flavorTexts[rng].flavor_text.replaceAll('\n', " ").replaceAll('', ' ').replaceAll('é', 'e');

    } catch (err) {
      setErrorMode(true);

      id = '???';
      name = falsePokemon.title;
      types = '???';
      flavText = falsePokemon.flavText;
    }

    setPokemonImg({ front: images.front, back: images.back });
    setPokemonName(name);
    setPokemonDescription(flavText);
    setPokeId(id);
    setPokeType(types);

    if (document.getElementsByClassName('scroll description')[0]) {
      document.getElementsByClassName('scroll description')[0].scrollTop = 0;
    }

    setLoading(false);
  }

  useEffect(() => {
    getPokemonData();

  }, []);


  return (
    <div className="App">

      <header className="App-header">
        <h1 style={{ marginBottom: '0', marginTop: '0' }} >PokéDex!</h1>

      </header>
      <Searchbar getPokemonData={getPokemonData} />

      <Pokedex
        id={pokeId}
        name={pokemonName}
        images={pokemonImg}
        description={pokemonDescription}
        types={pokeType}
        getData={getPokemonData} //pass on to 'ButtonScrollPoke'
        error={errorMode}
        loading={loading}
      />
    </div>
  );
}

export default App;
