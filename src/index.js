require('normalize.css/normalize.css'); // Resets all css
require('./styles/index.scss'); // adding main scss to js so its compiled into js
import {items, cost, calcTotal} from './js/model';
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


// =========== CALCULATING CONTROLLER =======

const getValue = (event) => {
    // getting the values
    const target = event.target.id;
    // check to see if its within items object
    if(target === items[target].ingredient){
        // if it is in items object push value to money array
        let price = items[target].value;
        cost.push(price);
        // Get the total from calcTotal function
        const total =  calcTotal();
        // Adding total to UI
        view.renderTotal(total);
    }
}

elements.pizzaContent.addEventListener('click', getValue);
elements.drinksContent.addEventListener('click', getValue);
elements.puddingContent.addEventListener('click', getValue);
