'use strict';

import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(43);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});

app.innerHTML = '<h1>memeda</h1>';
document.body.appendChild(app);
app.appendChild(generateText());