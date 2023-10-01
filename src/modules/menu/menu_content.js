import './menu-style.css';

import Classic_Burger from './img/classic-burger.png';
import Cheeseburger from './img/cheeseburger.png';
import Double_Cheeseburger from './img/double-cheeseburger.png';
import Caesar_Salad from './img/caesar-salad.png';
import French_Fries from './img/french-fries.png';

export function loadMenuContent() {
    const main = document.createElement('main');

    const classicBurger = createMenuSection(Classic_Burger, 'Classic Burguer', '5.49€',
            'Buns, patty, tomato, onions, lettuce, and our secret family sauce.');
    
    const cheeseburger = createMenuSection(Cheeseburger, 'Cheeseburger', '4.49€',
            'Buns, patty, onions and cheese.');
    
    const doubleCheeseburger = createMenuSection(Double_Cheeseburger, 'Double Cheeseburger', '6.49€',
            'Similar to our cheeseburger, but with an extra patty.');

    const caesarSalad = createMenuSection(Caesar_Salad, 'Caesar Salad', '5.99€',
            'Your typical caesar salad that comes with your choice of dressings.');

    const frenchFries = createMenuSection(French_Fries, 'French Fries', '1.99€',
            'Sometimes you don\'t want to eat your burger alone, why not add some french fries?');

    main.append(classicBurger, cheeseburger, doubleCheeseburger, caesarSalad, frenchFries);
    return main;
}

function createMenuSection(img, name, price, description) {
    const section = document.createElement('section');
    section.classList.add('menu-section');
    const title = document.createElement('div');
    title.classList.add('menu-title');

    const h2 = document.createElement('h3');
    h2.textContent = name;
    h2.classList.add('menu-name');

    const p = document.createElement('p');
    p.textContent = price;
    p.classList.add('menu-price');

    title.append(h2, p);

    const menuImage = new Image();
    menuImage.src = img;

    const desc = document.createElement('p');
    desc.textContent = description;
    desc.classList.add('menu-description');

    section.append(menuImage, title, desc);
    return section;
}