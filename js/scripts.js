'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');


    generateList.addEventListener('click', function (event) {
        const inputItems = document.querySelector('input');
        const listElements = document.createElement('ul');

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            //changed elements to element0
            listElements.append(listItem);
        });

    });
});
