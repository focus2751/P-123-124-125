difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(600, 550);
    video.position(500, 200);

    canvas = createCanvas(600, 600);
    canvas.position(1200, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
    
}

function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
      
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("LeftWristX =" + leftWristX + "RightWristX = "+ rightWristX + "difference = "+ difference);
    }
}

function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Leah', 50, 400);
}