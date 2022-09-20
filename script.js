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
const colourBtn = document.querySelector('.colourPicker');
const rainbowPicker = document.querySelector('.rainbowPicker');
const reset = document.querySelector('.reset');

rainbowPicker.addEventListener('click', () =>{
    buttonClick = !buttonClick;
    console.log(buttonClick);
});

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
            column.style.border = "solid black";
            rows.appendChild(column);
            
            // Creates initial click and sets colour of square
            column.addEventListener('mousedown',changeColour);
            // column.addEventListener('mousedown',rainbowColour);
            function changeColour(){
                column.style.backgroundColor = colourPicker.value;
            };
            function rainbowColour(){
                let randomColour = Math.floor(Math.random()*16777215).toString(16);
                column.style.backgroundColor = '#' + randomColour;
            };

            //creates the drawing effect by using mouse events to finding if variable is true or not
            column.addEventListener('mousedown', (e) =>{
                changeColour;
                isDrawing = true;
            });
            column.addEventListener('mousemove', (e) => {
                if(isDrawing) {
                    column.addEventListener('mousemove', changeColour);
                }
            });
            column.addEventListener('mouseup', (e) => {
                if(isDrawing){
                    changeColour;
                    isDrawing = false;
                }
            });

            rainbowPicker.addEventListener('click', (e) =>{
                column.addEventListener('mousedown', (e) =>{
                    rainbowColour;
                    isDrawing = true;
                });
                column.addEventListener('mousemove', (e) => {
                    if(isDrawing) {
                        column.addEventListener('mousemove', rainbowColour);
                    }
                });
                column.addEventListener('mouseup', (e) => {
                    if(isDrawing){
                        rainbowColour;
                        isDrawing = false;
                    }
                });
            }) 

            reset.addEventListener('click', resetGrid);
            function resetGrid(){
                column.style.backgroundColor = null;
                column.removeEventListener('mousemove',changeColour);
                column.removeEventListener('mousemove',rainbowColour);
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

add an event listener to add colour to the column divs
create way so mousedown can constantly fill divs
*/
