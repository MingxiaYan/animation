window.addEventListener('resize', onWindowResize, false);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry(1,20,20);
var texture = new THREE.TextureLoader().load('../images/map_inverted.png');
var material = new THREE.MeshBasicMaterial({map:texture});

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var light = new THREE.Light( 0xFFFFFF ); // soft white light
scene.add( light );

var animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();


function onWindowResize() {
    let {
        innerWidth: width,
        innerHeight: height
    } = window

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}