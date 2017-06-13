//Function which will move the robot
function moveRover(locations,myRover){
  var x = myRover.position[0]; // get both x and y current coordinates
  var y = myRover.position[1];
  if(myRover.direction == 'N'){
    if(x-1<0){
      console.log("Out of boundries"); // check the boundries
      return;
    }
    else if(locations[x-1][y]!= 1){ // check if there is any obstacle
      locations[x-1][y] = myRover;
      myRover.position[0] = x-1; // set its new location
      myRover.position[1] = y;
      locations[x][y] = 0; // remove the rover from its previous location
    }
    else{
      console.log("Facing an obstacle");
      return;
    }
  }
  else if(myRover.direction == 'S'){
    if(x+1>9){ // same but with south direction
      console.log("Out of boundries");
      return;
    }
    else if(locations[x+1][y] != 1){
      locations[x+1][y] = myRover;
      myRover.position[0] = x+1;
      myRover.position[1] = y;
      locations[x][y] = 0; // remove the rover from its previous location
    }
    else{
      console.log("Facing an obstacle");
      return;
    }
  }
  else if(myRover.direction == 'E'){
    if(y+1>9){ // same but with east direction
      console.log("Out of boundries");
      return;
    }
    else if(locations[x][y+1] != 1){
      locations[x][y+1] = myRover;
      myRover.position[0] = x;
      myRover.position[1] = y+1;
      locations[x][y] = 0; // remove the rover from its previous location
    }
    else{
      console.log("Facing an obstacle");
      return;
    }
  }
  else if(myRover.direction == 'W'){
    if(y-1<0){  // same but with west direction
      console.log("Out of boundries");
      return;
    }
    else if(locations[x][y-1]!= 1){
      locations[x][y-1] = myRover;
      myRover.position[0] = x;
      myRover.position[1] = y-1;
      locations[x][y] = 0; // remove the rover from its previous location
    }
    else{
      console.log("Facing an obstacle");
      return;
    }

  }
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");

}
// Function which will face the rover to its new direction and move it
function faceRover(locations,myRover,command){
  if(command == 'f'){
    moveRover(locations,myRover);
  }
  else if(command == 'b'){
    moveRover(locations,myRover);
  }
  else if(command == 'r'){
    if(myRover.direction == 'N'){
      myRover.direction = 'E';
    }
    else if(myRover.direction == 'E'){
      myRover.direction = 'S';
    }
    else if(myRover.direction == 'S'){
      myRover.direction = 'W';
    }
    else if(myRover.direction == 'W'){
      myRover.direction = 'N';
    }
    moveRover(locations,myRover);
  }
  else if(command == 'l'){
    if(myRover.direction == 'N'){
      myRover.direction = 'W';
    }
    else if(myRover.direction == 'E'){
      myRover.direction = 'N';
    }
    else if(myRover.direction == 'S'){
      myRover.direction = 'E';
    }
    else if(myRover.direction == 'W'){
      myRover.direction = 'S';
    }
    moveRover(locations,myRover);
  }
}

// Create a 2-D array with the Rover in the (0,0) as the starting point
var locations = [[myRover,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0,0],
[0,1,0,1,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0],
[0,0,1,0,1,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,1,1,1,0,0],];

var commands = ['f','f','f','r','f','f','l','f','f','f','b','b','r','f','r','l'];
// The robot
var myRover = {
  position: [0,0], //initial point
  direction: 'N' // its initial direction
};

for(var i = 0;i<commands.length;i++){
  faceRover(locations,myRover,commands[i]);
}
