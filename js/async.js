// Objeto JSON de ejemplo
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

// Función asíncrona para simular obtención de datos con retardo
async function fetchDataWithDelay() {
    // Simulamos un retardo de 1 segundo (1000 ms)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Devolvemos una copia del objeto para simular respuesta de API
    return JSON.parse(JSON.stringify(userData));
}

// Función asíncrona para simular envío de datos con retardo
async function sendDataWithDelay(data) {
    // Simulamos un retardo de 1 segundo (1000 ms)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulamos una respuesta del servidor
    return {
        status: "success",
        message: "Datos recibidos correctamente",
        receivedData: data,
        timestamp: new Date().toISOString()
    };
}

// Elementos del DOM
const outputDiv = document.getElementById('output');
const fetchBtn = document.getElementById('fetchBtn');
const sendBtn = document.getElementById('sendBtn');

// Evento para obtener datos
fetchBtn.addEventListener('click', async () => {
    outputDiv.textContent = "Obteniendo datos... (1 segundo de retardo)";
    console.log("Iniciando obtención de datos...");
    
    try {
        const data = await fetchDataWithDelay();
        
        // Mostrar en el DOM
        outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        // Mostrar en consola
        console.log("Datos obtenidos:", data);
        console.log("Tipo de dato recibido:", typeof data);
        console.log("Nombre del usuario:", data.name);
        console.log("Roles:", data.roles.join(", "));
        
    } catch (error) {
        outputDiv.textContent = "Error al obtener datos: " + error.message;
        console.error("Error al obtener datos:", error);
    }
});

// Evento para enviar datos
sendBtn.addEventListener('click', async () => {
    // Modificamos ligeramente los datos antes de enviar
    const dataToSend = {
        ...userData,
        name: "MODIFICADO: " + userData.name,
        timestamp: new Date().toISOString()
    };
    
    outputDiv.textContent = "Enviando datos... (1 segundo de retardo)";
    console.log("Iniciando envío de datos:", dataToSend);
    
    try {
        const response = await sendDataWithDelay(dataToSend);
        
        // Mostrar en el DOM
        outputDiv.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
        
        // Mostrar en consola
        console.log("Respuesta del servidor:", response);
        console.log("Estado:", response.status);
        console.log("Datos recibidos por el servidor:", response.receivedData);
        
    } catch (error) {
        outputDiv.textContent = "Error al enviar datos: " + error.message;
        console.error("Error al enviar datos:", error);
    }
});

// Mensaje inicial en consola
console.log("Aplicación iniciada. Puedes:");
console.log("1. Hacer clic en 'Obtener Datos' para recibir información con retardo");
console.log("2. Hacer clic en 'Enviar Datos' para enviar información con retardo");