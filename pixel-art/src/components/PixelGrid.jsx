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
    Array.from({ length: 672}, (_, i) => ({ id: i, backgroundColor: 'white' }))
  );

  const [pickColors, setPickColors] = useState();
  console.log(pickColors);
  
  function generateRandomColor() {
     var color = randomColor();
    return color === '#000000' ? generateRandomColor() : color;
  }

  function addColor() {
    const newColor = generateRandomColor();
    setColor(newColor);
  }

  function pickColor(e) {
    // e.target.style.background
    setPickColors(e.target.style.backgroundColor)
  }

  function clickGrid(e) {
    e.target.style.backgroundColor = pickColors
  }

  function eraseGrid() {
    const pixels = document.getElementsByClassName('gridizinho');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
  }
}

  return (
    <div>
      
    <div className="main-colors">
      <div onClick={pickColor} style={{ backgroundColor: 'black' }} className="pallet" />
      <div onClick={pickColor} style={{ backgroundColor: randomColor() }} className="pallet" />
      <div onClick={pickColor} style={{ backgroundColor: randomColor() }} className="pallet" />
      <div onClick={pickColor} style={{ backgroundColor: randomColor() }} className="pallet" />
      
    <div className="button-container">
      <button
          data-label="Register"
          className="rainbow-hover"
          onClick={addColor}
      >
        <span
         className="sp"
        >
         Randomizar!
        </span>
      </button>
      <button
          data-label="Register"
          className="rainbow-hover2"
          onClick={eraseGrid}
      >
        <span
         
        >
         ✗
        </span>
      </button>
      
    </div>
      <div className="pixel-grid">
        {pixelGrid.map((e) => (
          <div
            className="gridizinho"
            key={e.id}
            onClick={clickGrid}
          >
          </div>
        ))}
      </div>
      
    </div>
    </div>
    
  )

}

export default PixelGrid;