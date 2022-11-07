const coffee = [5, 2, 2, 4];


function calculateCoffee(coffeeArray) {
    const totalCoffee = coffeeArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const result = 1.25 * totalCoffee;
    console.log(`The total bill is £${result} `)
}

calculateCoffee(coffee);

