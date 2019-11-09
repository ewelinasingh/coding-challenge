let x = 0;
let y = 0;
let orientation = 'N'; // Default to North

let mapwidth = 5;
let mapheight = 5;

window.onload = function(){
    document.getElementById('mapbutton').addEventListener('click', e =>{
        document.getElementById('map').innerHTML = displayMap();
        // Run displayMap function when button is pressed
    });
    document.getElementById('sizebutton').addEventListener('click', e =>{
        let str = document.getElementById('mapsize').value;
        // Get value from the text box
        setGrid(str); //Run setGrid function and pass str 
        document.getElementById('map').innerHTML = displayMap();
        document.getElementById('sizediv').style.display="none"; //Hide text box
    });
}

function setGrid(str){
    let coords = str.split(" "); //Split input from text box
    mapwidth = coords[0];
    mapheight = coords[1];
}

function displayMap(){
    let mapString = "";
    for(let i = 0; i < mapheight; i++){
        for(let j = 0; j < mapwidth; j++){
            if(y==i && x==j){
                mapString += 'X';
                // X represents the ship
            }
            else{
              mapString = mapString + " . ";  
              // . represents grid
            }
        }
        mapString = mapString + "</br>"; // Start grid on new line
    }
    return mapString;
}

function moveShip(instruction){
    if(instruction == 'F'){
        moveShipForward();
    }
}
    
function moveShipForward(){
    if(orientation == 'N'){
        y--;
    }
    else if(orientation == 'E'){
        x++;
    }
    else if(orientation == 'S'){
        y++;
    }
    else if(orientation == 'W'){
        x--;
    }
}