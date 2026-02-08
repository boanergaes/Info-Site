import http from 'node:http'
import fs from 'node:fs'

const PORT = 8080
const BASE_URL = 'http://localhost'

function readFile(path, encoding = 'utf-8') {
    return fs.readFileSync(path, encoding)
}

function injectCSS(html, css) {
    const add_idx = html.toLowerCase().indexOf('</body>')

    if (add_idx == -1) {
        return html + `<style>${css}</style>`
    }

    const first_half = html.slice(0, add_idx)
    const second_half = html.slice(add_idx)

    return first_half + `<style>${css}</style>` + second_half
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `${BASE_URL}:${PORT}`)
    const pathname = url.pathname

    res.statusCode = 200
    res.setHeader('content-type', 'text/html')

    let html
    let css = readFile('./style.css')

    try {
        if (pathname === '/') {
            html = readFile('./index.html')
            
        } else if (pathname === '/about') {
            html = readFile('./about.html')
        } else if (pathname === '/contact') {
            html = readFile('./contact.html')
        } else {
            res.statusCode = 404
            html = readFile('./404.html')
        }
    } catch (err) {
        console.error('ERROR: Routing error!', err)
    }

    const fullContent = injectCSS(html, css)

    res.end(fullContent)
})

server.listen(PORT, 'localhost', () => console.log(`[SRV] server running on ${BASE_URL}:${PORT}`))