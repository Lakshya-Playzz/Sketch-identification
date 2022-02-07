function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}
function setup(){
    canvas = createCanvas(400,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;

}
function classifyCanvas(){
    classifier.classify(canvas , gotResult)
}
function draw(){
    strokeWeight(5)
    stroke("skyblue")
    if(mouseIsPressed){
        line(pmouseX ,pmouseY ,mouseX,mouseY)
    }
    
}
function clearCanvas(){
    background("white")
    document.getElementById("label").innerHTML = "label:"
    document.getElementById("Accuracy").innerHTML = "Accuracy:"
}
function gotResult(error, results){
if(error){
    console.error(error)

}
else{
    document.getElementById("label").innerHTML = "Label:"+ results[0].label
    document.getElementById("Accuracy").innerHTML =   "Confidence:" + Math.round(results[0].confidence * 100)+"%"
    utterThis = new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis)


}
}

