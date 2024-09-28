// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate and display the grade
const studentGradeGenerator = () => {
    rl.question("Please enter student marks (0-100): ", (input) => {
        // Convert input to a number
        let marks = Number(input);

        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input! Please enter a number between 0 and 100.");
            rl.close(); // Close the readline interface
            return; // Exit the function if input is invalid
        }

        // Determine the grade based on the marks
        let grade;
        if (marks >= 80) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 49) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }

        // Output the grade
        console.log(`Your grade is: ${grade}`);
        rl.close(); // Close the readline interface
    });
};

// Call the function to run the program
studentGradeGenerator();
