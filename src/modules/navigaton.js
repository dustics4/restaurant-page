export default function navBar (){
    const content = document.querySelector('div#content');
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('home-button');
    aboutButton.classList.add('about-button');
    contactButton.classList.add('contact-button');

    homeButton.textContent = "Home";
    aboutButton.textContent = "About";
    contactButton.textContent = "Contact";

    nav.appendChild(homeButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

    //content.innerHTML = '';
    content.appendChild(nav);

}