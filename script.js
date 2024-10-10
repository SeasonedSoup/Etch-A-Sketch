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
        createDivs(answerNum * answerNum, answerNum);
    }
    else {
        replaceGrid();
    }
}

let num = 256;
let createDivs = (num, sqrSize) => {
    const flexibleSize = 100 / sqrSize;
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.flexBasis = `${flexibleSize}%`;
        div.style.opacity = '0.1';
        div.dataset.interactions = 0;
        
        container.appendChild(div);
    }
}


let ColorDivs = () => {
    const divs = document.querySelectorAll('.grid')
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = generateRandomColor();
                darkenDiv(div);
        })
    })
}

let darkenDiv = (div) => {
    let interactions = parseInt(div.dataset.interactions);

    if(interactions < 10) {
        interactions++;
        div.dataset.interactions = interactions;
        div.style.opacity = (interactions * 0.1).toString(); 
    }
}
let generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}
createButton();
resetGrid();
createDivs(num, Math.sqrt(num));
ColorDivs();
