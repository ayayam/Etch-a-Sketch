
const container = document.querySelector(".container");
const gridPromptButton = document.createElement("button");
container.appendChild(gridPromptButton);
gridPromptButton.textContent = "Make a grid!";
gridPromptButton.classList.add("gridMaker");
const gridNumer = 0;

gridPromptButton.addEventListener("click", () => {
    gridNumber = Number(prompt("What size grid would you like? (Pick 1 - 100)"));
    gridPromptButton.remove();
    createGrid();
    return gridNumber;
})

function createGrid() {

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseenter", () => {
            square.classList.toggle("filledSquare");
        })        

        container.appendChild(square);
    }    
}







