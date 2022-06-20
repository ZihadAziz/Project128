song = '';
song2 = '';
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(700, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.X
        rightWristY = results[0].pose.rightWrist.y
    }
}

function draw() {
    image(video, 0, 0, 700, 600);
}