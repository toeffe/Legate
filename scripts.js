// Function to change the color of the row based on dropdown selection
function changeColor(rowNumber, selectedOption) {
    const row = document.getElementById(`row-${rowNumber}`);
    
    // Clear existing color classes
    row.classList.remove('unload', 'load', 'special');
    
    // Apply the selected color class
    if (selectedOption === 'unload') {
        row.classList.add('unload');
    } else if (selectedOption === 'load') {
        row.classList.add('load');
    } else if (selectedOption === 'special') {
        row.classList.add('special');
    }
}

// Function to clear the row's selection, reset color, and clear the input field
function clearRow(rowNumber) {
    const row = document.getElementById(`row-${rowNumber}`);
    
    // Reset first dropdown (color-select)
    const firstDropdown = row.querySelector('.color-select');
    firstDropdown.value = 'default';
    
    // Reset second dropdown (option-select)
    const secondDropdown = row.querySelector('.option-select');
    secondDropdown.value = 'option1'; // Default to the first option

    // Clear the text input field
    const inputField = document.getElementById(`input-${rowNumber}`);
    inputField.value = '';

    // Remove any background color
    row.classList.remove('unload', 'load', 'special');
}
