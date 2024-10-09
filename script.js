const body = document.querySelector('body');
const container = document.querySelector('.container');

let createButton = () => {
    const resetButton = document.createElement('button')
    resetButton.classList.add('reset');
    resetButton.textContent = 'Change Size / Reset';
    
    body.insertBefore(resetButton, container);
}

let resetGrid = () => {
    const resetButton = document.querySelector('button');

    resetButton.addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.innerHTML = ''
        replaceGrid();
        ColorDivs();
    })
}

let replaceGrid = () => {
    let answerNum = prompt("Please enter a valid new grid size up to 100x100 ex:(64)");
    answerNum = parseInt(answerNum);
    if (answerNum < 101 && answerNum > 0) {
        answerNum *= answerNum
        createDivs(answerNum);
    }
    else {
        replaceGrid();
    }
}

let num = 256;
let createDivs = (num) => {
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
resetGrid();
createDivs(num);
ColorDivs();
