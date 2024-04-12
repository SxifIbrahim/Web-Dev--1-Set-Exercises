// Add an event listener to the speakButton element
document.getElementById('speakButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    speakText(textInput);
});

// Function to speak the provided text
function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}