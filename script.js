const drawContainer = document.querySelector('main');
let update = () => output.textContent = parseInt(slider.value); 
let isDrawing = false;
let buttonClick = false;





//slider variables and events
const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
slider.addEventListener('input', changeSlide);
slider.addEventListener('input', changeGrid);
slider.addEventListener('input', update);


//button variables and events
const colourPicker = document.querySelector('.colourPicker');
const colourBtn = document.querySelector('.chooseColour');
const rainbowPicker = document.querySelector('.rainbowPicker');
const gridLines = document.querySelector('.toggleGrid');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

colourBtn.addEventListener('click', draw);
rainbowPicker.addEventListener('click', drawRainbow);
gridLines.addEventListener('click', changeGridLine);
eraser.addEventListener('click',getEraser);
reset.addEventListener('click', resetGrid);




function changeGrid () {
    // Creates rows of empty divs
    for (let i = 0; i < parseInt(slider.value); i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        rows.style.width = '100%';
        rows.style.display = "flex";
        drawContainer.append(rows);
        // fills the div rows with empty div boxes
        for (let j = 0; j < parseInt(slider.value); j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.width = " 100%";
            if(buttonClick === false){
                column.style.border = "1px solid black";
            }
            column.style.backgroundColor = "white";
            rows.appendChild(column);
            
        }
    }
}

function draw(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = colourPicker.value;
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor = colourPicker.value;
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor = colourPicker.value;
        isDrawing = false;
    });
}

function drawRainbow(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = "#" + rainbowColour();
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor =  "#" + rainbowColour();
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor =  "#" + rainbowColour();
        isDrawing = false;
    });
}

function getEraser(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = null;
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor =  null;
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor = null;
        isDrawing = false;
    });
}

function rainbowColour(){
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    return randomColour;
};

function changeGridLine(){
    buttonClick = !buttonClick;
    changeSlide();
    changeGrid();
}

function changeSlide() {
    while(drawContainer.hasChildNodes()){
        drawContainer.removeChild(drawContainer.lastChild);
    }
}

function resetGrid(){
    changeSlide();
    changeGrid();
}










changeGrid();
draw();


/*PSEUDO CODE
create loop to add certain amount of div containers to playarea 

create slider to adjust amount of grid,
use that input into for loop,
clear grid each time slider has new value,

add an event listener to add colour to the column divs
create way so mousedown can constantly fill divs
*/
