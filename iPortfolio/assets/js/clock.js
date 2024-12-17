// Function to display the current time
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    const clock = document.getElementById("clock");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Call updateClock every second (1000ms)
  setInterval(updateClock, 1000);
  
  // Initialize the clock right away
  updateClock();
  
  // Variables for circle animation
  let position = 0;
  let direction = 1; // 1 for right, -1 for left
  
  function moveCircle() {
    const circle = document.querySelector("circle");
    position += direction * 2; // Adjust speed by changing the multiplier (2 here)
  
    // Change direction at 200px or 0px
    if (position >= 200 || position <= 0) {
      direction *= -1;
    }
  
    // Update the position using setAttribute
    circle.setAttribute("cx", 50 + position); // 50 is the initial center X
  }
  
  // Update position every 20ms
  setInterval(moveCircle, 20);
  