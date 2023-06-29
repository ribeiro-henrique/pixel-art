import randomColor from "randomcolor";

import { useState } from 'react';
import '../styles/PixelGrid.css';


function PixelGrid() {

  const [color, setColor] = useState(
    randomColor()
  );
  

  function generateRandomColor() {
     var color = randomColor();
    return color === '#000000' ? generateRandomColor() : color;
  }

  function addColor() {
    const newColor = generateRandomColor();
    setColor(newColor);
  }
  

  return (
    <div className="main-colors">
      <div className="black" />
      <div style={{ backgroundColor: randomColor() }} className="pallet" />
      <div style={{ backgroundColor: randomColor() }} className="pallet" />
      <div style={{ backgroundColor: randomColor() }} className="pallet" />

      <button
        onClick={addColor}
      >
        Randomizar!
      </button>
    </div>
  )

}

export default PixelGrid;