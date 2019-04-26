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
    garlic: new Item('pizza', 8, 'garlic-bread'),
    fanta: new Item('drinks', 1.50, 'fanta'),
    coke: new Item('drinks', 1.50, 'coke'),
    nutella: new Item('pudding', 4.55, 'nutella-pizza'),
    applePie: new Item('pudding', 6, 'apple pie')
  }
    



// what i want to happen

// 1. create items that are all the same BUT with a differnet price and type
// 2. arrange the types into the correct tab sections
// 3. click on the items and a running total will be created
// 4. items will also appear at the bottom of the page
// 5. Be able to delete items from teh bottom of the page
// 6. be able to delete the whole order


