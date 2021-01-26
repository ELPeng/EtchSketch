let gridSize = document.querySelector('#gridSize')
const parentGrid = document.getElementById('parent-grid')
const resetGrid = document.getElementById('reset-button')
const selectColor = document.getElementById('color-picker')
const cssRuleList = document.styleSheets[1].cssRules

gridSize.addEventListener('input', updateSize)
resetGrid.addEventListener('click', clearGrid)
selectColor.addEventListener('input', updateColor)

//Identifies the CSS rule to change the etch color and sets it to variable 'colorSquareRule'
let colorSquareRule
for(let i=0; i<cssRuleList.length; i++){
    if(cssRuleList[i].selectorText == '.colorSquare')
        colorSquareRule = cssRuleList[i]
}

/* Functions
   ========================================================================== */

//Generates number of squares (gridLength x gridLength) based on slider input and places into div #parent-grid
function createGrid(){
    let gridLength = gridSize.value
    for(let x = 0; x<gridLength; x++){
        for(let y = 0; y<gridLength; y++){
            let newSquare = document.createElement('div')
            newSquare.classList.add('square')
            parentGrid.appendChild(newSquare)
        }
    }
    setEtch()
}

//Sets the CSS variable --grid-size to the input value of the slider and prints it to the page
function updateSize(){
    deleteGrid(parentGrid)
    document.getElementById('parent-grid').style.setProperty('--grid-size', gridSize.value)
    document.getElementById('sizeVar').innerHTML = gridSize.value
    createGrid()
}

function clearGrid(){
    document.querySelectorAll('.square').forEach(square => square.classList.remove('colorSquare'))
}

function deleteGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function setEtch(){
    const squares = document.querySelectorAll('.square')
    Array.from(squares).forEach(square => square.addEventListener('mouseenter', function(){
        square.classList.add('colorSquare')
    })) 
}

function updateColor(){
    colorSquareRule.style.setProperty('--square-color', selectColor.value)
}

createGrid()