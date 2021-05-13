import tabs from './modules/tabs';
import calculator from './modules/calculator';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import forms from './modules/forms';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', () => { 
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs('.tabheader__item','.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calculator();
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
    timer('.timer', '2021-05-10');
    forms('form', modalTimerId);
});