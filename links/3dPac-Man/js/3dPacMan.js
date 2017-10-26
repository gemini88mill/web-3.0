/*
*   Created by: Raphael Miller on 09.29.2017
* */

var renderer;
var scene;
var camera;
var spotLight;

var walls;
var ball;
var collect;
var ghosts = [];
var ghostsProp = [];
var wallBorder;

var ghostPosition;



var score = 0;

var isPaused;



<!-- 3. Add the following two lines. -->
Physijs.scripts.worker = 'libs/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';


function init()
{
    <!-- 4. Edit the scene creation -->
    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3( 0, 0, -100 ));


    setupCamera();
    setupRenderer();
    addSpotLight();

    //objects
    createGroundPlane();
    createBall();
    createWalls();
    collect = createCollectablesArray();
    //createCollectible(30,0);
    ghosts.push(createGhost(0, '#00ff00', 'inky'));
    ghosts.push(createGhost(-10, '#ff0ff0', 'pinky'));
    ghosts.push(createGhost(10, '#0000ff', 'blinky'));
    ghosts.push(createGhost(20, '#ff0000', 'bob'));


    loadBackgroundMusic();

    // Output to the stream
    document.body.appendChild( renderer.domElement );

    // Call render
    render();
}


function render()
{


    if(!isPaused) {
        scene.simulate();
    }
    //physics
    cameraMovement();
    //setDirtyPosition();

    ghostMovement(ghosts[0]);
    ghostMovement(ghosts[1]);
    ghostMovement(ghosts[2]);
    ghostMovement(ghosts[3]);
    //console.log(ghostsProp);

    //collectiblePosition(collect);

    //checkHit();

    // Request animation frame
    requestAnimationFrame( render );

    // Call render()
    //renderer.render(backgroundScene , backgroundCamera );
    renderer.render( scene, camera );
}
function setupCamera()
{
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.x = 0;
    camera.position.y = -150;
    camera.position.z = 200;
    camera.lookAt( scene.position );
}

function setupRenderer()
{
    renderer = new THREE.WebGLRenderer();
    //						color     alpha
    renderer.setClearColor( 0x000000, 1.0 );
    renderer.setSize( window.innerWidth, window.innerHeight-20 );
    renderer.shadowMapEnabled = true;
}

function addSpotLight()
{
    spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 0, 0, 100 );
    spotLight.shadowCameraNear = 10;
    spotLight.shadowCameraFar = 100;
    spotLight.castShadow = true;
    spotLight.intensity = 2;
    scene.add(spotLight);
}



function loadBackgroundMusic(){
    //Create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

//Load a sound and set it as the Audio object's buffer
    audioLoader.load( 'assets/music/staywithme.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(false);
        sound.setVolume(0.2);
        sound.play();
    });
}

function playSound(soundEffectPath){
    //Create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

//Load a sound and set it as the Audio object's buffer
    audioLoader.load( soundEffectPath, function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(false);
        sound.setVolume(0.2);
        sound.play();
    });

}

function hintMenu(){
    var x = document.getElementById('hintMenu');
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
}



window.onload = init;
