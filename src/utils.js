import fs from 'node:fs'

export function readFile(path, encoding = 'utf-8') {
    try {
        return fs.readFileSync(path, encoding)
    } catch(err) {
        console.log(`Error reading from file ${path} with encoding ${encoding}:\n`, err)
        throw err
    }
}

export function injectCSS(html, css) {
    const add_idx = html.toLowerCase().indexOf('</body>')

    if (add_idx == -1) {
        return html + `<style>${css}</style>`
    }

    const first_half = html.slice(0, add_idx)
    const second_half = html.slice(add_idx)

    return first_half + `<style>${css}</style>` + second_half
}
