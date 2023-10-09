function displayDateTime() {
    const todaysDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[todaysDate.getDay()];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[todaysDate.getMonth()];
    const dayOfMonth = todaysDate.getDate();
    const year = todaysDate.getFullYear();
    let hours = todaysDate.getHours();
    let minutes = todaysDate.getMinutes();
    const timeFormat = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    const formattedDateTime = `Today is ${hours}:${(minutes < 10 ? '0' : '') + minutes}${timeFormat} on ${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;
    const dateTimeElement = document.getElementById("dateTimeDisplay");
    dateTimeElement.textContent = formattedDateTime;
    
}

function greeting(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    const greeting = document.getElementById("greeting");

    // Display the greeting with the user's name and mood
    greeting.textContent = `Hello, ${name}! You're feeling ${mood} today.`;
}

function displayPolygonName() {
    const numberInput = document.getElementById("polygonnumber").value;
    const absoluteValue = Math.abs(parseFloat(numberInput));
    const roundedValue = Math.round(absoluteValue);

    if (roundedValue == 1) {
        alert("Monogon");
    } else if (roundedValue == 2) {
        alert("Digon");
    } else if (roundedValue == 3) {
        alert("Trigon");
    } else if (roundedValue == 4) {
        alert("Tetragon");
    } else if (roundedValue == 5) {
        alert("Pentagon");
    } else if (roundedValue == 6) {
        alert("Hexagon");
    } else if (roundedValue == 7) {
        alert("Heptagon");
    } else if (roundedValue == 8) {
        alert("Octagon");
    } else if (roundedValue == 9) {
        alert("Enneagon");
    } else if (roundedValue == 10) {
        alert("Decagon");
    }

}

displayDateTime();
const firstscript = document.getElementById("firstscript");
firstscript.addEventListener("submit", greeting);