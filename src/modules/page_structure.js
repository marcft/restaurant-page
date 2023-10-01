export default function createPageStructure() {
    const header = createHeader();
    const footer = createFooter();

    return {header, footer};
}

function createHeader() {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Grill Hub';

    const nav = createNav();

    header.append(h1, nav);
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    for (const name of ['Home', 'Menu', 'Contact']) {
        const li = document.createElement('li');
        li.textContent = name;
        li.classList.add('nav-tab');
        li.setAttribute('id', `${name.toLowerCase()}-tab`);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    return nav;
}

function createFooter() {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Made by Marc Frances';
    footer.appendChild(p);

    return footer;
}
