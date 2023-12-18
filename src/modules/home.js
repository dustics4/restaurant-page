export default function renderHome() {
    const content = document.querySelector('div#content');
    const homeContent = document.createElement('div');
    const h2Text = document.createElement('h2');
    const h1Text = document.createElement('h1');
    const pText = document.createElement('p');
    const infoDiv = document.createElement('div');
    const infoButton = document.createElement('button');

    homeContent.classList.add('home-content')
    infoButton.classList.add('info-button');

    h2Text.textContent = "Welcome to";
    h1Text.textContent = "Leo's";
    pText.textContent = "The birth place of your delicious experiences";

    homeContent.appendChild(h2Text);
    homeContent.appendChild(h1Text);
    homeContent.appendChild(pText);
    homeContent.appendChild(infoDiv);
    infoDiv.appendChild(infoButton);

}