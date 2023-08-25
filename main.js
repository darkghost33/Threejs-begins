import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//Scene renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffcc00);

//Camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 10);

//Light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//more light
const directionLight = new THREE.DirectionalLight(0xffffff,9)
scene.add(directionLight)

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", () => {
  renderer.render(scene, camera);
});
controls.target.set(0, 0, 0);
controls.update();

//Load model
const loader = new GLTFLoader();
loader.load("./tvman/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(0, -1, -1);
  renderer.render(scene, camera);
  scene.add(model),
    undefined,
    function (error) {
      console.log(error);
    };
});
const loader2 = new GLTFLoader();
loader2.load("./skibiddi/scene.gltf", function (gltf) {
  const model2 = gltf.scene;
  model2.position.set(-1, -1, 0);
  renderer.render(scene, camera);
  scene.add(model2),
    undefined,
    function (error) {
      console.log(error);
    };
});
const loader3 = new GLTFLoader();
loader3.load("./skibiddi2/scene.gltf", function (gltf) {
  const model3 = gltf.scene;
  model3.position.set(1.2, -1, 0);
  renderer.render(scene, camera);
  scene.add(model3),
    undefined,
    function (error) {
      console.log(error);
    };
});
