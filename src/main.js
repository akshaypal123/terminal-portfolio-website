"use strict";
class Constants {
}
Object.defineProperty(Constants, "HELP", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Available commands:</span><br/> 
  <span style="color: #0f0">about</span> - Who am I?<br/> 
  <span style="color: #0f0">education</span> - Where have I studied?<br/>
  <span style="color: #0f0">skills</span> - What am I good at?<br/>
  <span style="color: #0f0">resume</span> - Opens a copy of my resume<br/>
  <span style="color: #0f0">email</span> - Lets chat!<br/>
  <span style="color: #0f0">gui</span> - Displays normal portfolio website<br/>
  <span style="color: #0f0">help</span> - This command!<br/> 
  <span style="color: #0f0">clear</span> - Clears the screen
  `
});
Object.defineProperty(Constants, "ABOUT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Who am I?:</span><br/>
  <div style="text-align: justify; text-align: inter-word">
  Akshay is an innovative and results-driven software engineer with expertise in Java, Python, and cloud technologies. 
  He hs a proven track record in developing critical infrastructure and driving continuous improvement in fast-paced environments. 
  Alongside this he is an excellent collaborator with a passion for problem-solving and learning new technologies.
  </div>
  `
});
Object.defineProperty(Constants, "EDUCATION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Where have I studied?:</span><br/>
  MSc in Quantum Technology Applications and Management, Univerisity of Sussex, 2024 - present<br/>
  MEng in Engineering Science, University of Oxford, 2018 - 2022
  `
});
Object.defineProperty(Constants, "SKILLS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">What am I good at?:</span><br/>
  <span style="font-weight: bold">Programming Languages:</span> Java, Python, JavaScript, TypeScript, C# <br/>
  <span style="font-weight: bold">Frameworks and Libraries:</span> React, Spring Boot <br/>
  <span style="font-weight: bold">Tools and Technologies:</span> Git, Linux, Kubernetes, Docker, Drone, Kafka, Jira, Confluence <br/>
  <span style="font-weight: bold">Databases:</span> PostgreSQL, Elastic, Amazon Athena <br/>
  <span style="font-weight: bold">Cloud Platforms:</span> AWS <br/>
  <span style="font-weight: bold">Development Methodologies:</span> TDD, Agile, Scrum <br/>
  `
});
Object.defineProperty(Constants, "EMAIL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
  Let's chat! You can email me at <a href=mailto:akshay.anu@gmail.com>akshay.anu@gmail.com</a>
  `
});
Object.defineProperty(Constants, "RESUME_PATH", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'https://1drv.ms/b/s!AiISxQfw7jnKgeIszW13hdU66LKDnw'
});
Object.defineProperty(Constants, "GUI_WEBSITE_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'https://bbc.com'
});
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const commands = {
        help: showHelp,
        about: showAbout,
        education: showEducation,
        skills: showSkills,
        resume: showResume,
        email: showEmail,
        gui: showGUI,
        clear: clearScreen
    };
    function createInputLine() {
        const inputLine = document.createElement('div');
        inputLine.classList.add('input-line');
        const prompt = document.createElement('span');
        prompt.textContent = 'visitor@akshaypal:~$';
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input');
        input.addEventListener('keypress', handleKeyPress);
        inputLine.appendChild(prompt);
        inputLine.appendChild(input);
        output.appendChild(inputLine);
        input.focus();
    }
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            const input = event.target;
            const command = input.value.trim().toLowerCase();
            handleCommand(command);
            input.setAttribute('readonly', 'true'); // Make the input readonly after submitting
            input.parentElement.classList.add('readonly-line'); // Add a class to the input line
            createInputLine();
        }
    }
    function handleCommand(command) {
        if (commands[command]) {
            commands[command]();
        }
        else {
            printOutput(`Command not found: ${command}. Type 'help' for a list of commands`);
        }
    }
    function printOutput(text) {
        const p = document.createElement('p');
        p.classList.add('output-line');
        p.innerHTML = text;
        output.appendChild(p);
    }
    function showHelp() {
        printOutput(Constants.HELP);
    }
    function showAbout() {
        printOutput(Constants.ABOUT);
    }
    function showEducation() {
        printOutput(Constants.EDUCATION);
    }
    function showSkills() {
        printOutput(Constants.SKILLS);
    }
    function showResume() {
        window.open(Constants.RESUME_PATH, '_blank');
    }
    function showEmail() {
        printOutput(Constants.EMAIL);
    }
    function showGUI() {
        printOutput("I am still currently developing my GUI website! For now please learn more about my experiences on this page.");
        // window.open(Constants.GUI_WEBSITE_URL, '_blank');
    }
    function clearScreen() {
        output.innerHTML = '';
    }
    // Initialize the first input line
    createInputLine();
});
