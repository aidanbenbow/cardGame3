import { S3Client} from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
dotenv.config()

const
region = process.env.AWS_BUCKET_REGION,
accessKeyId = process.env.AWS_ACCESS_KEY,
secretAccessKey = process.env.AWS_SECRET_KEY



const s3 = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
    
})

//console.log(s3)

export {s3}