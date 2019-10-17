class Scene extends PIXI.Container {
  init() {
    this.buildScene();
    this.onRotate();
  }

  buildScene() {
    this.buildBackground();
  }

  buildBackground() {
    this.background = new PIXI.Sprite(backgroundTexture);
    this.background.anchor.set(0.5, 1);
    this.background.x = canvas.width / 2;
    this.background.y = canvas.height;
    this.addChild(this.background);
  }

  onRotate() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    if (this.background) {
      this.background.x = canvas.width / 2;
      this.background.y = canvas.height;
    }
  }
}
