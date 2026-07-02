
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
    const gridArea = gridNumber * gridNumber;
    const size = 100 / gridNumber;

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${size}%`;
        square.style.flexBasis = `${size}%`;
        let opacity = 0;
        square.addEventListener("mouseenter", () => {
            if (opacity <= 100) {
                opacity += 10;
            } else {
                opacity = 0;
            }
            square.style.backgroundColor = `rgb(0 0 0 / ${opacity}%)`;     
        })        

        container.appendChild(square);
    }    
}







