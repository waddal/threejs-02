import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
// CAMERA
//(field of view, aspect ratio(users browser window), view frustrum(min range, max range))
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusMaterial = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
// scene.add(torus);

// Box
const boxGeometry = new THREE.BoxBufferGeometry(11, 11, 11);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

// Box 2
const boxGeometry2 = new THREE.BoxBufferGeometry(6, 6, 6);
const boxMaterial2 = new THREE.MeshBasicMaterial({
  color: 0xfff00,
  wireframe: true,
});
const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);

const boxes = new THREE.Group();
boxes.add(box);
// boxes.add(box2);
scene.add(boxes);


// LOOP RENDER
//mechanism that tells browser you want to perform an animation
//whenever browser repaints the screen, it will call render method to update the UI
function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.005;
  box.rotation.z += 0.01;

  box2.rotation.x += 0.02;
  box2.rotation.y += 0.009;
  box2.rotation.z += 0.05;


  renderer.render(scene, camera);
}

animate();