const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add");
const form = document.querySelector('form');


addButton.addEventListener('click', () => {

    const inputValue = inputBox.value.trim();

    if (inputValue !== '') {

        const listItem = document.createElement('li');

        listItem.textContent = inputValue;

        listContainer.appendChild(listItem);

        const span = document.createElement('span');

        span.textContent = "\u00d7";

        listItem.appendChild(span);

        inputBox.value = "";

        span.addEventListener('click', () => {

            listContainer.removeChild(listItem);
        })


        listItem.addEventListener('click', () => {

            listItem.classList.toggle("checked");
        })

    } else {

        alert('You must enter something')
    }


})


form.addEventListener('submit', (e) =>  {
    e.preventDefault();
} )
