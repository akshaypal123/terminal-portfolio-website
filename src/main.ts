abstract class Constants {
  static readonly HELP:string =
  `
  <span style="font-weight: bold">Available commands:</span><br> 
  <span style="color: #0f0">about</span> - Who am I?<br> 
  <span style="color: #0f0">education</span> - My education<br>
  <span style="color: #0f0">skills</span> - My skills<br>
  <span style="color: #0f0">resume</span> - A copy of my resume<br>
  <span style="color: #0f0">email</span> - Lets chat!<br>
  <span style="color: #0f0">gui</span> - Displays normal portfolio website<br>
  <span style="color: #0f0">help</span> - This command!<br> 
  <span style="color: #0f0">clear</span> - Clears the screen
  `
  static readonly ABOUT:string = 
  `
  Akshay is an innovative and results-driven software engineer with expertise in Java, Python, and cloud technologies. 
  He hs a proven track record in developing critical infrastructure and driving continuous improvement in fast-paced environments. 
  Alongside this he is an excellent collaborator with a passion for problem-solving and learning new technologies.
  `
  static readonly EDUCATION:string = 
  `
  MSc in Quantum Technology Applications and Management, Univerisity of Sussex, 2024 - present<br>
  MEng in Engineering Science, University of Oxford, 2018 - 2022
  `
  static readonly SKILLS:string = 
  `
  Programming Languages: Java, Python, JavaScript, TypeScript, C#
  Frameworks and Libraries: React, Spring Boot
  Tools and Technologies: Git, Linux, Kubernetes, Docker, Drone, Kafka, Jira, Confluence
  Databases: PostgreSQL, Elastic, Amazon Athena
  Cloud Platforms: AWS
  Development Methodologies: TDD, Agile, Scrum
  `
  static readonly RESUME_PATH:string = '../resume.pdf';
  static readonly GUI_WEBSITE_URL:string = 'https://bbc.com';
}

interface Commands {
  [key: string]: () => void;
}

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output') as HTMLDivElement;

  const commands: Commands = {
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

  function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Enter') {
          const input = event.target as HTMLInputElement;
          const command = input.value.trim().toLowerCase();
          handleCommand(command);
          input.setAttribute('readonly', 'true'); // Make the input readonly after submitting
          (input.parentElement as HTMLDivElement).classList.add('readonly-line'); // Add a class to the input line

          createInputLine();
      }
  }

  function handleCommand(command: string) {
      if (commands[command]) {
          commands[command]();
      } else {
          printOutput(`Command not found: ${command}. Type 'help' for a list of commands`);
      }
  }

  function printOutput(text: string) {
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
      printOutput('This is the skills section.');
  }

  function showResume() {
      window.open(Constants.RESUME_PATH, '_blank');
  }

  function showEmail() {
      printOutput('Email me at: example@example.com');
  }

  function showGUI() {
      window.open(Constants.GUI_WEBSITE_URL, '_blank');
  }

  function clearScreen() {
      output.innerHTML = '';
  }

  // Initialize the first input line
  createInputLine();
});
