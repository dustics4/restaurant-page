
export default function contactUs(){
    const content = document.querySelector('div#content');
    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.innerHTML = '<h2>Leo\'s</h2><h1>Contact Us</h1><hr><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    content.innerHTML = '';
    content.appendChild(contact);
}