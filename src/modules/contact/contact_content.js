import './contact-style.css';

export function loadContactContent() {
    const main = document.createElement('main');

    const infoSection = createInfoSection();
    const formSection = createFormSection();

    main.append(infoSection, formSection);
    return main;
}

function createInfoSection() {
    const section = document.createElement('section');
    section.classList.add('contact-section');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Get in Touch';

    const p = document.createElement('p');
    p.textContent = 'Feel free to contact us using the information below:';
    p.classList.add('contact-info');

    const address = document.createElement('address');
    address.textContent = '123 Burger Street, Cityville, Spain';

    const email = document.createElement('p');
    email.textContent = 'Email: fake.info@grillhub.com';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +34 666 666 666';

    section.append(h2, p, address, email, phone);
    return section;
}

function createFormSection() {
    const section = document.createElement('section');
    section.classList.add('content-section');

    const h2 = document.createElement('h2');
    h2.textContent = 'Send us a Message';

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.innerHTML = 
    `   <p>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>
        </p>
        <p>
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>
        </p>
        <p>
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
        </p>
        <button type="submit">Send Message</button>`;

    const formButton = form.querySelector('button');
    formButton.addEventListener('click', (e) => {
        if(form.checkValidity()) {
            e.preventDefault();
            form.reset();
        };
    });

    section.append(h2, form);
    return section;
}