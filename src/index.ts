import server from "./server.js";
import colors from 'colors'

const port = process.env.PORT || 4000;

server.listen( port, ()=>{
    console.log( colors.bgBlue.grey.italic (`servidor funcionando en el puerto ${port}`))
} )


