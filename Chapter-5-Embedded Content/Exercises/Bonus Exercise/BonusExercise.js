document.addEventListener("DOMContentLoaded", function() {
    const soundboard = document.getElementById("soundboard");
    const audio = document.getElementById("audio");

    // Audio names and audio file paths
    const samples = [
        { name: "Ah-Ha", file: "ah-ha.mp3" },
        { name: "Back of the Net", file: "back-of-the-net.mp3" },
        { name: "Bang out of Order", file: "bangoutoforder.mp3" },
        { name: "Dan", file: "dan.mp3" },
        { name: "Email of the Evening", file: "emailoftheevening.mp3" },
        { name: "Hello Partridge", file: "hellopartridge.mp3" },
        { name: "I Ate a Scotch Egg", file: "iateascotchegg.mp3" },
        { name: "Im Confused", file: "imconfused.mp3" },
    ];

    // Dynamically create sample buttons
    samples.forEach(sample => {
        const button = document.createElement("button");
        button.textContent = sample.name;
        button.classList.add("sample-button");
        button.addEventListener("click", function() {
            playSound(sample.file);
        });
        soundboard.appendChild(button);
    });

    // Function to play audio
    function playSound(file) {
        audio.src = `audio/${file}`;
        audio.play();
    }

    // Function to trigger text-to-speech
    function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

    // Add event listener to the text-to-speech button
    document.getElementById('textToSpeechButton').addEventListener('click', function() {
    // Example text to be spoken (you can customize this)
    const textToSpeak = "Alan Partridge Soundboard";
    speakText(textToSpeak);
    
});
});