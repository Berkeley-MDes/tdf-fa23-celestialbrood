<script>
function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
}

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        displayMessage("You: " + userInput);
        // Here you would call your API and then display the bot's response
        // sendMessageToBot(userInput);
        displayMessage("Bot: 🤖 Here's where the bot response would go!");
        document.getElementById('user-input').value = ''; // Clear input field
    }
});

// Function to send message to bot (for future use)
// function sendMessageToBot(message) {
//     // Code to send message to bot and receive response goes here
// }
</script>
