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
        let str = document.getElementById('directions').value; // Get value from text box
        let gridstr = document.getElementById('mapsize').value;
        let coordstr = document.getElementById('shipcoords').value;
        receiveDirections(str, gridstr, coordstr); // Run receiveDirections functions and pass str
        document.getElementById('map').innerHTML = displayMap(); // Run displayMap function
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

function receiveDirections(str, gridstr, coordstr){
    for(let i = 0; i < str.length; i++){
        moveShip(str[i]);

        if(x >= mapwidth || x < 0 || y >= mapheight || y < 0 ){
            document.getElementById('finaldiv').innerHTML = x + " " + y + " " + orientation + "LOST";
            return;
        }
    } 
    document.getElementById('finaldiv').innerHTML = x + " " + y + " " + orientation; // Print final coordinates of ship
}

function displayMap(){
    let mapString = "";
    for(let i = 0; i < mapheight; i++){
        for(let j = 0; j < mapwidth; j++){
            if(y==i && x==j){
                mapString += '<img src="boat.png" alt="Ship" id="shipimg">'; // X represents the ship
            }
            else{
              mapString = mapString + " <div id='gridbox'> </div> "; // . represents grid
            }
        }
        mapString = mapString + "</br>"; // Start grid on new line
    }
    return mapString;
}

function moveShip(instruction){
    if(instruction == 'L'){ // if instruction is LEFT
        if(orientation == 'N'){ // if ship faces north
            orientation = 'W' // make it face west
        }
        else if(orientation == 'E'){ // if ship faces east
            orientation = 'N'; // make it face north
        }
        else if(orientation == 'S'){ // if ship faces south
            orientation = 'E'; // make it face east
        }
        else if(orientation == 'W'){ // if ship faces west
            orientation = 'S'; // make it face south
        }
    }
    else if(instruction == 'R'){ // if instruction is RIGHT
        if(orientation == 'N'){ // if ship faces north
            orientation = 'E' // make it face east
        }
        else if(orientation == 'E'){ // if ship faces east
            orientation = 'S'; // make it face south
        }
        else if(orientation == 'S'){ // if ship faces south
            orientation = 'W'; // make it face west
        }
        else if(orientation == 'W'){ // if ship faces west
            orientation = 'N'; // make it face north
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