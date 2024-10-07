const container = document.querySelector('.container');

const num = 16;
let createDivs = () => {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');

        container.appendChild(div);
        console.log("CREATED")
    }
}

createDivs();