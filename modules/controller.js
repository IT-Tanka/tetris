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
      }
    })
  }
  start(){
    this.view.showArea(this.game.viewArea);
    this.game.creatUpdatePanels( this.view.createBlockScore(), this.view.createBlockNextTetramino());
    
    const tick=()=>{
      if (this.game.gameOver) return;
      setTimeout(()=>{
        this.game.moveDown();
        this.view.showArea(this.game.viewArea);
        tick();
      },500);
    };
  
    tick();

    window.addEventListener('keydown', event => {
      const key=event.code;
  switch (key) {
  case 'ArrowDown':
    this.game.moveDown();
    this.view.showArea(this.game.viewArea);
    break;
  case 'ArrowUp':
    this.game.rotateTetramino();
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
