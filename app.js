const header = () => {
    return `<header>
                <div class="header-container">
                    <nav class="menu">
                        <h1 class="name">Kyle M<span>c</span>Kee</h1>
                        <ul>
                            <li id="home">Home</li>
                            <li id="projects">Projects</li>
                            <li id="skills">Skills</li>
                            <li id="resume">Resume</li>
                        </ul>
                    </nav>
                </div>
            </header>`
}

const footer = () => {
    return `<footer>
                <div class=footer-container>
                    <h2>&copy; 2019 Kyle McKee</h2>
                </div>
            </footer>`
}

const mainPage = () => {
    return `<div class="page-content">
                ${terminal()}
            </div>`
}

const skills = () => {
    return `<div class="skills">
                ${languages()}
                ${technologies()}
            </div>`
}

const projects = () => { 
    return `<div class="projects">
                ${renderProjects()}
            </div>`
}

const resume = () => {
    return `<div>
                <object data="public/Kyle_McKee_Resume.pdf" type="application/pdf" width="100%" height="800px">
                    <p>It appears you don't have a PDF plugin for this browser. You can use the download button instead</p>
                </object>
                <div class="button-container">
                    <a class="button" href="public/Kyle_McKee_Resume.pdf">Download</a>
                </div>    
            </div>`
}

const renderSelection = (selection) => {
    document.querySelector('.page-content').innerHTML = selection();
}

const setEventListeners = () => {
    document.querySelector('#home').addEventListener('click', () => renderSelection(terminal));
    document.querySelector('#projects').addEventListener('click', () => renderSelection(projects));
    document.querySelector('#skills').addEventListener('click', () => renderSelection(skills));
    document.querySelector('#resume').addEventListener('click', () => renderSelection(resume));
    document.querySelector('#terminal-input').addEventListener('keyup', updateTerminal);
}

const renderPage = () => {
    return `<div class=page>
                ${header()}
                ${mainPage()}
                ${footer()}
            </div>`

}

document.querySelector('body').innerHTML = renderPage();
setEventListeners();

//https://codepen.io/anon/pen/rbRNgm