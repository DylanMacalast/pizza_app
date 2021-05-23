import * as $ from 'jquery';
import {item} from './model';
class View {

    static renderItem = (name: string, price: number, type: string) => {

        const html = `
            <div class="inventory__item" id="${price}">
                <h4 class="inventory__h4">${name}</h4>
                <p class="inventory__price">£${price.toFixed(2)}</p>
            </div>
        `;

        switch (type) {

            case 'pizza': 
                $('#pizza').append(html);
                break;

            case 'pudding':
                $('#pudding').append(html);
                break;

            case 'drink':
                $('#drink').append(html);
                break;
                
            default:
                console.log('error');
        }
    }

    static displayItem = (item: item) => {

        const html = `
                <div class="item__card" id="${item.price}">
                    <p class="item__card--ingredient">${item.name}</p>
                    <a href="#" id="delete__button" class="delete__item--btn">Delete</a>
                </div>
        `;

        $('.item__cards').append(html);
    }

    static updateTotal = (price: number) => {
        $('#total').text(price.toFixed(2));
    }

    static clear = () => {
        $('.item__cards').find('.item__card').remove();
    }
}

export {View as view};