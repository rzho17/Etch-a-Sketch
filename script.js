const drawContainer = document.querySelector('main');
const grid = document.querySelector('.grid');

// const drawArea2 = document.createElement('div');
// drawArea2.style.width = "100%";
// drawArea2.style.border = "solid red";

// drawContainer.append(drawArea);
// drawContainer.append(drawArea2);

const gridBorder = () => {
    
}

for (let i = 0; i < 16; i++) {
    const rows = document.createElement('div');
    rows.style.width = '100%';
    rows.style.display = "flex";
    drawContainer.append(rows);
    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.style.width = " 100%";
        column.style.border = "solid black";
        rows.appendChild(column);
    }
    
}

/*PSEUDO CODE
create loop to add certain amount of div containers to playarea 
*/
