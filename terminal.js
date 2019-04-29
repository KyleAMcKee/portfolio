
const ls = (file) => {
    return `<span class="file">${file}</span>`
}

const about = () => {
    return `<span>Originally from Iowa, I am a software engineer living in the Bay Area. I have experience in both frontend and backend, as well as low-level C programming and hardware. I have always been interested in learning and try to learn something new each day. You can check out my projects here or find me on github / Linkedin with the social.txt file. </span>`
}

const social = () => {
    return `<span class="social"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kyleamckee/">LinkedIn</a></span>
            <span class="social"><a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleAMcKee/">Github</a></span><br>
            <span>Results above are clickable</span>`
}

const help = () => {
    return `<span>The following commands are available:</span><br/> 
            <span class="help-text">ls</span> <span class="help-text">clear</span> <span class="help-text">cat</span><br/>`
}

const handleTab = (event) => {
    if (event.keyCode === 9 || event.which === 9) {
        console.log("auto complete");
    }
}

const updateTerminal = (event) => {
    let input = document.querySelector('#terminal-input');
    if (event.which === 13 || event.keyCode === 13) {
        let history = document.querySelector("#history")
        let files = ["about.txt", "social.txt"]
        let [command, argument] = input.value.split(' ');
        history.innerHTML += `<span class="history-item">root@kylemckee.io ${input.value}</span>`;
        if (!input.value) {return}
        if (command === "ls") {
            history.innerHTML += `<span class="history-item">${files.map(file => ls(file)).join('')}</span>`
        } else if (command === "cat") {
            if (argument === "about.txt") {
                history.innerHTML += about();
            } else if (argument === "social.txt") {
                history.innerHTML += social();
            } else {
                history.innerHTML += `${command}: ${argument}: No such file or directotry`;
            }
        } else if (command === "clear") {
            history.innerHTML = "";
        } else if (command === "help") {
            history.innerHTML += help();
        } else {
            history.innerHTML += `<span class="history-item">zsh: command not found: ${command}</span>`
        }
        input.value = "";
    }
}

const setDate = () => {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return datetime;
}


const terminal = () => {
    return `<div id="terminal-wrapper">
                <div id="terminal">
                    <div id="history"><span>Last login: ${setDate()}</span></div>
                    <div id="terminal-line">
                        <span id="terminal-user">root@kylemckee.io</span>
                        <input type="text" id="terminal-input" value="">
                    </div>
                </div>
                <div id="terminal-help">
                    <h2>Unfamiliar with the terminal? Use the navigation bar up top instead.</h2>
                    <h3>Type help for a list of commands. Autocomplete with <code>tab</code> and more features to be implemented later</h3>
                </div>
            </div>`
}