import { useState } from "react";
import Card from "./components/Card"
import pokeData from "./components/pokeData"
import "./styles/App.css"

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function App() {
  const [pokemon, setPokemon] = useState(pokeData.data.pokemon)
  // let pokeNames = pokeData.data.pokemon

  function test() {
    setPokemon([...pokemon])
  }
  const cards = pokemon.map(card => {
    return (
      <Card
        key={card.id}
        img={card.img}
        name={card.name}
      />
    )
  })

  return (
    <div>
      <main>
        {cards}
        <button onClick={() => test(shuffleArray(pokemon))}>Test</button>
      </main>
    </div>
  )
}

export { App, shuffleArray }

