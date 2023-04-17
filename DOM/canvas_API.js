// Context is painting in a picture frame - Canvas is picture and frame
let element = document.getElementById("myCanvas");
let context = element.getContext("2d");


// DRAW LINES
context.lineWidth = 3;
context.beginPath();
context.moveTo(0,0);
context.lineTo(200,100);
context.lineTo(100,300);
context.moveTo(200,0);
context.lineTo(200,100);
context.lineTo(500,200);
context.strokeStyle = "yellow";
context.stroke();



// DRAW TRIANGLE
context.lineWidth = 8;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.strokeStyle = "magenta";
context.stroke();
context.fillStyle = "skyblue";
context.fill();



// DRAW RECTANGLE
context.lineWidth = 8;
context.strokeStyle = "magenta";
context.strokeRect(0,0,250,250);
context.fillStyle = "yellow";
context.fillRect(0,0,250,250);

context.lineWidth = 8;
context.strokeStyle = "magenta";
context.strokeRect(0,250,250,250);
context.fillStyle = "green";
context.fillRect(0,250,250,250);

context.lineWidth = 8;
context.strokeStyle = "magenta";
context.strokeRect(250,250,250,250);
context.fillStyle = "red";
context.fillRect(250,250,250,250);

context.lineWidth = 8;
context.strokeStyle = "magenta";
context.strokeRect(250, 0, 250,250);
context.fillStyle = "blue";
context.fillRect(250,0,250,250);



// DRAW CIRCLE
context.lineWidth = 8;
context.beginPath();
context.arc(250, 250, 100, 0, 2 * Math.PI);
context.strokeStyle  = "blue";
context.stroke();
context.fillStyle = "grey";
context.fill();


// DRAW TEXT
context.font = "50px MV BOLI"
context.fillStyle = "red";
context.textAlign = "center";
context.fillText("Hi! Hima", element.width/2, element.height/2);



