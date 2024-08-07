import { Card } from "./card.js";
import { letters, A, B,C,D,E,F, G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, SP } from "./constant.js";
import { clearKeys, handleKeyDown, handleKeyUp, heldKeys, isKeyDown, pressedKeys } from "./inputHandler.js";
import { Letters } from "./letters.js";

export class Scene{
    constructor(game){
        this.game = game;
        this.bg = document.querySelector('#scene');
        this.x = 0
        this.y = 0
        this.y1 = 240
        this.blank = []
        this.letters = []
        this.wordToWrite = [G, U,E,S,S,SP,T,H,E,SP,I,M,A,G,E]
        this.pos = []
        this.occupied = [false,false,false,false,]
        
this.blanks(this.y1)
        
    }
    draw(context){
         context.drawImage(this.bg, this.x, this.y)
       
        for (let i = 0; i < this.wordToWrite.length; i++) {
            this.blank[i].draw(context)
            this.blank[i].dx = this.wordToWrite[i][0]
             this.blank[i].dy = this.wordToWrite[i][1]
        }
        
            context.font = "50px sans-serif"
            context.fillText('You have 30 seconds. One point per correct letter', 560, 540);  
            context.fillText('click to start', 760, 740);       
    }
    blanks(y){
        this.blank = []
        for (let i = 0; i < this.wordToWrite.length; i++) {
            this.pos = [130 + 109*i, y]
            this.blank.push(new Letters(0,0, this.pos))
        }
    }update(){}

}

export class SceneOne extends Scene{
    constructor(game){
        super()
        this.game = game;
        this.bg = document.querySelector('#scene1');
        this.y1 = 540
       
        this.card = new Card()
        this.wordToWrite = this.card.wordToWrite
        this.blanks(this.y1)
        this.pressedKeys = []
        this.heldKeys = new Set();
        
        
        addEventListener('keydown', (e)=>{
            e.preventDefault();
            this.heldKeys.add(e.key);     
         this.pressedKeys.push(e.key)
         console.log(this.pressedKeys)
        }    
        )
        
        addEventListener('keyup', (e)=>{
            e.preventDefault();
	this.heldKeys.delete(e.key);
        })

        addEventListener('click',()=>{
            if(this.pressedKeys.length >=this.blank.length){
                this.check()

                setTimeout(()=>{
                    this.card = new Card()
                    this.wordToWrite = this.card.wordToWrite
                    this.blanks(this.y1)
                    
                   for (let i = 0; i < this.wordToWrite.length; i++) {
                        this.blank[i].dx = 0
                        this.blank[i].dy = 0
                        this.occupied[i] = false
                    } 
                                },1000)
            } 
            this.pressedKeys = []
        })
      
    }draw(context){
        context.drawImage(this.bg, this.x, this.y)
        this.card.draw(context)
      
        for (let i = 0; i < this.wordToWrite.length; i++) {
            this.blank[i].draw(context)
        }
       
           context.font = "50px sans-serif"
           context.fillText('score:'+ this.game.score, 60, 150);
           context.fillText('time:'+ this.game.time, 1460, 150);
       
   }
   update(){
    for (let i = 0; i < this.pressedKeys.length; i++) {
        if( this.pressedKeys[i] ==='a' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = A[0]
             this.blank[i].dy = A[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 'b' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = B[0]
            this.blank[i].dy = B[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'c' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = C[0]
            this.blank[i].dy = C[1]
            this.occupied[i] = true
           }else if(this.pressedKeys[i] === 'd'&& !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = D[0]
             this.blank[i].dy = D[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 'e' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = E[0]
            this.blank[i].dy = E[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'f' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = F[0]
            this.blank[i].dy = F[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'g' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = G[0]
            this.blank[i].dy = G[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'h' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = H[0]
            this.blank[i].dy = H[1]
            this.occupied[i] = true
           }else if(this.pressedKeys[i] === 'i'&& !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = I[0]
             this.blank[i].dy = I[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 'j' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = J[0]
            this.blank[i].dy = J[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'k' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = K[0]
            this.blank[i].dy = K[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'l' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = L[0]
            this.blank[i].dy = L[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'm' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = M[0]
            this.blank[i].dy = M[1]
            this.occupied[i] = true
           }else if(this.pressedKeys[i] === 'n'&& !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = N[0]
             this.blank[i].dy = N[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 'o' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = O[0]
            this.blank[i].dy = O[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'p' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = P[0]
            this.blank[i].dy = P[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'q' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = Q[0]
            this.blank[i].dy = Q[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'r' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = R[0]
            this.blank[i].dy = R[1]
            this.occupied[i] = true
           }else if(this.pressedKeys[i] === 's'&& !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = S[0]
             this.blank[i].dy = S[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 't' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = T[0]
            this.blank[i].dy = T[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'u' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = U[0]
            this.blank[i].dy = U[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'v' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = V[0]
            this.blank[i].dy = V[1]
            this.occupied[i] = true
           }else if(this.pressedKeys[i] === 'w'&& !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = W[0]
             this.blank[i].dy = W[1]
            this.occupied[i] = true
           } else if( this.pressedKeys[i] === 'x' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = X[0]
            this.blank[i].dy = X[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'y' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = Y[0]
            this.blank[i].dy = Y[1]
            this.occupied[i] = true
           }else if( this.pressedKeys[i] === 'z' && !this.occupied[i]&&this.pressedKeys.length<=this.wordToWrite.length){
            this.blank[i].dx = Z[0]
            this.blank[i].dy = Z[1]
            this.occupied[i] = true
           }
    }
    
    if(this.game.time >0){

    
    if(this.game.timer<this.game.interval){
        this.game.interval--
    } else{
        this.game.time--
        this.game.interval=100
    }} else{
        this.gameOver()
    }
    
   
    

    
   }gameOver(){
    this.game.c.fillText('Game Over', 1160, 540);
    this.game.c.fillText('score:'+ this.game.score, 1160, 740);
    this.pressedKeys=[]
   }

   check(){
    
    
    for (let i = 0; i < this.wordToWrite.length; i++) {
       if(this.pressedKeys[i]===this.wordToWrite[i]){
        this.blank[i].dx = 0
        this.blank[i].dy = 218
        this.game.score++
        
        } 
       else{
        this.blank[i].dx = 0
        this.blank[i].dy = 109
    }
     
     } 
    
     
}
}

class GameOver{
    constructor(){

    }
}