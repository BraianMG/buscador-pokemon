import Footer from './components/Footer';
import Header from './components/Header';
import Searcher from './components/Searcher';
import axios from 'axios';
import { useState } from 'react';

function App() {
  
  const [allPokemon, setAllPokemon] = useState(null);
  const [consult, setConsult] = useState(true)

  const url = 'https://pokeapi.co/api/v2';

  if (consult) {
    axios.get(`${url}/pokemon/?limit=10000`)
            .then(response => {
                setAllPokemon(response.data);

            }).catch((err) => {
                console.log(err);
                console.log(err.response);
            });
    setConsult(false);
  }

  return (
    <>
      <Header />
      <Searcher allPokemon={allPokemon} />
      <Footer />
    </>
  );
}

export default App;
