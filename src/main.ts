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
          printOutput(`Command not found: ${command}`);
      }
  }

  function printOutput(text: string) {
      const p = document.createElement('p');
      p.classList.add('output-line');
      p.textContent = text;
      output.appendChild(p);
  }

  function showHelp() {
      printOutput('Available commands: help, about, education, skills, resume, email, gui, clear');
  }

  function showAbout() {
      printOutput('This is the about section.');
  }

  function showEducation() {
      printOutput('This is the education section.');
  }

  function showSkills() {
      printOutput('This is the skills section.');
  }

  function showResume() {
      window.open('path/to/your-resume.pdf', '_blank'); // Replace with the actual path to your resume PDF
  }

  function showEmail() {
      printOutput('Email me at: example@example.com');
  }

  function showGUI() {
      window.location.href = 'https://yourguifolio.com'; // Replace with the actual URL of your GUI portfolio
  }

  function clearScreen() {
      output.innerHTML = '';
  }

  // Initialize the first input line
  createInputLine();
});
