import express from 'express'
import { getAboutPage, getContactPage, getHomePage, getNotFoundPage } from './controller.js'

const PORT = 8080
const BASE_URL = 'http://localhost'

const app = express()

app.get('/', getHomePage)
app.get('/about', getAboutPage)
app.get('/contact', getContactPage)
// app.get('/*', getNotFoundPage)

app.listen(PORT, 'localhost', () => console.log(`[SRV] server running on ${BASE_URL}:${PORT}`))