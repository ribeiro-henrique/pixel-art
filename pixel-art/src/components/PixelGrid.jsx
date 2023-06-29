import randomColor from "randomcolor";
import { useState } from 'react';
import '../styles/PixelGrid.css';


function PixelGrid() {

  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState(
    randomColor()
  );

  // eslint-disable-next-line no-unused-vars
  const [pixelGrid, setPixelGrid] = useState(
    Array.from({ length: 49 }, (_, i) => i + 1)
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
      
    <div className="button-container">
      <button
          data-label="Register"
          className="rainbow-hover"
          onClick={addColor}
      >
        <span
         className="sp"
        >
         Radomizar!
        </span>
      </button>
    </div>
      <div className="pixel-grid">
        {pixelGrid.map((index) => (
          <div
            className="gridizinho"
            key={index}
          >
            oi
          </div>
        ))}
      </div>
    </div>
  )

}

export default PixelGrid;