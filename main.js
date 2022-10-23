img= "";
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario.jpg");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(600 , 300);

	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on("pose", gotResult)
}

function modelloaded()
{
	console.log("Model Is Intialized");
}

function gotResult(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
		console.log("Nose X = " + noseX + ", Nose Y = " + noseY);
	}
}

function draw() {
	game();
	background("#d3d3d3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if(noseX > 300 )
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}
	image(img, marioX, marioY , 40, 70);
}






