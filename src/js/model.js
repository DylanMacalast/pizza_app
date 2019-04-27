// ============ITEMS MODEL ===========
// Creating a class for the creation of an item
export default class Item {
    constructor(type, value, ingredient){
        this.type = type;
        this.value = value;
        this.ingredient = ingredient;
    }
}

// Object containing all of the Items
export const items = {
    cheese: new Item('pizza', 6, 'cheese'),
    chorizo: new Item('pizza', 7, 'chorizo'),
    fanta: new Item('drinks', 1.50, 'fanta'),
    coke: new Item('drinks', 1.50, 'coke'),
    nutella: new Item('pudding', 4.55, 'nutella'),
    applePie: new Item('pudding', 6, 'applePie')
  }


  // =========== CALCULATING MODEL =======

// cost array storing all the values from the items
export const cost = [0];
// function to add the costs
export const calcTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = cost.reduce(reducer);
    return parseFloat(Math.round(total * 100) / 100).toFixed(2);
}


// ========== ADD ITEM MODEL =========

// class to create a new added item
class addedItem {
    constructor(type, value, ingredient, id){
        this.type = type;
        this.value = value;
        this.ingredient = ingredient;
        this.id = id;
    }
}


// Array storing the new added items
export const addedItems = [];

// function that creates new item and adds its value to the costs array
export const addItemModel = (type, ingredient, value) => {
    // create new id for the added item
    if(addedItems.length > 0) {
        // find the id of the item before the new item and add one to it -> makes it easeier to delete
        var ID = addedItems[addedItems.length -1].id+ 1;
    } else {
        var ID = 0;
    }
    // Create the new added item with its ID
    const newItem = new addedItem(type, ingredient, value, ID);
    // push the new added item to the addedItems array
    addedItems.push(newItem);
    // get the value and push it to the cost array
    const price = value;
    cost.push(price);
}



// ========== DELETE ITEM MODEL =========

export const deleteItem = (id) => {
    
}

