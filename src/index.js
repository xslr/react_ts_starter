import React from 'react';
import ReactDOM from 'react-dom';
import { cbOtherButtonClicked } from './other.js';

import App from './app'

const title = 'React with Webpack and Babels'

console.log('Hello Project.');

console.log('Hello Webpack Project.');

function cbBtnClicked(event) {
    console.log(`Click event ${JSON.stringify(event)} occured.`);
}

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

window.onload = function() {
    var btn = document.getElementById("btnClickMe");
    btn.onclick = cbOtherButtonClicked;
}

// module.hot.accept();