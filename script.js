const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const speechRecognition = window.webkitSpeechRecognition;
const greatings = [
    'diha fkarek','labass'
];
let recognition = new webkitSpeechRecognition();
recognition.onstart = function(){
    console.log('you can speak.....');
};
recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOut(transcript);
};
btn,addEventListener('click',() =>{
    recognition.start();
});
function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't knoe what you said";
    if(message.includes('how are you')){
        const final = greatings[Math.floor(Math.random()*greatings.length)];
        speech.text=final;
    }
    speech.volume = 1;
    speech.rate = 1 ;
    speech.pitch = 0.7;
    speech.lang = "Ar";
    window.speechSynthesis.speak(speech);

}