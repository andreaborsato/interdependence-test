
let colorPairCombinationsArray = [];

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1],  16),
      g: parseInt(result[2],  16),
      b: parseInt(result[3],  16)
    } : null;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + ((1 <<  24) + (r <<  16) + (g <<  8) + b).toString(16).slice(1);
  }
  
  function colorSubtraction(color1, color2) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
  
    const r = Math.abs(rgb1.r - rgb2.r);
    const g = Math.abs(rgb1.g - rgb2.g);
    const b = Math.abs(rgb1.b - rgb2.b);
  
    return rgbToHex(r, g, b);
  }
  
  function generateColorPairCombinations(colors) {
    let combinations = [];
    for (let i =  0; i < colors.length; i++) {
      for (let j =  0; j < colors.length; j++) {
        if (i !== j) {
          const diffColor = colorSubtraction(colors[i], colors[j]);
          combinations.push(diffColor);
        }
      }
    }
    return combinations;
  }
  
  const myColorArray = ['#C9DB00','#6100FF', '#FF9900', '#CC00FF', '#17E683', '#00BFFC','#FF003D', '#FFE500'];
  const colorPairCombinations = generateColorPairCombinations(myColorArray);
  colorPairCombinationsArray.push(colorPairCombinations);
  
  console.log(colorPairCombinationsArray);