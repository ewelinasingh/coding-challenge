let x = 0;
let y = 3;
let orientation = 'N'; // Default to North

let mapwidth = 5;
let mapheight = 5;

window.onload = function(){
    document.getElementById('mapbutton').addEventListener('click', e =>{
        document.getElementById('map').innerHTML = displayMap();
        // Run displayMap function when button is pressed
    });
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