
import {mongoose} from 'mongoose'


const connectDB = async ()=>{
    try {
        const conn = mongoose.connect(process.env.HISCORES_DB)
        console.log(`connected `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export {connectDB}
