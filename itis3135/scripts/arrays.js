// Declare empty arrays for person and salaries
let persons = [];
let salaries = [];

// Function to add a person and salary to the arrays
function addSalary() {
    // Get the name and salary input values
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;

    // Validate the inputs
    if (name === "" || salary === "" || isNaN(salary)) {
        alert("Please enter a valid name and salary.");
        return;
    }

    // Add the name and salary to the arrays
    persons.push(name);
    salaries.push(parseFloat(salary));

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";

    // Move the cursor to the name field
    document.getElementById("name").focus();

    // Update the dropdown of names
    updateNameDropdown();
}

// Function to update the dropdown of names
function updateNameDropdown() {
    let nameDropdown = document.getElementById("nameDropdown");
    nameDropdown.innerHTML = "";

    // Create an option for each person
    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.value = persons[i];
        option.textContent = persons[i];
        nameDropdown.appendChild(option);
    }
}
updateNameDropdown();

// Move the cursor to the name field when the application starts
document.getElementById("name").focus();

// Move the cursor to the name field after a name and salary have been added
document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("name").focus();
});

// Function to display the average salary and highest salary
function displayResults() {
  // Calculate the average salary
  let averageSalary = salaries.reduce((total, salary) => total + salary, 0) / salaries.length;

  // Find the highest salary
  let highestSalary = Math.max(...salaries);

  // Create the result elements
  let averageParagraph = document.createElement("p");
  averageParagraph.textContent = "Average Salary: " + averageSalary.toFixed(2);
  let highestParagraph = document.createElement("p");
  highestParagraph.textContent = "Highest Salary: " + highestSalary.toFixed(2);

  // Get the results div element and append the result elements
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  resultsDiv.appendChild(averageParagraph);
  resultsDiv.appendChild(highestParagraph);
}

// Function to display the names and salaries in a table
function displaySalary() {
  // Get the table element
  let table = document.getElementById("results_table");

  // Clear the table
  table.innerHTML = "";

  // Create the table header row
  let headerRow = document.createElement("tr");
  let nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  let salaryHeader = document.createElement("th");
  salaryHeader.textContent = "Salary";
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(salaryHeader);
  table.appendChild(headerRow);

  // Create a row for each person and salary
  for (let i = 0; i < persons.length; i++) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = persons[i];
    let salaryCell = document.createElement("td");
    salaryCell.textContent = salaries[i].toFixed(2);
    row.appendChild(nameCell);
    row.appendChild(salaryCell);
    table.appendChild(row);
  }
}

// Move the cursor to the name field when the application starts
document.getElementById("name").focus();

// Move the cursor to the name field after a name and salary have been added
document.getElementById("addButton").addEventListener("click", function() {
  document.getElementById("name").focus();
});
