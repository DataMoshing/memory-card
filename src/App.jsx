// import { useEffect, useState } from "react";
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
  let pokeNames = pokeData.data.pokemon

  const cards = pokeNames.map(card => {
    return (
      <Card
        img={card.img}
        name={card.name}
        key={card.id}
      />
    )
  })

  return (
    <div>
      <main>
        {shuffleArray(cards)}
      </main>
    </div>
  )
}

export { App }

