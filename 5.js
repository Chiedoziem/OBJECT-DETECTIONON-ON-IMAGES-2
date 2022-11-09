function back(){
    window.location = 'index.html'
}
function preload(){
    img = loadImage('istockphoto-1203325681-612x612.jpg');

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
}
function modelLoaded(){
    console.log('Loaded');
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results)
    
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text('fruit basket', 500, 50);
    noFill();
stroke('#FF0000');

rect(50, 50, 530, 550);


   



}
