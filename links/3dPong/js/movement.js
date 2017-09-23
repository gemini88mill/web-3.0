/**
 * Created by raphael on 8/31/17.
 */

var xDir = 0.2;
var yDir = 0.2;
var setEnd = false;

function deradicalizer(xDir, yDir) {
    if(Math.abs(yDir / xDir) > 2)
        return 0;
    else return yDir;
}

function ballMovement(){
    ball.position.x += xDir;
    ball.position.y += yDir;

    cpuPaddleMovement();

    if( Key.isDown( Key.A ) )
    {
        playerPaddle.position.y -= 0.8;
    }
    else if( Key.isDown( Key.D ) )
    {
        playerPaddle.position.y += 0.8;
    }

    if(ball.position.x < -24){
        xDir = 0.2 + (volley * 0.01);
        document.getElementById('volley').innerHTML = getVolley();

        if(Math.abs(playerPaddle.position.y - ball.position.y) <=3){
            volley++;
            yDir = -yDir + generateRandom();
            xDir += 0.1;

            yDir = deradicalizer(xDir, yDir);

            playSound('assets/music/sounds/basshit.mp3');
        } else{
            cpuScore++;
            setEnd = true;
            document.getElementById('CpuScore').innerHTML = getScore(cpuScore);



            resetGame();

        }

    }
    else if( ball.position.x > 24 )
    {
        xDir = -0.2 - (volley * 0.01);
        document.getElementById('volley').innerHTML = getVolley();


        if(Math.abs(cpuPaddle.position.y - ball.position.y) <=3){
            volley++;
            yDir = -yDir + generateRandom();
            xDir -= 0.1;

            yDir = deradicalizer(xDir, yDir);

            playSound('assets/music/sounds/basshit.mp3');
        } else{
            playerScore++;

            setEnd = true;
            document.getElementById('playerScore').innerHTML = getScore(playerScore);

            resetGame();
        }
    }

    if( ball.position.y < -14 && yDir < 0 )
    {
        yDir = Math.abs(yDir);
        playSound('assets/music/sounds/blip.mp3');

    }
    else if( ball.position.y > 14 && yDir > 0 )
    {
        yDir = -(Math.abs(yDir));
        playSound('assets/music/sounds/blip.mp3');

    }
}

function resetGame(){
    ball.position.x = ball.position.y = 0;
    volley = 0;
    xDir = yDir = 0.2;
    document.getElementById('volley').innerHTML = getVolley();
}




var cpuPaddleSpeed = 0.2;

function cpuPaddleMovement(){
    //cpuPaddle.position.y = ball.position.y;
    if(cpuPaddle.position.y > ball.position.y){
        cpuPaddle.position.y -= cpuPaddleSpeed;
    } else {
        cpuPaddle.position.y += cpuPaddleSpeed;
    }
}


