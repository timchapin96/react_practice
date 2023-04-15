import { useState } from 'react'
import AnimalShow from './AnimalShow';
import './css/App.css'

function randomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);


  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })
  return <div class= "app">
    <button onClick={handleClick}>Add Animal</button>
    <div class = "barn">{renderedAnimals}</div>
  </div>
}
export default App;
