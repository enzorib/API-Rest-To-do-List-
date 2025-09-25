import app from './app.js'
import 'dotenv/config'

const porta = process.env.PORT || 3000
app.listen(porta, ()=>{
    console.log(`Servidor fulmminantemente funcionando em https://localhost:${porta}`)
})