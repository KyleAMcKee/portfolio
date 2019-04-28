const renderSkill = (skill) => {
    return `<div class="grid-box">
                <div class="img-container">
                    <img src="public/${skill}.png">
                </div>
                <div class="skill-name">
                    <p>${skill}</p>
                </div>
            </div>`
}

const devOps = () => {
    let devOps = ['Github', 'Git', 'Webpack', 'Vim'];
    return `<div class=skill-wrapper>
                <div class="title">
                    <h2>Dev Ops</h2>
                </div>
                <div class=grid-wrapper>
                    ${devOps.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}

const web = () => {
    let web = ['HTML5', 'CSS3', 'NodeJS', 'React'];
    return `<div class=skill-wrapper>
                <h2 class="title">Web</h2>
                <div class=grid-wrapper>
                    ${web.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}

const languages = () => {
    let languages = ['C', 'C++', 'Python', 'Javascript'];
    return `<div class=skill-wrapper>
                <div class="title">
                    <h2>Languages</h2>
                </div>
                <div class="clickMe">
                    <h3 class="do">+</h3>
                </div>
                <div class=grid-wrapper id="languages">
                    ${languages.map(language => renderSkill(language)).join('')}
                </div>
            </div>`
}

const database = () => {
    let database = ['PostgreSQL', 'MongoDB', 'MySQL'];
    return `<div class=skill-wrapper>
                <h2 class="title">Database</h2>
                <div class=grid-wrapper>
                    ${database.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}