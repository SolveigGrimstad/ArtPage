console.log('canvas');

//let canvas = document.querySelector('canvas');
$(document).ready(function() {
const width = 600;
const height = 500;

    let i=400;


    let canvas = $('#drawing')[0];
    /*canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

     */

    let c = canvas.getContext('2d');

    let clicked = false;

    canvas.onclick = function (){
        clicked=!clicked;

    }


    let hover = false;

    canvas.onmouseover = function () {
        hover=true;
        console.log("hei");
        console.log(c);
    }

    canvas.onmouseout = function(){
        console.log("hh");
        hover=false;
        i=400;

    }



//Stjerne

    function star() {


        c.fillStyle = "#FFE721";
        c.beginPath();
        c.moveTo(108, 0.0);
        c.lineTo(141, 78.3);
        c.lineTo(218, 78.3);
        c.lineTo(155, 131);
        c.lineTo(175, 205);
        c.lineTo(108, 160);
        c.lineTo(41.2, 205);
        c.lineTo(62, 128);
        c.lineTo(1, 78);
        c.lineTo(75, 78.3);
        c.lineTo(108, 0);
        c.closePath();
        c.fill();
    }

    function staranimate() {
        c.fillStyle = "#002F51";

        c.beginPath();
        c.moveTo(108, 0.0);
        c.lineTo(141, 70);
        c.lineTo(218, 78.3);
        c.lineTo(162, 131);
        c.lineTo(175, 205);
        c.lineTo(108, 170);
        c.lineTo(41.2, 205);
        c.lineTo(55, 131);
        c.lineTo(1, 78);
        c.lineTo(75, 68);
        c.lineTo(108, 0);
        c.closePath();
        c.fill();

    }

    function sun(){

        c.beginPath();
        c.fillStyle="yellow";
        c.strokeStyle="yellow";
        c.arc(500, 200, 100, 0, Math.PI * 2, true);
        c.fill();
        c.closePath();

        c.beginPath();
        c.moveTo(375, 200);
        c.lineTo(300, 200);

        c.moveTo(500,75)
        c.lineTo(500,0);

        c.moveTo(500, 325);
        c.lineTo(500, 400);

        c.moveTo(400, 300 );
        c.lineTo(350, 350);

        c.moveTo(400, 110);
        c.lineTo(350,50 );


        c.stroke();
        c.closePath();

    }



    function moon(){

        c.beginPath();
        c.fillStyle="white";
        c.strokeStyle="white";
        c.arc(500, 200, 100, 0, Math.PI * 2, true);
        c.closePath();
        c.fill();

        c.beginPath();
        c.fillStyle="#233947";
        c.arc(540, 200, 100, 0, Math.PI * 2, true);
        c.closePath();
        c.fill();
    }


    function drawShip(y){

            c.beginPath();
            c.fillStyle="brown";
            c.rect(250, y, 40, 60);
            c.fill();
            c.closePath();

            c.beginPath();
            c.fillStyle="black";
            c.strokeStyle="black";
            c.moveTo(250, y);
            c.lineTo(270, y - 30);
            c.lineTo(290,y );
            c.lineTo(250, y);
            c.fill();
            c.closePath();

            c.beginPath();
            c.arc(270, y+15, 7, 0,Math.PI*2,false );
            c.fillStyle = "black";
            c.strokeStyle = "black";
            c.fill();
            c.stroke();

            c.beginPath();
            c.arc(270, y+40, 7, 0,Math.PI*2,false );
            c.fillStyle = "black";
            c.strokeStyle = "black";
            c.fill();
            c.stroke();

            c.beginPath();
            c.fillStyle="orange";
            c.strokeStyle="orange";
            c.moveTo(250,  y + 60);
            c.lineTo(260, y + 90);
            c.lineTo(270,y +75);
            c.lineTo(280, y + 90);
            c.lineTo(290, y + 60);
            c.fill();
            c.closePath();

    }

    function animationloop(){
        i-=1;
        drawShip(i);

    }

    let x = 50;
    let dx=2;


    function animate() {

        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        moon();
        star();

        if(clicked){

            staranimate();
            sun();

        }

        if(hover){

           animationloop();

        }
        else{
            drawShip(400);
        }


        c.beginPath();
        c.arc(x, 350, 50, 0, Math.PI * 2, false);
        c.fillStyle = "#95B56A";
        c.strokeStyle = "#95B56A";
        c.fill();
        c.stroke();

        if (x + 50 > 600 || x - 50 < 0) {
            dx = -dx;
        }

        x += dx;


    }


    animate();


    
});

