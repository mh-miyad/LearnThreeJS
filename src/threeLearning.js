import * as THREE from "three";

// Create a scene

const scene = new THREE.Scene();

// Create a camera

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

//  add the camera to the scene

scene.add(camera);

// Create  Mash objects

const box = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(box, material);
mesh.position.z = 2;
mesh.rotation.x = 1;
scene.add(mesh);
// create renderer
const canvas = document.getElementById("draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Render loop
let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  mesh.rotation.x = clock.getElapsedTime();
  mesh.rotation.y = clock.getElapsedTime();
  renderer.render(scene, camera);
}
animate();
