window.onload = function() {
    var canvas = document.getElementById('bargraph');

    canvas.id = "CursorLayer";
    canvas.width = 600;
    canvas.height = 250;
    canvas.style.zIndex = 8;
    canvas.style.border = "1px solid";



    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

    cursorLayer = document.getElementById("CursorLayer");

    console.log(cursorLayer);



// below is optional

    var ctx = canvas.getContext("2d");

    //months
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Jan", 10 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Feb", 50 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Mar", 90 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Apr", 130 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("May", 170 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Jun", 215 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Jul", 260 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Aug", 300 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Sep", 350 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Oct", 390 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Nov", 430 + 50, 240);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Dec", 470 + 50, 240);

    //money
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("$5B", 10, 20);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("$4B", 10, 60);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("$3B", 10, 100);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("$2B", 10, 140);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("$1B", 10, 180);

    //line for graph
    ctx.beginPath();
    ctx.moveTo(60, 210);
    ctx.lineTo(560, 210);
    ctx.stroke();

    //other graph line
    ctx.beginPath();
    ctx.moveTo(60, 10);
    ctx.lineTo(60, 210);
    ctx.stroke();

    //graph bars
    ctx.fillStyle = "black";
    ctx.fillRect(65, 30, 20, 180);
    ctx.fillStyle = "black";
    ctx.fillRect(105, 50, 20, 160);
    ctx.fillStyle = "black";
    ctx.fillRect(145, 100, 20, 110);
    ctx.fillStyle = "black";
    ctx.fillRect(185, 80, 20, 130);
    ctx.fillStyle = "black";
    ctx.fillRect(230, 100, 20, 110);
    ctx.fillStyle = "black";
    ctx.fillRect(273, 70, 20, 140);
    ctx.fillStyle = "black";
    ctx.fillRect(315, 50, 20, 160);
    ctx.fillStyle = "black";
    ctx.fillRect(355, 40, 20, 170);
    ctx.fillStyle = "black";
    ctx.fillRect(405, 50, 20, 160);
    ctx.fillStyle = "black";
    ctx.fillRect(445, 50, 20, 160);
    ctx.fillStyle = "black";
    ctx.fillRect(487, 110, 20, 100);
    ctx.fillStyle = "black";
    ctx.fillRect(525, 150, 20, 60);

    // 3.8078122382402797
    // 2.4377794177235543
    // 3.3395247997268553
    // 3.262318892229376
    // 3.851808920861007
    // 2.0965862342688606
    // 3.0356570053861525
    // 2.555545189387754
    // 2.3898046217020585
    // 3.703220410145428

}