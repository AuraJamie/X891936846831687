// Waits until the HTML page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Finds the button element by its ID
    const button = document.getElementById('myButton');
    // Finds the message paragraph by its ID
    const messageElement = document.getElementById('message');
    
    let clickCount = 0;

    // Adds a function to run when the button is clicked
    button.addEventListener('click', function() {
        clickCount++;
        // Updates the message text
        messageElement.textContent = `Hello! You have clicked the button ${clickCount} time(s).`;
        
        // Changes the button's text after the first click
        if (clickCount === 1) {
            button.textContent = "Click Again!";
        }
    });
});
