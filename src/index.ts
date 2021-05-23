require('./styles/index.scss');
import { model, item } from './js/model';
import { view } from './js/view';
import * as $ from 'jquery';

// RENDER PIZZA
model.pizzas.forEach((pizza: item) => {
    view.renderItem(pizza.name, pizza.price, 'pizza');
});

// RENDER PUDDINGS
model.puddings.forEach((pudding: item) => {
    view.renderItem(pudding.name, pudding.price, 'pudding');
});

// RENDER DRINKS
model.drinks.forEach((drink: item) => {
    view.renderItem(drink.name, drink.price, 'drink');
});

// TAB TOGGLE
$('#nav-tab').on('click', (event) => {

    event.preventDefault();

    const tabtarget: string = event.target.id;
    const id: string = tabtarget.slice(0, -1);

    $('.inventory__container').find('.active').removeClass('active');

    $(`#${id}`).addClass('active');
    $(event.target).parent().addClass('active');

});

// ITEM CLICKED
$('.inventory__item').on('click', (event) => {

    const inventoryItem = $(event.target).closest('.inventory__item');
    const iItemPrice = inventoryItem.attr('id');
    const iItemName = inventoryItem.find('h4').text();

    const item: item = {
        price: iItemPrice ? +iItemPrice : 0, 
        name: iItemName ? iItemName : ''
    }

    view.displayItem(item);
    view.updateTotal(model.addItem(item.price));
});

// BUTTONS
$('#cancel__payment').on('click', () => {

    view.updateTotal(model.clear());
    view.clear();
});

$('#approve__payment').on('click', () => {

    view.updateTotal(model.clear());
    view.clear();
});

$('body').on('click', '#delete__button', (event) => {

    event.preventDefault();

    $(event.target).parent().remove();

    const price = $(event.target).parent().attr('id');
    
    view.updateTotal(model.removeItem(price? +price : 0));
});