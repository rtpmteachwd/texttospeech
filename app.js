const startRecognitionBtn = document.getElementById("start-recognition");
const transcription = document.getElementById("transcription");

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  startRecognitionBtn.addEventListener("click", function () {
    recognition.start();
    transcription.innerHTML = "Listening";
  });

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    transcript.innerHTML = `You said: ${transcript}}`;
  };
} else {
  transcription.innerHTML =
    "Speech recognition API  is not supported on this browser";
}

const speakTextBtn = document.getElementById("speak-text");
const textToSpeak = document.getElementById("text-to-speak");

speakTextBtn.addEventListener("click", function () {
  const text = textToSpeak.value;
  if (text.trim() !== "") {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
});
