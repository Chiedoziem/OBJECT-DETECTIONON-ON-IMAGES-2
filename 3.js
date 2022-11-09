function back(){
    window.location = 'index.html'
}

function preload(){
    img = loadImage('laptop-accessories-1625082299.jpg');

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
    text('laptop', 250, 150);
    noFill();
stroke('#FF0000');

rect(250, 150, 170, 200);


    fill('#FF0000');
    text('tablet', 450, 100);
    noFill();
stroke('#FF0000');
rect(450, 100, 120, 100);



}
