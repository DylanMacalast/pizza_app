require('normalize.css/normalize.css'); // Resets all css
require('./styles/index.scss'); // adding main scss to js so its compiled into js
import {items, cost, calcTotal} from './js/model';
import * as view from './js/view';
import {elements} from './js/view';



// =============== NAVIGATION TABS==============
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

// Function to get the id of the selected div from the dom
const getItemId = (event) => {
    var itemClicked = event.target.id;
    // check to see if its within items object
    if(itemClicked === items[itemClicked].ingredient){
        return itemClicked;
    } else{
        console.log('nothing selected');
    }
    
};

// Function to calculate the total and add it to UI
const getTotal = () => {
    // Get the total from calcTotal function
    const total =  calcTotal();
    // Adding total to UI
    view.renderTotal(total);
};



// ========== ADD ITEM CONTROLLER =========

const addItem = () => {
    const itemSelected = getItemId(event);
    // add items value to the cost array
    const price = items[itemSelected].value;
    cost.push(price);
    // Add new item to the UI
    view.addItemUi();
};





// ADDING EVENT LISTENERS FOR THE ITMES
elements.pizzaContent.addEventListener('click', e =>{
    addItem();
    getTotal();
});
elements.drinksContent.addEventListener('click', e=>{
    addItem();
    getTotal();
});
elements.puddingContent.addEventListener('click', e => {
    addItem();
    getTotal();
});


// What to do next?
// On click of item create a new item at the bottom with the same data
// The ability to be able to delete that item with a swipe
// Have a button to cancel the whole order
// Have a button to 'pay' -> will reset the application
