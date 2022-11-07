/*
  WRITE YOUR SOLUTION HERE
*/
function changeColor(colorValue) {
    return function () {
        document.body.style.backgroundColor = colorValue;
    };

}

const bgColorBlue = changeColor('#0000ff');
const bgColorPink = changeColor('#ff33cc');
const bgColorGreen = changeColor('#00ff00')

document.querySelector("#blue").addEventListener('click', bgColorBlue);
document.querySelector("#pink").addEventListener('click', bgColorPink);
document.querySelector("#green").addEventListener('click', bgColorGreen);




