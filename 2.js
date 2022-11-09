function back(){
    window.location = 'index.html'
}

function preload(){
    img = loadImage('a-couple-in-a-room-with-air-conditioner-placed-near-the-tv.jpg');

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
    text('tv', 250, 150);
    noFill();
stroke('#FF0000');

rect(250, 150, 150, 150);


    fill('#FF0000');
    text('ac', 45, 75);
    noFill();
stroke('#FF0000');
rect(30, 20, 320, 60);



}