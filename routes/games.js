import express from 'express'
const router = express.Router()

import guessImageHiscore from'../models/HiScores.js'


import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'


import {s3} from '../config/s3.js'

const bucketname = process.env.AWS_BUCKET_NAME

router.get('/guessImage', async (req,res)=>{
    let hiscores = [{
        name: 'aidan',
        hiscore: '4'
    },
    {
        name: 'corm',
        hiscore: '5'
    }]
    

    const params = {
        Bucket: bucketname,
        Key: 'background.png',
    } 
    const command = new GetObjectCommand(params)
    let item = await s3.send(command)
    
    

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

