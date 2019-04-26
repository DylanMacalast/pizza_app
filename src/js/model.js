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



