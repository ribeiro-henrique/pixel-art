import randomColor from "randomcolor";
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 552; // Define a largura de tela que considera como celular
      const gridLength = isMobile ? 63 : 672; // Define o tamanho do grid com base na condição de celular
      setPixelGrid(
        Array.from({ length: gridLength }, (_, i) => ({ id: i, backgroundColor: 'white' }))
      );
    };

    handleResize(); // Executa a função uma vez no início
    window.addEventListener('resize', handleResize); // Adiciona o evento de redimensionamento

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o evento ao desmontar o componente
    };
  }, []);


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

  useEffect(() => {
    const pixels = document.getElementsByClassName('gridizinho');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }, []);

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