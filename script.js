let x = 0;
let y = 0;
let orientation = 'N'; // Default to North

let mapwidth = 5;
let mapheight = 5;

window.onload = function(){
    document.getElementById('mapbutton').addEventListener('click', e =>{
        document.getElementById('map').innerHTML = displayMap(); // Run displayMap function when button is pressed
    });
    document.getElementById('sizebutton').addEventListener('click', e =>{
        let str = document.getElementById('mapsize').value; // Get value from the text box
        setGrid(str); //Run setGrid function and pass str 
        document.getElementById('map').innerHTML = displayMap();
        document.getElementById('sizediv').style.display="none"; //Hide text box
    });
    document.getElementById('coordsbutton').addEventListener('click', e =>{
        let str = document.getElementById('shipcoords').value; // Get value from text box
        setCoords(str); // Run setCoords function and pass str
        document.getElementById('map').innerHTML = displayMap(); // Run displayMap function
    });
    document.getElementById('directionbutton').addEventListener('click', e =>{
        let str = document.getElementById('directions').value;
        receiveDirections(str);
        document.getElementById('map').innerHTML = displayMap();
    });
}

function setGrid(str){
    let coords = str.split(" "); // Split input from text box where there is a space
    mapwidth = coords[0];
    mapheight = coords[1];
}

function setCoords(str){
    let coords = str.split(" "); // Split input from text box
    x = coords[0]; // x equals the first coords from text box
    y = coords[1]; // y equals the second coords from text box
    orientation = coords[2]; // orientation equals third input from text box
}

function receiveDirections(str){
    for(let i = 0; i < str.length; i++){
        moveShip(str[i]);
    }
}

function displayMap(){
    let mapString = "";
    for(let i = 0; i < mapheight; i++){
        for(let j = 0; j < mapwidth; j++){
            if(y==i && x==j){
                mapString += 'X'; // X represents the ship
            }
            else{
              mapString = mapString + " . "; // . represents grid
            }
        }
        mapString = mapString + "</br>"; // Start grid on new line
    }
    return mapString;
}

function moveShip(instruction){
    if(instruction == 'L'){
        if(orientation == 'N'){
            orientation = 'W'
        }
        else if(orientation == 'E'){
            orientation = 'N';
        }
        else if(orientation == 'S'){
            orientation = 'E';
        }
        else if(orientation == 'W'){
            orientation = 'S';
        }
    }
    else if(instruction == 'R'){
        if(orientation == 'N'){
            orientation = 'E'
        }
        else if(orientation == 'E'){
            orientation = 'S';
        }
        else if(orientation == 'S'){
            orientation = 'W';
        }
        else if(orientation == 'W'){
            orientation = 'N';
        }
    }
    else if(instruction == 'F'){
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