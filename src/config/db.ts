import mongoose from 'mongoose'
import color from 'colors'


export const connectDB = async () => {
    
    console.log()

    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`


        console.log( color.bgWhite.magenta ( `mongodb conectado en ${url}`))
        
    } catch (error) {
        console.log( color.bgRed.black  (error.message))
        process.exit(1)
    }


}