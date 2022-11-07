/*
  WRITE YOUR SOLUTION HERE
*/

const vendor1 = ["Pizza", "Pasta"];

const vendor2 = ["Pizza", "Calzones"];

const vendor3 = ["Lobster"];

const vendor4 = ["Calzones"];

const uniqueMenu = new Set();

function sortMenu(vendor1, vendor2, vendor3, vendor4){
    for(let i = 0; i < arguments.length; i++){
        arguments[i].forEach(foodItem => {
            uniqueMenu.add(foodItem);
        })
    }
    console.log(uniqueMenu.forEach(logSetElements));
    
    const menuNode = document.querySelector("#combined-menu");
    for (let item of uniqueMenu){
        let foodNode = document.createElement("li");
        foodNode.innerText = item;
        menuNode.append(foodNode);
    }
}

function logSetElements(value1, value2, set) {
    console.log(`s[${value1}] = ${value2}`);
}


sortMenu(vendor1,vendor2,vendor3,vendor4)