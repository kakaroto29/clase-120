Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

 camera = document.getElementById("camera");


Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json',modelLoaded);

 function modelLoaded() {
    console.log('Model Loaded!');
    }

    function speak(){
        var synth = window.speechSynthesis
        speak_data_1 = "La primera prediccion es " + prediction_1;
        speak_data_2 = "Y La segunda prediccion es " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis);
    }