const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed(speed) {
    const speedLimit = 70;  // Set the speed limit
    let demeritPoints = 0;  // Initialize demerit points
    let resultMessage = '';  // Initialize result message

    if (isNaN(speed)) {
        resultMessage = "Please enter a valid speed.";
    } else if (speed < speedLimit) {
        resultMessage = "Ok";  // If speed is below limit, print "Ok"
    } else {
        const overSpeed = speed - speedLimit;  // Calculate how much over the limit
        demeritPoints = Math.floor(overSpeed / 5); // Calculate demerit points

        resultMessage = `Points: ${demeritPoints}`; // Set the result message

        // Check if demerit points exceed 12
        if (demeritPoints > 12) {
            resultMessage += " - License suspended"; // Append suspension message
        }
    }

    return resultMessage; // Return the result message
}

// Get user input
rl.question('Enter the speed of the car (km/h): ', (input) => {
    const speed = parseFloat(input); // Convert input to a number
    console.log(checkSpeed(speed)); // Output the result of the speed check
    rl.close(); // Close the readline interface
});