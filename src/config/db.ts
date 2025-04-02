import mongoose from 'mongoose'

export const connectDB = async () => {
    

    try {
        const url = ''
        const connection = await mongoose.connect(url)

        console.log(connection)
        console.log(`mongodb conectado`)
        
    } catch (error) {
        console.log(error)
        
    }


}
