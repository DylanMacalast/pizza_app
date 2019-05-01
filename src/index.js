require('normalize.css/normalize.css'); // Resets all css
require('./styles/index.scss'); // adding main scss to js so its compiled into js
import {items, addedItems, calcTotal, addItemModel, deleteItemModel, cost, initModel} from './js/model';
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
const getInventoryItem = (event) => {
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
// another way of doing it:
// Loop through the addedItems array and create UI elements based on how many.
const addItem = () => {
    const itemSelected = getInventoryItem(event);
    // Get the items value
    const price = items[itemSelected].value;
    // get the items type
    const type = items[itemSelected].type;
    //get the items ingredient
    const ingredient = items[itemSelected].ingredient;
    // put into addItemModel function
    const addItem = addItemModel(type, price, ingredient);
    // getting the items id
    const id = addItem.id;
    // Add new item to the UI by looping through the addedItems array and creating one for each item
    view.addItemUi(type, price, ingredient, id );
    // calculate the total and render to UI
    getTotal();
};



// ========== DELETE ITEM CONTROLLER =========

// ADDING EVENT LISTENERS TO DELETE ITEMS
elements.itemCards.addEventListener('click', function(e){
    // if the button clicked was the delete button run code
    if(e.target && e.target.matches('#delete__button')){
        // get the id of the clicked element
        const id = view.getId(e);
        // delete item from the addedItems array in the model
        deleteItemModel(id);
        // remove the markup from the UI
        view.deleteItemView(id);
        // update the cost in the UI
        getTotal();
    }
})




// ADDING EVENT LISTENERS FOR THE ITMES
//NOTE: Make it so that if the writing is selected it will still grab that div

elements.pizzaContent.addEventListener('click', e =>{
    if(e.target.parentNode.id === 'pizza'){
        addItem();
    }
});
elements.drinksContent.addEventListener('click', e=>{
    if(e.target.parentNode.id === 'drinks'){
        addItem();
    }
});
elements.puddingContent.addEventListener('click', e => {
    if(e.target.parentNode.id === 'pudding'){
        addItem();
    }
});

// ========== INIT FUNCTION ===========
const init = () => {
    initModel();
    view.initView(event);
    getTotal();
    };
    
// init buttons with event listeners 
elements.cancelBtn.addEventListener('click' ,init);
elements.approveBtn.addEventListener('click' ,init);

