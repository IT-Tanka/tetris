export class Controller{
  constructor(game, view){
    this.game=game;
    this.view=view;
  }
  init(keyCode){
    window.addEventListener('keydown', event=>{
      if (event.code===keyCode){
        this.view.init();
        this.start();
        document.querySelector('h2').remove();
      }
    })
  }
  start(){
    this.view.showArea(this.game.viewArea);
    setInterval(()=>{
      this.game.moveDown();
      this.view.showArea(this.game.viewArea);
    },500);
    window.addEventListener('keydown', event => {
      const key=event.code;
  switch (key) {
  case 'ArrowDown':
    this.game.moveDown();
    this.view.showArea(this.game.viewArea);
    break;
  case 'ArrowUp':
    this.game.rotateTetromino();
    this.view.showArea(this.game.viewArea);
    break;
  case 'ArrowLeft':
    this. game.moveLeft();
    this.view.showArea(this.game.viewArea);
    break;
  case 'ArrowRight':
    this.game.moveRight();
    this.view.showArea(this.game.viewArea);
    break;
  }
  });
  }
    
}
