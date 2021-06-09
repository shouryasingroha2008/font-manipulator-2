function setup(){
    Video=createCapture(VIDEO);
    Video.size(550,500);

    canvas=createCanvas(550,500)
    canvas.position(560,100);

    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initialized");
}

function gotPoses(){
    results=gotPoses;
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background('#d2d9d8');
}