document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    // Validate the form (basic validation)
    if (name && email && password && phone) {
        // If all fields are filled, show a success message
        document.getElementById("successMessage").style.display = "block";

        // Optionally, clear the form after successful submission
        document.getElementById("registrationForm").reset();
    } else {
        alert("Please fill out all required fields.");
    }
});