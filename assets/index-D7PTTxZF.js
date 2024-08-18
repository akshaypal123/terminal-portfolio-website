var L=Object.defineProperty;var v=(s,o,r)=>o in s?L(s,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[o]=r;var l=(s,o,r)=>v(s,typeof o!="symbol"?o+"":o,r);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class n{}l(n,"HELP",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Available commands:</span><br/> 
  <span style="color: #0f0">about</span> - Who am I?<br/> 
  <span style="color: #0f0">education</span> - Where have I studied?<br/>
  <span style="color: #0f0">skills</span> - What am I good at?<br/>
  <span style="color: #0f0">projects</span> - What have I built?<br/>
  <span style="color: #0f0">resume</span> - Opens a copy of my resume<br/>
  <span style="color: #0f0">email</span> - Lets chat!<br/>
  <span style="color: #0f0">gui</span> - Displays normal portfolio website<br/>
  <span style="color: #0f0">help</span> - This command!<br/> 
  <span style="color: #0f0">clear</span> - Clears the screen
  `),l(n,"ABOUT",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Who am I?:</span><br/>
  <div style="text-align: justify; text-align: inter-word">
  Akshay is an innovative and results-driven software engineer with expertise in Java, Python, and cloud technologies. 
  He hs a proven track record in developing critical infrastructure and driving continuous improvement in fast-paced environments. 
  Alongside this he is an excellent collaborator with a passion for problem-solving and learning new technologies.
  </div>
  `),l(n,"EDUCATION",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Where have I studied?:</span><br/>
  MSc in Quantum Technology Applications and Management, Univerisity of Sussex, 2024 - present<br/>
  MEng in Engineering Science, University of Oxford, 2018 - 2022
  `),l(n,"SKILLS",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">What am I good at?:</span><br/>
  <span style="font-weight: bold">Programming Languages:</span> Java, Python, JavaScript, TypeScript, C# <br/>
  <span style="font-weight: bold">Frameworks and Libraries:</span> React, Spring Boot <br/>
  <span style="font-weight: bold">Tools and Technologies:</span> Git, Linux, Kubernetes, Docker, Drone, Kafka, Jira, Confluence <br/>
  <span style="font-weight: bold">Databases:</span> PostgreSQL, Elastic, Amazon Athena <br/>
  <span style="font-weight: bold">Cloud Platforms:</span> AWS <br/>
  <span style="font-weight: bold">Development Methodologies:</span> TDD, Agile, Scrum <br/>
  `),l(n,"PROJECTS",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">What have I built?:</span><br/>
  <br/>
  <span style="font-weight: bold">Bloch Sphere Visualisation:</span> I built an interactive visualisation of the Bloch sphere from quantum mechanics<br/>
  <span>View the webpage <a href=https://akshaypal123.github.io/react-bloch-sphere-visualisation/ target=_blank>here</a> and the GitHub repo <a href=https://github.com/akshaypal123/react-bloch-sphere-visualisation target=_blank>here</a><br/>
  <br/>
  <span style="font-weight: bold">Quantum Random Number Generator:</span> I built a quantum random number generator in Python using Google's Cirq library<br/>
  <span>View the GitHub repo <a href=https://github.com/akshaypal123/python-quantum-random-number-generator target=_blank>here</a>

  `),l(n,"EMAIL",`
  Let's chat! You can email me at <a href=mailto:akshay.anu@gmail.com>akshay.anu@gmail.com</a>
  `),l(n,"RESUME_PATH","./resume.pdf"),l(n,"GUI_WEBSITE_URL","https://akshaypal123.github.io/gui-portfolio-website/");document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("output"),o={help:p,about:d,education:h,skills:f,projects:m,resume:b,email:g,gui:y,clear:w};function r(){const a=document.createElement("div");a.classList.add("input-line");const i=document.createElement("span");i.textContent="visitor@akshaypal:~$";const c=document.createElement("input");c.type="text",c.classList.add("input"),c.addEventListener("keypress",u),a.appendChild(i),a.appendChild(c),s.appendChild(a),c.focus()}function u(a){if(a.key==="Enter"){const i=a.target,c=i.value.trim().toLowerCase();t(c),i.setAttribute("readonly","true"),i.parentElement.classList.add("readonly-line"),r()}}function t(a){o[a]?o[a]():e(`Command not found: ${a}. Type 'help' for a list of commands`)}function e(a){const i=document.createElement("p");i.classList.add("output-line"),i.innerHTML=a,s.appendChild(i)}function p(){e(n.HELP)}function d(){e(n.ABOUT)}function h(){e(n.EDUCATION)}function f(){e(n.SKILLS)}function m(){e(n.PROJECTS)}function b(){window.open(n.RESUME_PATH,"_blank")}function g(){e(n.EMAIL)}function y(){e("Redirecting you to gui portfolio website..."),window.open(n.GUI_WEBSITE_URL,"_blank")}function w(){s.innerHTML=""}r()});
