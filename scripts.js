// Function to save row data (input text and dropdown values)
function saveRowData(rowNumber) {
    const inputField = document.getElementById(`input-${rowNumber}`).value;
    const firstDropdown = document.querySelector(`#row-${rowNumber} .color-select`).value;
    const secondDropdown = document.querySelector(`#row-${rowNumber} .option-select`).value;
    const apiUrl = 'https://legate-fyjof6ymf-tabis-projects-bde69958.vercel.app/'; // Replace with your Vercel URL

    // Save data to localStorage
    localStorage.setItem(`row-${rowNumber}-input`, inputField);
    localStorage.setItem(`row-${rowNumber}-color-select`, firstDropdown);
    localStorage.setItem(`row-${rowNumber}-option-select`, secondDropdown);
}

// Function to load row data on page load
function loadRowData(rowNumber) {
    const savedInput = localStorage.getItem(`row-${rowNumber}-input`);
    const savedFirstDropdown = localStorage.getItem(`row-${rowNumber}-color-select`);
    const savedSecondDropdown = localStorage.getItem(`row-${rowNumber}-option-select`);

    if (savedInput !== null) {
        document.getElementById(`input-${rowNumber}`).value = savedInput;
    }

    if (savedFirstDropdown !== null) {
        document.querySelector(`#row-${rowNumber} .color-select`).value = savedFirstDropdown;
        changeColor(rowNumber, savedFirstDropdown); // Apply color change
    }

    if (savedSecondDropdown !== null) {
        document.querySelector(`#row-${rowNumber} .option-select`).value = savedSecondDropdown;
    }
}

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
    
    // Save row data when color changes
    saveRowData(rowNumber);
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
    
    // Remove data from localStorage
    localStorage.removeItem(`row-${rowNumber}-input`);
    localStorage.removeItem(`row-${rowNumber}-color-select`);
    localStorage.removeItem(`row-${rowNumber}-option-select`);
}

// On page load, load saved data for all rows
window.onload = function() {
    for (let i = 1; i <= 15; i++) {
        loadRowData(i);
    }
};
