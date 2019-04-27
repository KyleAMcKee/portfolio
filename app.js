const header = () => {
    return `<header>
                <nav class="menu">
                    <ul>
                        <li id="home">Home</li>
                        <li id="projects">Projects</li>
                        <li id="skills">Skills</li>
                        <li id="resume">Resume</li>
                    </ul>
                </nav>
            </header>`
}

const footer = () => {
    return `<footer>This is at the bottom</footer>`
}

const mainPage = () => {
    return `<div class=page-content>
                ${home()}
            </div>`
}

const renderSkill = (skill) => {
    return `<div class=grid-box>
                <div class=img-container>
                    <img src="public/${skill}.png">
                </div>
                <p>${skill}</p>
            </div>`
}

const devOps = () => {
    let devOps = ['Github', 'Git', 'Webpack', 'Vim'];
    return `<div class=skill-wrapper>
                <h2>Dev Ops</h2>
                <div class=grid-wrapper>
                    ${devOps.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}

const web = () => {
    let web = ['HTML5', 'CSS3', 'NodeJS', 'React'];
    return `<div class=skill-wrapper>
                <h2>Web</h2>
                <div class=grid-wrapper>
                    ${web.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}

const languages = () => {
    let languages = ['C', 'C++', 'Python', 'Javascript'];
    return `<div class=skill-wrapper>
                <h2>Languages</h2>
                <div class=grid-wrapper>
                    ${languages.map(language => renderSkill(language)).join('')}
                </div>
            </div>`
}

const database = () => {
    let database = ['PostgreSQL', 'MongoDB', 'MySQL'];
    return `<div class=skill-wrapper>
                <h2>Database</h2>
                <div class=grid-wrapper>
                    ${database.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}

const renderProjects = () => {
    
}

const home = () => {
    return `<div>
                <h2>You are Home</h2>
            </div>`
}

const skills = () => {
    return `<div class="skills">
                ${languages()}
                ${web()}
                ${database()}
                ${devOps()}
            </div>`
}

const projects = () => { 
    return `<div class="projects>
                ${renderProjects()}
            </div>`
}

const resume = () => {
    return `<div>
                <h2>Resume</h2>
            </div>`
}

const renderSelection = (selection) => {
    document.querySelector('.page-content').innerHTML = selection();
}

const setEventListeners = () => {
    document.querySelector('#home').addEventListener('click', () => renderSelection(home));
    document.querySelector('#projects').addEventListener('click', () => renderSelection(projects));
    document.querySelector('#skills').addEventListener('click', () => renderSelection(skills));
    document.querySelector('#resume').addEventListener('click', () => renderSelection(resume));
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