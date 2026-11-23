
import { useState } from 'react'
import './App.css'
import MenuItem from './MenuItem'
import arr from './menuData'

function App() {
  const [category, setCategory] = useState("All")

  const filteredMenu = arr.filter((item) => {
    if (category === "All") {
      return true;
    }
    return item.category === category;
  });

  return (
    <>
      <h1>Restaurant Menu</h1>

      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Veg")}>Veg</button>
      <button onClick={() => setCategory("Non-Veg")}>Non-Veg</button>

      {
        filteredMenu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))
      }
    </>
  )
}

export default App
