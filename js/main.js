// const bootstrap = require('bootstrap');
// import bootstrap from 'bootstrap';

let date = new Date();
date = date.getFullYear();

let footerText = document.querySelector("footer p");

footerText.textContent += " " + date;