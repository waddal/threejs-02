import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
//camera(field of view, aspect ratio(users browser window), view frustrum(min range, max range))
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
//instantiate renderer and attach to canvas
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.pixelRatio(window.devicePixelRatio);
//full screen canvas
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);