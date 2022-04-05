import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
// CAMERA
//(field of view, aspect ratio(users browser window), view frustrum(min range, max range))
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight); //fullscreen

// renderer.render(scene, camera);

//GEOMETRY
// Torus
const torusGeometry = new THREE.TorusGeometry(3, 3, 3, 100);
const torusMaterial = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

// Box
const boxGeometry = new THREE.BoxBufferGeometry(10, 3, 16, 100);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// LOOP RENDER
//mechanism that tells browser you want to perform an animation
//whenever browser repaints the screen, it will call render method to update the UI
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();