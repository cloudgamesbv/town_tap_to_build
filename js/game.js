// load images
const backgroundTexture = PIXI.Texture.from('img/background.jpg');

const canvas = document.getElementById('canvas');
const app = new PIXI.Application({ view: canvas });
const stage = app.stage;

const scene = new Scene();
stage.addChild(scene);

scene.init();

window.addEventListener('resize', () => {
  scene.onRotate();
});
