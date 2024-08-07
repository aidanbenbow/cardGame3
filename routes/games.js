import express from 'express'
const router = express.Router()

import guessImageHiscore from'../models/HiScores.js'


router.get('/guessImage', async (req,res)=>{
    let hiscores = [{
        name: 'aidan',
        hiscore: '4'
    },
    {
        name: 'corm',
        hiscore: '5'
    }]
    

    res.render('games/guessImage', {scores: hiscores})
})

router.post('/flappy', async (req,res)=>{
    let word = new scrollHiscore({
        hiScore: req.body.score,
        nme: req.body.nme,
    })
let nme = word.nme
 
let name = await scrollHiscore.find({nme})
console.log(name)
 await word.save()

    res.render('games/flappy')
})



export {router}

