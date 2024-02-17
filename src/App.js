
import './App.css';

import React, { useState } from 'react'
import ColorBlock from './components/ColorBlock'
import ColorForm from './components/ColorForm'

function App(){
    let [colors, setColors] = useState([])
    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }
    return (
        <div className="App">
          {
            colors.map((color, i) => <ColorBlock color={color} key={i}/>
            )
          }
          <ColorForm addColor={addColor} />
        </div>
    )
}


export default App;
