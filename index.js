/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var packet = readline().split(' ');
printErr(packet);

// var nbFloors = +packet[0]; // number of floors
// var width = +packet[1]; // width of the area
// var nbRounds = +packet[2]; // maximum number of rounds
// var exitFloor = +packet[3]; // floor on which the exit is found
var exitPos = +packet[4]; // position of the exit on its floor
// var nbTotalClones = +packet[5]; // number of generated clones
// var nbAdditionalElevators = +packet[6]; // ignore (always zero)
var elevatorsCount = +packet[7]; // number of elevators
var exits = [];
exits[+packet[3]] = [exitPos];

for (var i = 0; i < elevatorsCount; i++) {
    packet = readline().split(' ');
    exits[+packet[0]] = [+packet[1]];
}

// printErr('exits', exits);

// game loop
while (true) {
    packet = readline().split(' ');

    // var clonePos = +packet[1]; // position of the leading clone on its floor
    // var cloneFloor = +packet[0]; // floor of the leading clone
    exitPos = exits[+packet[0]];

    // var needDirection = exitPos - clonePos > 0 ? "RIGHT" : "LEFT";
    // var direction = packet[2]; // direction of the leading clone: LEFT or RIGHT
    print((exitPos - +packet[1] > 0 ? "RIGHT" : "LEFT") == packet[2] ? 'WAIT' : (exitPos == +packet[1] ? "WAIT" : "BLOCK"));
}
