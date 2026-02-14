import { injectCSS, readFile } from "./utils.js"

const PAGES = '/home/zeamanuel/Projects/backend/express/Info-Site-Express/src/pages'  //  ./pages/index.html
const css = readFile(`${PAGES}/style.css`)

function sendPage(req, res, path) {
    res.status = 200
    const html = readFile(`${PAGES}${path}`)
    const page = injectCSS(html, css)
    res.end(page)
}

export function getHomePage(req, res) {
    sendPage(req, res, '/index.html')
}

export function getAboutPage(req, res) {
    sendPage(req, res, '/about.html')
}

export function getContactPage(req, res) {
    sendPage(req, res, '/contact.html')
}

export function getNotFoundPage(req, res) {
    sendPage(req, res, '/404.html')
}