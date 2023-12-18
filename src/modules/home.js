//importing functions from other files
import renderAbout from "./about";
import navBar from "./navigaton";

//running navbar function so it always shows first
navBar();

export default function renderHome() {
    //creating the content
    const content = document.querySelector('div#content');
    const homeContent = document.createElement('div');
    const h2Text = document.createElement('h2');
    const h1Text = document.createElement('h1');
    const pText = document.createElement('p');
    const infoDiv = document.createElement('div');
    const infoButton = document.createElement('button');

    //adding classes to the variables
    homeContent.classList.add('home-content')
    infoButton.classList.add('info-button');

    //adding some data into the content
    h2Text.textContent = "Welcome to";
    h1Text.textContent = "Leo's";
    pText.textContent = "The birth place of your delicious experiences";
    infoButton.textContent = 'Click here to find out more!';

    //creating id and appending to the div
    homeContent.id = 'home';
    homeContent.appendChild(h2Text);
    homeContent.appendChild(h1Text);
    homeContent.appendChild(pText);
    homeContent.appendChild(infoDiv);
    infoDiv.appendChild(infoButton);

    //adding to main div to view content
    content.appendChild(homeContent);

    //click function to move to next page
    infoButton.addEventListener('click', renderAbout);

}