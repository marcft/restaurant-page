export function loadHomeContent() {
    const main = document.createElement('main');
    
    const aboutSection = createAboutSection();
    const commitmentSection = createCommitmentSection();
    const discoverSection = createDiscoverSection();

    main.append(aboutSection, commitmentSection, discoverSection);
    return main;
}

function createAboutSection() {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'About Us';

    const p1 = document.createElement('p');
    p1.textContent = "At Grill Hub, we are more than just a burger joint; we are a culinary experience. Our journey began in 2010 with a simple goal - to craft the most mouth-watering burgers that leave a lasting impression on your taste buds.";

    const p2 = document.createElement('p');
    p2.textContent = "Each burger at Grill Hub is a masterpiece, a fusion of quality ingredients and a passion for the art of grilling. From our signature Classic Burger to the indulgent Double Cheeseburger, we strive to deliver an unforgettable dining experience.";

    section.append(h2, p1, p2);
    return section;
}

function createCommitmentSection() {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Our Commitment';

    const p = document.createElement('p');
    p.textContent = "Quality is our top priority. We source the finest ingredients, from freshly baked buns to premium Angus beef, ensuring that every bite is a celebration of flavor. Our commitment to excellence extends beyond the kitchen; it's embedded in our service, ambiance, and the smiles we aim to put on your face.";

    section.append(h2, p);
    return section;
}

function createDiscoverSection() {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Discover Grill Hub';

    const p1 = document.createElement('p');
    p1.textContent = "We invite you to explore our diverse menu and experience the flavors that set us apart. Whether you're a burger connoisseur or trying us for the first time, there's something for everyone at Grill Hub.";

    const p2 = document.createElement('p');
    p2.textContent = "Visit our restaurant to savor the taste of perfection. We can't wait to serve you!";

    section.append(h2, p1, p2);
    return section;
}
