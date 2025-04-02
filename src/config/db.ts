import mongoose from 'mongoose'

export const connectDB = async () => {
    

    try {
        const url = 'mongodb+srv://jmgv87191:dk2SYJaqNQbTVn3M@cluster0.2tbde.mongodb.net/linktree_node_typescript'
        const connection = await mongoose.connect(url)

        console.log(connection)
        console.log(`mongodb conectado`)
        
    } catch (error) {
        console.log(error)
        
    }


}