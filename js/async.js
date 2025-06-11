// Example JSON object
const userData = {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    roles: ["admin", "editor"],
    accountCreated: "2023-01-15",
    active: true,
    preferences: {
        theme: "dark",
        notifications: true,
        language: "es"
    }
};

// Async function to simulate data fetching with delay
async function fetchDataWithDelay() {
    // Simulate a 1 second delay (1000 ms)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a copy of the object to simulate API response
    return JSON.parse(JSON.stringify(userData));
}

// Async function to simulate data sending with delay
async function sendDataWithDelay(data) {
    // Simulate a 1 second delay (1000 ms)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate server response
    return {
        status: "success",
        message: "Data received successfully",
        receivedData: data,
        timestamp: new Date().toISOString()
    };
}

// DOM elements
const outputDiv = document.getElementById('output');
const fetchBtn = document.getElementById('fetchBtn');
const sendBtn = document.getElementById('sendBtn');

// Event for fetching data
fetchBtn.addEventListener('click', async () => {
    outputDiv.textContent = "Fetching data... (1 second delay)";
    console.log("Starting data fetch...");
    
    try {
        const data = await fetchDataWithDelay();
        
        // Display in DOM
        outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        // Display in console
        console.log("Data received:", data);
        console.log("Received data type:", typeof data);
        console.log("User name:", data.name);
        console.log("Roles:", data.roles.join(", "));
        
    } catch (error) {
        outputDiv.textContent = "Error fetching data: " + error.message;
        console.error("Error fetching data:", error);
    }
});

// Event for sending data
sendBtn.addEventListener('click', async () => {
    // Slightly modify the data before sending
    const dataToSend = {
        ...userData,
        name: "MODIFIED: " + userData.name,
        timestamp: new Date().toISOString()
    };
    
    outputDiv.textContent = "Sending data... (1 second delay)";
    console.log("Starting data send:", dataToSend);
    
    try {
        const response = await sendDataWithDelay(dataToSend);
        
        // Display in DOM
        outputDiv.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
        
        // Display in console
        console.log("Server response:", response);
        console.log("Status:", response.status);
        console.log("Data received by server:", response.receivedData);
        
    } catch (error) {
        outputDiv.textContent = "Error sending data: " + error.message;
        console.error("Error sending data:", error);
    }
});

// Initial console message
console.log("Application started. You can:");
console.log("1. Click 'Fetch Data' to receive information with delay");
console.log("2. Click 'Send Data' to send information with delay");