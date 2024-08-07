import { getContext } from './constant.js'
import { Scene, SceneOne } from './scenes.js'

export class Game{
    constructor(){
        this.c = getContext()
        this.width= this.c.canvas.width
        this.height= this.c.canvas.height 

        this.level = [new Scene(this),new SceneOne(this)]
        this.levelCurrent
        this.levelNumber =0
        this.score = 0
        this.time = 3
        this.timer = 0
        this.interval = 100

       
    }draw(){
        this.levelCurrent = this.level[this.levelNumber]
        this.levelCurrent.draw(this.c)
    }update(){
        this.levelCurrent.update()
    }
}




window.addEventListener('load',()=>{
    const game = new Game()

    addEventListener('click', ()=>{
        game.levelNumber = 1
    })

    function animate(){
       // ctx.clearRect(0,0,canvas.width,canvas.height)
      game.draw()
       game.update()
        requestAnimationFrame(animate)
    }

    animate()
})