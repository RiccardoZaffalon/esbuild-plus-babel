import 'core-js/stable';
import 'regenerator-runtime/runtime';
import $ from 'jquery';

import target from './components/target';
import App from './components/app';

window.$ = $;

document.addEventListener('DOMContentLoaded', () => {
    const msg = `hello ${target}!`;
    console.log(msg);
    console.log($(document));

    new App().init();
});
