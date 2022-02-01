import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import './index.css';

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 20;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.querySelector('#app')!.appendChild(renderer.domElement);

const width = 8; // ui: width
const height = 8; // ui: height
const depth = 8; // ui: depth
const widthSegments = 4; // ui: widthSegments
const heightSegments = 4; // ui: heightSegments
const depthSegments = 4; // ui: depthSegments

const material = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const geometry = new BoxGeometry(
  width,
  height,
  depth,
  widthSegments,
  heightSegments,
  depthSegments
);
const boxMesh = new Mesh(geometry, material);

scene.add(boxMesh);

const render = () => {
  renderer.render(scene, camera);
};

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

animate();
