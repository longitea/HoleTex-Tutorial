import express, { json, request, response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


const app = express()
app.use(express.json());
const PORT = 5500  //Define PORT
let refreshTokens = []

// mở port truy cập
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

export function authenToken(request, response, next) {
    const authorHeader = request.headers['authorization']
    const token = authorHeader.split(' ')[1]
    if (!token) return response.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, data) => {
        console.log(error, data)
        if (error) return response.sendStatus(403)
        next()
    })
}

// Login
app.post('/login', (request, response) => {
    // Authorization
    // { username: 'Test' }
    const data = request.body;
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' })

    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    console.log(refreshToken);
    response.json({ accessToken, refreshToken })
})

// refreshToken
app.post('/refreshToken', (request, response) => {
    const refresh = request.body.token;
    if (!refresh) return response.sendStatus(401)
    if (!refreshTokens.includes(refresh)) return response.sendStatus(403)
    jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET, (error, data) => {
        if (error) return response.sendStatus(403)
        const accessToken = jwt.sign({username: data.username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' })
        response.json({ accessToken })
    })

})

// Logout
app.post('/logout', (request, response) => {
    const refresh = request.body.token;
    console.log(refresh);
    refreshTokens = refreshTokens.filter(refToken => refToken !== refresh)
    response.sendStatus(200)
})
