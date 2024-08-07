

export class Letters{
    constructor(dx,dy, pos){
       
        this.image = document.querySelector('#square_tile')

        this.dx = dx
        this.dy = dy
        this.width = 109
        this.height = 109

        this.x = [] 
        this.y = 240

        this.gap = 10

        for (let i = 0; i < 15; i++) {
            this.x.push(130 + 109*i)
        }

        this.pos = pos
        }
        draw(context){
            context.drawImage(this.image, this.dx,this.dy,this.width,this.height, this.pos[0] + this.gap, this.pos[1], this.width,this.height )
    }
   
}

