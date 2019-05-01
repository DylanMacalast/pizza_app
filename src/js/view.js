import { deleteItemModel } from "./model";

// All the elements selected from the DOM
 export const elements = {
    navElement: document.getElementById('nav-tab'),
    pizzaContent: document.getElementById('pizza'),
    drinksContent: document.getElementById('drinks'),
    puddingContent: document.getElementById('pudding'),
    total: document.querySelector('.total'),
    items: document.querySelector('.item__cards'),
    itemCards: document.querySelector('.item__cards'),
    cancelBtn: document.getElementById('cancel__payment'),
    approveBtn: document.getElementById('approve__payment')
    
};


// ============ITEMS VIEW    ===========
// Render items and insert them depending the type
export const renderItems = (type, value, ingredient) => {
    const markup = 
    `
    <div id="${ingredient}" class="${type}__item inventory__item">
        <h4 class="inventory__h4">${ingredient}</h4>
        <p class="inventory__price">£${parseFloat(Math.round(value * 100) / 100).toFixed(2)}</p>
    </div>
    `;
    //If the type is pizza insert item into the pizza tab pane
    if(type === 'pizza'){
        elements.pizzaContent.insertAdjacentHTML('beforeend', markup);
    } else if(type === 'pudding'){
        elements.puddingContent.insertAdjacentHTML('beforeend', markup);
    } else if(type === 'drinks'){
        elements.drinksContent.insertAdjacentHTML('beforeend', markup);
    }
    
}


// =========== CALCULATING VIEW =======

// Adding the total amount to the application UI
export const renderTotal = (total) =>{
    const markup = 
    ` £${total}`;
    elements.total.innerHTML= markup;
}



// ========== ADD ITEM VIEW =========
export const addItemUi = (type, value, ingredient, id) => {
    const markup = 
    `
    <div id="delete__item--container" class="added__item--container">
        <div class="item__card" id="${id}">
            <p class="item__card--ingredient">${ingredient}</p>
            <a href="#" id="delete__button" class="delete__item--btn">X</a>
        </div>
    <div>
    `;
    elements.items.insertAdjacentHTML('beforeend', markup);
}





// ========== DELETE ITEM VIEW =========
//function to get the items id from the UI
export const getId = (event) => {
const cardId = event.target.parentNode.id;
const ID = parseInt(cardId);
return ID;
};


// function to delte the added item from the UI
export const deleteItemView = (id) => {
// grab num id 
    const numId = id;
    // convert it to string
    const ID = numId.toString();
    // find the element with the id of that number
    const delItem = document.getElementById(ID);
    // move up to the parent of that element and delete its child!
    delItem.parentNode.removeChild(delItem);
}




// ==============INIT FUNCTION ==============
export const initView = (event) => {
    const deleteItems = event.target.parentNode;
    const itemContainers = document.querySelectorAll('#delete__item--container');
    itemContainers.forEach(element => {
        deleteItems.removeChild(element);
    });
}