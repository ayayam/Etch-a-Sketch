
const container = document.querySelector(".container");

function createGrid() {

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseenter", () => {
            square.classList.toggle("filledSquare");
        })        

        container.appendChild(square);
    }    
    
}

createGrid();



