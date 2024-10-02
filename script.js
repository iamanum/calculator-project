let expression = ''; // Store the input expression

// Function to handle button presses
function press(value) {
    expression += value;
    document.getElementById('result').value = expression; // Display the expression
}

// Function to calculate the result
function calculate() {
    try {
        expression = eval(expression); // Evaluate the expression
        document.getElementById('result').value = expression; // Display the result
    } catch (error) {
        document.getElementById('result').value = 'Error'; // Display error if expression is invalid
    }
}

// Function to clear the display
function clearScreen() {
    expression = '';
    document.getElementById('result').value = '';
}

// Function to delete the last character
function deleteLast() {
    expression = expression.slice(0, -1); // Remove the last character
    document.getElementById('result').value = expression;
}
