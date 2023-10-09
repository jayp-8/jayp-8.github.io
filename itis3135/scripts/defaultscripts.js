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
    const numberInput = document.getElementById("number").value;
    const absoluteValue = Math.abs(parseFloat(numberInput));
    const roundedValue = Math.round(absoluteValue);

    const polygonNames = [
        "Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon",
        "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"
    ];

    let polygonName = "Unknown";
    if (roundedValue >= 1 && roundedValue <= 10) {
        polygonName = polygonNames[roundedValue - 1];
    }

    alert(`Your favorite number corresponds to a ${polygonName}.`);
}

displayDateTime();
const firstscript = document.getElementById("firstscript");
firstscript.addEventListener("submit", greeting);