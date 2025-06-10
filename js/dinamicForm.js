// When the input value for "quantity" changes, generate guest input fields dynamically
document.getElementById("quantity").addEventListener("input", (event) => {
    // Initialize an empty string to hold the HTML content for guests
    let content = '';

    // Get the number of guests from the input field
    const quantity = event.target.value;

    // Generate guest input fields based on the quantity
    for (let i = 0; i < quantity; i++) {
        content += `
            <div>
                <label>Guest ${i + 1}</label>
                <!-- Each input has a unique name using the index -->
                <input type="text" id="name[${i}]" placeholder="Name">

                <label>Email ${i + 1}</label>
                <input type="email" id="email[${i}]" placeholder="Email">
            </div>
        `;
    }

    // Insert the generated HTML into the div where guest inputs should appear
    document.getElementById("divGuests").innerHTML = content;
});


// When the form is submitted, collect and process the data
document.getElementById("miForm").addEventListener("submit", (event) => {
    // Prevent the default behavior (which would reload the page)
    event.preventDefault();

    // Get the number of guests from the input field
    const quantity = document.getElementById("quantity").value;

    // Create a FormData object to retrieve all form input values
    const formData = new FormData(event.target);

    // Convert FormData entries into a plain object
    const data = Object.fromEntries(formData.entries());

    // Create an array to hold guest information
    data.guests = [];

    // Loop through each guest index to collect their name and email
    for (let i = 0; i < quantity; i++) {
        const guest = {};
        guest.name = document.getElementById(`name[${i}]`).value;
        guest.email = document.getElementById(`email[${i}]`).value;

        // Push guest data into the guests array
        data.guests.push(guest);
    }

    // Output the final structured data to the console
    console.log(data);
});
