function resetForm() {
    var form = document.getElementById("byo-intro");
    form.reset();
}

function preventFormSubmission() {
    var form = document.getElementById("byo-intro");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.required = true;
    coursesDiv.appendChild(newCourseInput);
}

function displayFormData() {
    // Get references to the form and the main content area
    var form = document.getElementById("byo-intro");
    var mainContent = document.querySelector("main");

    // Check if the form is valid (all required fields are filled)
    if (form.checkValidity()) {
        // Collect form data
        var name = document.getElementById("name").value;
        var mascot = document.getElementById("mascot").value;
        var image = document.getElementById("image").files[0];
        var imageURL = URL.createObjectURL(image);
        var imageCaption = document.getElementById("imageCaption").value;
        var personalBackground = document.getElementById("personalBackground").value;
        var professionalBackground = document.getElementById("professionalBackground").value;
        var academicBackground = document.getElementById("academicBackground").value;
        var webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
        var computerPlatform = document.getElementById("computerPlatform").value;
        var coursesInputs = document.querySelectorAll("#courses input");
        var courses = Array.from(coursesInputs).map(input => input.value);
        var funnyThing = document.getElementById("funnyThing").value;
        var anythingElse = document.getElementById("anythingElse").value;

        // Create the content to replace the form
        var content = document.createElement("div");
        content.innerHTML = `
            <h2>BYO Intro</h2>
            <p>Name: ${name}</p>
            <p>Mascot: ${mascot}</p>
            <img src="${imageURL}" alt="Uploaded Image">
            <p>Image Caption: ${imageCaption}</p>
            <p>Personal Background: ${personalBackground}</p>
            <p>Professional Background: ${professionalBackground}</p>
            <p>Academic Background: ${academicBackground}</p>
            <p>Background in Web Development: ${webDevelopmentBackground}</p>
            <p>Primary Computer Platform: ${computerPlatform}</p>
            <p>Courses currently taking: ${courses.join(", ")}</p>
            <p>Funny thing: ${funnyThing}</p>
            <p>Anything else: ${anythingElse}</p>
        `;

        // Replace the form with the content
        mainContent.innerHTML = ''; // Clear existing content in the main area
        mainContent.appendChild(content);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    preventFormSubmission();

    // Add an event listener to the form submit button
    var submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        displayFormData();
    });
});