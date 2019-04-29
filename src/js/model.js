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
export let cost = [];
// function to add the costs
// will only add if the array has 1 or more values in it other wise the cost is 0
export const calcTotal = () => {
    if(cost.length > 0) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const total = cost.reduce(reducer);
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    } else {
        cost = [1];
        return 0;
    }
    
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
export let addedItems = [];


// function to push items values to the cost array
const updateCost = () => {
        cost = [];
        addedItems.forEach(element => {
        const price = element.value;
        cost.push(price);
        });
}

// function that creates new item and adds its value to the costs array
export const addItemModel = (type, value, ingredient) => {
    let ID;
    // create new id for the added item
    if(addedItems.length > 0) {
        // find the id of the item before the new item and add one to it -> makes it easeier to delete
         ID = addedItems[addedItems.length -1].id+ 1;
    } else {
         ID = 0;
    }
    // Create the new added item with its ID
    const newItem = new addedItem(type, value, ingredient, ID);
    // push the new added item to the addedItems array
    addedItems.push(newItem);
    // update the cost array
    updateCost();
    return newItem;
}



// ========== DELETE ITEM MODEL =========

export const deleteItemModel = (id) => {
    let ids, index;
ids = addedItems.map(function(current){
    return current.id; // returning the current index in array and the id value.
});
index = ids.indexOf(id);

// if the index is not -1 (it is in the array delete it) if not do nothing
if (index !== -1) {
    addedItems.splice(index, 1);
}
// update the cost array
updateCost();
}



