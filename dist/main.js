(()=>{"use strict";function t(){console.log("dick!")}!function(){const t=document.querySelector("div#content"),e=document.createElement("nav"),n=document.createElement("button"),o=document.createElement("button"),d=document.createElement("button");n.classList.add("home-button"),o.classList.add("about-button"),d.classList.add("contact-button"),n.textContent="Home",o.textContent="About",d.textContent="Contact",e.appendChild(n),e.appendChild(o),e.appendChild(d),t.appendChild(e)}(),function(){const e=document.querySelector("div#content"),n=document.createElement("div"),o=document.createElement("h2"),d=document.createElement("h1"),c=document.createElement("p"),a=document.createElement("div"),i=document.createElement("button");n.classList.add("home-content"),i.classList.add("info-button"),o.textContent="Welcome to",d.textContent="Leo's",c.textContent="The birth place of your delicious experiences",i.textContent="Click here to find out more!",n.id="home",n.appendChild(o),n.appendChild(d),n.appendChild(c),n.appendChild(a),a.appendChild(i),e.appendChild(n),i.addEventListener("click",t)}()})();