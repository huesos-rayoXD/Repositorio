function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Simple base64 encoding
    displayOutput(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText); // Simple base64 decoding
        displayOutput(decryptedText);
    } catch (e) {
        displayOutput('Error: El texto proporcionado no es una encriptación válida.');
    }
}

function displayOutput(text) {
    const outputDiv = document.getElementById('outputText');
    outputDiv.innerHTML = `<p>${text}</p>`;
}
