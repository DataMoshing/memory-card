import Card from "./components/Card"
import pokeData from "./components/pokeData"
import "./styles/App.css"

export default function App() {
  let pokeNames = pokeData.data.pokemon

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  // console.log(shuffleArray(pokeNames))
  const cards = pokeNames.map(item => {
    return (
      <Card
        img={item.img}
        name={item.name}
        key={item.id}
      />
    )
  })
  return (
    <div>
      <main>
        {cards}
      </main>
    </div>
  )
}


