const drawContainer = document.querySelector('main');
const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
let update = () => output.textContent = parseInt(slider.value); 

// const colour = document.querySelector('.column');


slider.addEventListener('input', changeSlide);
slider.addEventListener('input', changeGrid);
slider.addEventListener('input', update);

function changeGrid () {
    for (let i = 0; i < parseInt(slider.value); i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        rows.style.width = '100%';
        rows.style.display = "flex";
        drawContainer.append(rows);
        for (let j = 0; j < parseInt(slider.value); j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.width = " 100%";
            column.style.border = "solid black";
            rows.appendChild(column);
            
            // Changes colour
            column.addEventListener('mousedown', changeColour);
            function changeColour(){

                column.style.backgroundColor = "blue";
            }

        }
    }
}

function changeSlide() {
    while(drawContainer.hasChildNodes()){
        drawContainer.removeChild(drawContainer.lastChild);
    }
}




changeGrid();



/*PSEUDO CODE
create loop to add certain amount of div containers to playarea 

create slider to adjust amount of grid,
use that input into for loop,
clear grid each time slider has new value,
*/
