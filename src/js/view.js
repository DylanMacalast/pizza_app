// All the elements selected from the DOM
 export const elements = {
    navElement: document.getElementById('nav-tab'),
    pizzaContent: document.getElementById('pizza'),
    drinksContent: document.getElementById('drinks'),
    puddingContent: document.getElementById('pudding')
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
