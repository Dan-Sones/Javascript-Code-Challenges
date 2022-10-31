
function vegMenu(menu){
    const menuNode = document.querySelector("#menu");
    const vegetarianDishes = menu.filter((option) => option.vegetarian === true);

    vegetarianDishes.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    })
}

const menu = [{
    name: 'Eggplant Parmesan',
    vegetarian: true
}, {
    name: 'Spaghetti & Meatballs',
    vegetarian: false
}, {
    name: 'Margherita Pizza',
    vegetarian: true
}];


vegMenu(menu);