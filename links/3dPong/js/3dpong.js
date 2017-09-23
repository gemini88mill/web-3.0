/**
 * Created by raphael on 8/25/17.
 */

var renderer;
var scene;
var camera;


function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        // frustum vertical view         aspect ratio							 frustum near plane     frustum far plane
        75,                          window.innerWidth / window.innerHeight, 0.1,                   1000 );

    setupRenderer();
    setupCamera();



        // Main code here.
    //updateScore();
    loadBackgroundMusic();

    // Output to the stream
    document.body.appendChild( renderer.domElement );

    // Call render
    render();
}

function setupRenderer() {
    renderer = new THREE.WebGLRenderer();
    //						color     alpha
    renderer.setClearColor( 0x000000, 1.0 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
}

function setupCamera() {
    camera.position.x = 0;
    camera.position.y = -30;
    camera.position.z = 25;
    camera.lookAt( scene.position );
}

function render()
{
    // Request animation frame
    requestAnimationFrame(render);

    ballMovement();

    // Call render()
    renderer.render( scene, camera );

}

function loadBackgroundMusic(){
    //Create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

//Load a sound and set it as the Audio object's buffer
    audioLoader.load( 'assets/music/itsmorefuntocompute.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(false);
        sound.setVolume(0.5);
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


window.onload = init();