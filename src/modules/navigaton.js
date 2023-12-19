import renderHome from "./home";
import renderAbout from "./menu";
import contactUs from "./ contact";

export default function navBar (){
    //creating the content
    const header = document.querySelector('div#header');
    const content = document.querySelector('div#content');
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    const contactButton = document.createElement('button');

    //adding classes to the buttons
    homeButton.classList.add('home-button');
    aboutButton.classList.add('about-button');
    contactButton.classList.add('contact-button');

    //each button does something different. Adding text
    homeButton.textContent = "Home";
    aboutButton.textContent = "Menu";
    contactButton.textContent = "Contact";

    //appends to div
    nav.appendChild(homeButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

    //content.innerHTML = '';
    //appends to main page
    header.appendChild(nav);

    homeButton.addEventListener('click', renderHome);
    aboutButton.addEventListener('click', renderAbout);
    contactButton.addEventListener('click', contactUs);

}

