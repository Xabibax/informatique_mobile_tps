import { footer } from './js/footer.js';
import { header } from './js/header.js';
import { content } from './js/content.js';

var app = document.querySelector('ion-app');
app.innerHTML = (
`<ion-header></ion-header>
<ion-content></ion-content>
<ion-footer></ion-footer>
`);

header();
footer();
content();