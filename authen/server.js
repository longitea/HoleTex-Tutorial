import express from 'express'
import dotenv from 'dotenv'
import {authenToken} from './authServer.js'

dotenv.config()
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 5000  //Define PORT

// mở port truy cập
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

const animes = [
    {   
        id: 1,
        name: 'One Piece',
        Author: 'Oda'
    },
    {   
        id: 2,
        name: 'Naruto',
        Author: 'Masashi Kishimoto'
    },
]

// GET Anime
app.get('/animes', authenToken, (req, res) => {
    res.json({status: 'Success', data: animes});
})
