noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(400, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 380);
    video.hide();
    poseNet=ml5.poseNet(video,moddelloaded);
    poseNet.on("pose",Gotpose);
}

function moddelloaded(){
console.log("poseNet is loaded");
}

function Gotpose(results){
    if(results.length > 0){
        console.log("results");
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nose_x = "+noseX);
        console.log("nose_y = "+noseY);
    }
}

function draw(){
    image(video, 0, 0, 400, 380);
    image(clown_nose, noseX, noseY, 25, 25);
}

function capture(){
    save("filter_image.png");
}
