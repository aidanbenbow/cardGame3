export function getContext(){
    const canvas = document.querySelector('canvas');
	
    const c = canvas.getContext('2d');
    
    c.canvas.width = 1920;
        c.canvas.height = 1080;
        c.imageSmoothingEnabled = false;

        return c
}

export const letter = [{
    alp:{
        letter:'a',
        dx: 109},
    alp:{
        letter:'b',
         dx: 218},
    alp:{
            letter:'c',
            dx: 327},
        alp:{
            letter:'d',
             dx: 436},    
     alp:{
                letter:'e',
                dx: 545},
            alp:{
                letter:'f',
                 dx: 654},
            alp:{
                    letter:'g',
                    dx: 763},
                alp:{
                    letter:'h',
                     dx: 872}, 
                     alp:{
                        letter:'i',
                         dx: 987}, 
                         alp:{
                            letter:'j',
                            dx: 109,
                            dy: 109,},
                        alp:{
                            letter:'k',
                             dx: 218,
                             dy: 109,},
                        alp:{
                                letter:'l',
                                dx: 327,
                                dy: 109,},
                            alp:{
                                letter:'m',
                                 dx: 436,
                                 dy: 109,},    
                         alp:{
                                    letter:'n',
                                    dx: 545,
                                    dy: 109,},
                                alp:{
                                    letter:'o',
                                     dx: 654,
                                     dy: 109,},
                                alp:{
                                        letter:'p',
                                        dx: 763,
                                        dy: 109,},
                                    alp:{
                                        letter:'q',
                                         dx: 872,
                                         dy: 109,}, 
                                         alp:{
                                            letter:'r',
                                             dx: 987,
                                             dy: 109,}, 
                                             
                                                 alp:{
                                                    letter:'s',
                                                    dx: 109,
                                                    dy: 218,},
                                                alp:{
                                                    letter:'t',
                                                     dx: 218,
                                                     dy: 218,},
                                                alp:{
                                                        letter:'u',
                                                        dx: 327,
                                                        dy: 218,},
                                                    alp:{
                                                        letter:'v',
                                                         dx: 436,
                                                         dy: 218,},    
                                                 alp:{
                                                            letter:'x',
                                                            dx: 545,
                                                            dy: 218,},
                                                        alp:{
                                                            letter:'y',
                                                             dx: 654,
                                                             dy: 218,},
                                                        alp:{
                                                                letter:'z',
                                                                dx: 763,
                                                                dy: 218},
                                                                    
}]
    
export const letters = {
    'a':[109,0]
}
    


export const A= [109,0]
export const B= [218,0]
export const C= [327,0]
export const D= [436,0]
export const E= [545,0]
export const F= [654,0]
export const G= [763,0]
export const H= [872,0]
export const I= [987,0]
export const J= [109,109]
export const K= [218,109]
export const L= [327,109]
export const M= [436,109]
export const N= [545,109]
export const O= [654,109]
export const P= [763,109]
export const Q= [872,109]
export const R= [987,109]
export const S= [109,218]
export const T= [218,218]
export const U= [327,218]
export const V= [436,218]
export const W= [545,218]
export const X= [654,218]
export const Y= [763,218]
export const Z= [872,218]
export const SP= [0,0]

    
