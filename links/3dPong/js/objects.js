/**
 * Created by raphael on 8/31/17.
 */

function createPaddles(){
    var geometry = new THREE.BoxGeometry( 1, 5, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh(geometry, material);
    return cube;
}

function createBall(){
    var geometry = new THREE.SphereGeometry( 1, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var sphere = new THREE.Mesh( geometry, material );

    return sphere;
}


function createFieldBorderView() {
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));

    var line = new THREE.Line(geometry, material);
    return line;
}

function createStyleLines() {
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 15, 0));
    geometry.vertices.push(new THREE.Vector3(0, -15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -10, 0));
    geometry.vertices.push(new THREE.Vector3(20, -10, 0));
    geometry.vertices.push(new THREE.Vector3(20, 10, 0));
    geometry.vertices.push(new THREE.Vector3(25, 10, 0));
    geometry.vertices.push(new THREE.Vector3(25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 10, 0));
    geometry.vertices.push(new THREE.Vector3(-20, 10, 0));
    geometry.vertices.push(new THREE.Vector3(-20, -10, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -10, 0));
    var line = new THREE.Line(geometry, material);
    return line;
}




