const header = () => {
    return `<header>Top</header>`
}

const footer = () => {
    return `<footer>This is at the bottom</footer>`
}

const mainPage = () => {
    return `<h1>This is a site</h1>`
}

const renderPage = () => {
    return `<div class=page>
                ${header()}
                ${mainPage()}
                ${footer()}
            </div>`

}

document.querySelector('body').innerHTML = renderPage();