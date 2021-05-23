class Model {

    static pizzas: item[] = [
        {price: 8, name: 'Margherita'},
        {price: 9, name: 'Chorizo'},
        {price: 7, name: 'Garlic Bread'},
        {price: 8, name: 'Garlic Cheese'}
    ];

    static puddings: item[] = [
        {price: 8, name: 'Nuttela Pizza'}
    ];

    static drinks: item[] = [
        {price: 1.50, name: 'Soft Drink'},
        {price: 3.50, name: 'Beer'}
    ];

    static total: number = 0;

    static addItem = (price: number) : number => {

        Model.total += price;
        return Model.total;
    }

    static removeItem = (price: number) : number => {

        Model.total -= price;
        return Model.total;
    }

    static clear = () => {
        
        Model.total = 0;
        return Model.total;
    }
}

export interface item {
    price: number,
    name: string
}

export {Model as model};