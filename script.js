// write js code here if required
function updateTimer() {
    const timerElement = document.getElementById('timer');
    
    // Get the current date and time
    const now = new Date();
    
    // Extract date and time components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Display the timer in the specified format
    const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    timerElement.textContent = timerString;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Call the updateTimer function initially to avoid a delay in displaying the timer
updateTimer();

