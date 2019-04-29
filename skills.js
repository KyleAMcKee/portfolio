const renderSkill = (skill) => {
    return `<div class="grid-item">
                <div class="skill-container">
                    <div class="img-container">
                        <img src="public/${skill}.png">
                    </div>
                    <div class="skill-name">
                        <p>${skill}</p>
                    </div>
                </div>
            </div>`
}


const technologies = () => {
    let technologies = ['HTML5', 'CSS3', 'NodeJS', 'React', 'Github', 'Git', 'Webpack', 'Vim','PostgreSQL', 'MongoDB', 'MySQL', 'Postman', 'jQuery'];
    return `<div class=skill-wrapper>
                <h2 class="title">Technologies / Frameworks</h2>
                <div class=grid-wrapper id="technologies">
                    ${technologies.map(technology => renderSkill(technology)).join('')}
                </div>
            </div>`
}


const languages = () => {
    let languages = ['C', 'C++', 'Python', 'Javascript', 'PHP'];
    return `<div class=skill-wrapper>
                <h2 class="title">Languages</h2>
                <div class=grid-wrapper id="languages">
                    ${languages.map(language => renderSkill(language)).join('')}
                </div>
            </div>`
}