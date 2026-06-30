
const container = document.querySelector(".container");
const gridPromptButton = document.createElement("button");
container.before(gridPromptButton);
gridPromptButton.textContent = "Make a grid!";
gridPromptButton.classList.add("gridMaker");

gridPromptButton.addEventListener("click", () => {
    const gridNumber = Number(prompt("What size grid would you like? (1 - 100)"));
    
    if (gridNumber >= 1 && gridNumber <= 100) {
        container.replaceChildren()
        createGrid(gridNumber);
    } else {
        alert("Please pick a number between 1 and 100")
    }
    
})

function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    let size = 700 / gridNumber;

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${size}`;
        square.style.weight = `${size}`;
        square.addEventListener("mouseenter", () => {
            square.classList.toggle("filledSquare");
        })        

        container.appendChild(square);

        if (i % gridArea === 0) {
            // go to new line
        }
    }    
}







