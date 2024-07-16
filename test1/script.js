
function calculate(operation) {
    // Get the values of the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the result based on the operation
    let result;
    if (operation === 'sum') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}
