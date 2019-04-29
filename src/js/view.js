// All the elements selected from the DOM
 export const elements = {
    navElement: document.getElementById('nav-tab'),
    pizzaContent: document.getElementById('pizza'),
    drinksContent: document.getElementById('drinks'),
    puddingContent: document.getElementById('pudding'),
    total: document.querySelector('.total'),
    items: document.querySelector('.item__cards'),
    itemCards: document.querySelector('.item__cards')
};


// ============ITEMS VIEW    ===========
// Render items and insert them depending the type
export const renderItems = (type, value, ingredient) => {
    const markup = 
    `
    <div id="${ingredient}" class="${type}__item">
        <h4>${ingredient}</h4>
        <p>${value}</p>
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
    
        <div class="item__card" id="${id}">
            <h6>${type}</h6>
            <p>${ingredient}</p>
            <p>£${value}</p>
            <button id="delete__button">delete item</button>
        </div>
    `;
    elements.items.insertAdjacentHTML('beforeend', markup);
}





// ========== DELETE ITEM VIEW =========
export const getId = (event) => {
const cardId = event.target.parentNode.id;
const ID = parseInt(cardId);
return ID;
};


// function to delte the added item from the UI
export const deleteItemView = (event) => {
    const ele = event.target.id;
    let el = document.getElementById(ele);
    el = el.parentNode;
    el.parentNode.removeChild(el);
}