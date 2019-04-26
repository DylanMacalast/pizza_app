require('normalize.css/normalize.css'); // Resets all css
require('./styles/index.scss'); // adding main scss to js so its compiled into js
import {items} from './js/model';
import * as view from './js/view';
import {elements} from './js/view';




// ===============Navigation tabs==============
// INVRNTORY TABS
const onTabClick = (event) => {
    event.preventDefault(); // stopping # in anchour tag from taking you to bottom of the page
    let activeTabs = document.querySelectorAll('.active');

    // Deactivate exisiting active tab and panel
    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace('active', '');
    });

    // activate the new tab and panel which has been cliked on
    event.target.parentElement.className += ' active'; // setting the className of the parent element to active
    // getting the text from the link and looking for id wiht same name and adding class active to that element
    document.getElementById(event.target.href.split('#')[1]).className += ' active'; // just want the text not the #
}
elements.navElement.addEventListener('click', onTabClick); // false added so js knows we need no more options





// ============= ITEMS CONTROLLER =============
// Creating items
for (var key in items) {
    if (items.hasOwnProperty(key)) {
        view.renderItems(items[key].type, items[key].value, items[key].ingredient);
    }
}
























//TESTING APP LOGIC
// //testing with value - The values
// const chorizo = document.getElementById('chorizo');
// const fanta = document.getElementById('fanta');

// chorizo.value="5.50";
// fanta.value="1.50";




// // testing getting cost of an element
// const price = [];
// const getCost = (event) =>{
    
//     let item = event.target.value;
//     let itemNum = parseFloat(item);
//     price.push(itemNum);
// };

// const pizza = document.querySelector('.inventory__tabs');
// pizza.addEventListener('click', getCost);


// // Testing adding all costs in price array
// const calculateCost = () => {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let total = price.reduce(reducer);
//     console.log(total);
// }

// pizza.addEventListener('click', calculateCost);

