
export class Card{
    constructor(){
        
        this.x = 820
        this.y = 340
        this.width = 275
        this.height = 368

       
       this.image = document.querySelector(`#cards`)
       this.name = [['h','e','a','r','t'],
       ['c','i','r','l','e'],
       ['o','v','a','l'],
       ['s','t','a','r'],
       ['c','h','i','c','k','e','n'],
       ['s','n','a','k','e'],
       ['b','i','r','d'],
       ['r','a','b','b','i','t'],
       ['s','n','a','i','l'],
       ['w','a','s','p'],
    ]
       this.names = ['heart',
       'circle',
       'oval',
       'star',
       'chicken',
       'snake', 
       'bird', 
       'rabbit', 
       'snail', 
       'wasp',]
    
       this.cards = new Map([
        ['heart', [0,0,274,368]],
    ['circle', [274,0,274,368]],
    ['oval', [548,0,274,368]],
    ['star', [822,0,274,368]],
    ['chicken', [1096,0,274,368]],
    ['snake', [0,368,274,368]],
    ['bird', [274,368,274,368]],
    ['rabbit', [548,368,274,368]],
    ['snail', [822,368,274,368]],
    ['wasp', [1096,368,274,368]]
       ])

       this.rand = this.random(this.names.length)
       
       this.wordToWrite 
       this.card 
       this.dx  
       this.dy 
      
       this.reset()
    }random(n){
        return Math.floor(Math.random() *n)
    }
    draw(context){
        
         context.drawImage(this.image,this.dx,this.dy,this.width,this.height, this.x, this.y, this.width,this.height)
    }
    reset(){
        this.wordToWrite = this.name[this.rand]
        this.card = this.cards.get(this.names[this.rand]) 
       this.dx  = this.card[0]
       this.dy = this.card[1]
    }
}

 class Star extends Card{
    constructor(){
    super()
  
    }
}

class Oval extends Card{
    constructor(){
    super()
    this.image = document.querySelector('#card_oval')
    }
}