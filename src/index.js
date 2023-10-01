import './general-style.css';
import createPageStructure from './modules/page_structure';

import { loadHomeContent } from './modules/home/home_content';
import { loadMenuContent } from './modules/menu/menu_content';
import { loadContactContent } from './modules/contact/contact_content';

const pageContent = document.querySelector('div#content');

const structure = createPageStructure();
const tabs = structure.header.querySelectorAll('li.nav-tab');

// Initialize main in Home
const defaultMainContent = loadContactContent();
// Initialaze selected tab in Home
tabs.forEach(tab => { if(tab.id === 'home-tab') tab.classList.add('nav-selected-tab'); })

tabs.forEach(tabBehaviour);
pageContent.append(structure.header, defaultMainContent, structure.footer);

function tabBehaviour(tab) {
    let newMainContent;

    switch (tab.id) {
        case 'home-tab':
            newMainContent = loadHomeContent();
            break;
        
        case 'menu-tab':
            newMainContent = loadMenuContent();
            break;

        case 'contact-tab':
            newMainContent = loadContactContent();
            break;
    
        default:
            throw Error('Undefined tab');
            break;
    }

    tab.addEventListener('click', (e) => {
        pageContent.replaceChildren(structure.header, newMainContent, structure.footer);
        showSelectedTabBorder(e.target);
    });

}

function showSelectedTabBorder(target) {
    for (const tab of tabs) {
        tab.classList.remove('nav-selected-tab');
    }
    target.classList.add('nav-selected-tab');
}
