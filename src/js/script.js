// Function to update the current time and day
function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("current-time");
  const currentDayElement = document.getElementById("current-day");

  // Get current date and time
  const now = new Date();

  // Format time to UTC
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Get current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayString = daysOfWeek[now.getUTCDay()];

  // Update elements with current time and day
  currentTimeElement.textContent = timeString;
  currentDayElement.textContent = dayString;
}

// Call the function to update time and day immediately
updateTimeAndDay();

// Set interval to update time every second
setInterval(updateTimeAndDay, 1000);
