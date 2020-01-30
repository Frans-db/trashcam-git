function setupVideo() {
// Grab elements, create settings, etc.
var video = document.getElementById('video');


    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
            init();
        });
    }
}

const URL = "https://teachablemachine.withgoogle.com/models/eiI89YI4/";

let model, maxPredictions;

    // Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    window.requestAnimationFrame(loop);
}

var count = 0;

async function loop() {
    window.requestAnimationFrame(loop);
    if (count > 20) {
        await predict();
        count = 0;
    }
    count++;
}

async function predict() {
    var webcam = document.getElementById('video');
    var label = document.getElementById('label');
    var prediction = await model.predict(webcam);
    
    var maxProbability = 0;
    var maxProbablilityIndex = -1;
    for (var i = 0; i < maxPredictions; i++) {
        probability = prediction[i].probability.toFixed(2);
        if (probability > maxProbability) {
            maxProbability = probability;
            maxProbablilityIndex = i;
        }
    }
    label.innerHTML = prediction[maxProbablilityIndex].className;
}

setupVideo();
