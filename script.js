var selectedRow = null;
// Global variable to keep track of the currently selected row
var selectedRow = null;

// Function that gets called when the form is submitted
function onFormSubmit() {
    // Validate the form inputs first
    if (validate()) {
        // Read the form data and check whether we're inserting a new record or updating an existing one
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        // Reset the form after submitting
        resetForm();
    }
}

// Function that reads the form data and returns it as an object
function readFormData() {
    var formData = {};
    formData["userName"] = document.getElementById("userName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["stdClass"] = document.getElementById("stdClass").value;
    formData["tnum"] = document.getElementById("tnum").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

// Function that inserts a new record into the table
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    // Add cells to the new row and fill them with the form data
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.rollNo;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.stdClass;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.tnum;
    cell1 = newRow.insertCell(4);
    cell1.innerHTML = data.age;
    cell1 = newRow.insertCell(5);
    // Add Edit and Delete buttons to the new row
    cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a><a onClick="onDelete(this)">Delete</a>`;
}

// Function that resets the form
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("stdClass").value = "";
    document.getElementById("tnum").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}

// Function that gets called when the Edit button is clicked
function onEdit(td) {
    // Set the currently selected row to the one that the Edit button was clicked on
    selectedRow = td.parentElement.parentElement;
    // Fill the form with the data from the selected row
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stdClass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tnum").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}

// Function that updates an existing record in the table
function updateRecord(formData) {
    // Fill the cells in the selected row with the updated form data
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.stdClass;
    selectedRow.cells[3].innerHTML = formData.tnum;
    selectedRow.cells[4].innerHTML = formData.age;
}

// Function that gets called when the Delete button is clicked
function onDelete(td) {
    // Confirm with the user that they really want to delete the selected record
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    // Initialize a boolean variable to true.
    isValid = true;

    // Check whether the "userName" input field is empty.
    if (document.getElementById("userName").value == "") {
        // If it's empty, set "isValid" to false and display a validation error message.
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    }
    else {
        // If it's not empty, set "isValid" to true and hide the validation error message.
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide")) {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }

    // Check whether the "rollNo" input field is empty.
    if (document.getElementById("rollNo").value == "") {
        // If it's empty, set "isValid" to false and display a validation error message.
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    }
    else {
        // If it's not empty, set "isValid" to true and hide the validation error message.
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide")) {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }

    // Check whether the "stdClass" input field is empty.
    if (document.getElementById("stdClass").value == "") {
        // If it's empty, set "isValid" to false and display a validation error message.
        isValid = false;
        document.getElementById("stdClassvalidationError").classList.remove("hide");
    }
    else {
        // If it's not empty, set "isValid" to true and hide the validation error message.
        isValid = true;
        if (!document.getElementById("stdClassvalidationError").classList.contains("hide")) {
            document.getElementById("stdClassvalidationError").classList.add("hide");
        }
    }

    // Check whether the "tnum" input field is empty.
    if (document.getElementById("tnum").value == "") {
        // If it's empty, set "isValid" to false and display a validation error message.
        isValid = false;
        document.getElementById("tnumvalidationError").classList.remove("hide");
    }
    else {
        // If it's not empty, set "isValid" to true and hide the validation error message.
        isValid = true;
        if (!document.getElementById("tnumvalidationError").classList.contains("hide")) {
            document.getElementById("tnumvalidationError").classList.add("hide");
        }
    }

    // Check whether the "age" input field is empty.
    if (document.getElementById("age").value == "") {
        // If it's empty, set "isValid" to false and display a validation error message.
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    }
    else {
        // If it's not empty, set "isValid" to true and hide the validation error message.
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide")) {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }

    // Return the final value of "isValid".
    return isValid;
}