'use strict';

const num1 = document.querySelectorAll('input')[0];
const num2 = document.querySelectorAll('input')[1];
const result = document.querySelectorAll('div')[0];

const calc = (e) => {

    const buttonValue = e.target.innerText;

    //console.log(buttonValue);

    if (buttonValue === '+'){
        result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
    } else if (buttonValue === '-'){

        result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);

    } else if (buttonValue === '*'){

        result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);

    } else {

        result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);

    } 

    //console.log(typeof num1.value);
    //console.log(num2.value);
    e.preventDefault();

}

const buttons = document.querySelectorAll('button');

buttons.forEach((elem) => {

    elem.addEventListener('click', calc)



});

