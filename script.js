const body = document.querySelector('body');
const container = document.querySelector('.container');

let createButton = () => {
    const resetButton = document.createElement('button')
    resetButton.classList.add('reset');
    resetButton.textContent = 'Change Size / Reset';
    
    body.insertBefore(resetButton, container);
}

const num = 256;
let createDivs = () => {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');

        container.appendChild(div);
        console.log("CREATED")
    }
}

let ColorDivs = () => {
    const divs = document.querySelectorAll('.grid')
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = 'black';
        })
    })
}
createButton();
createDivs();
ColorDivs();
