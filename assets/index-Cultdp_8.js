(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();class o{}Object.defineProperty(o,"HELP",{enumerable:!0,configurable:!0,writable:!0,value:`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Available commands:</span><br/> 
  <span style="color: #0f0">about</span> - Who am I?<br/> 
  <span style="color: #0f0">education</span> - Where have I studied?<br/>
  <span style="color: #0f0">skills</span> - What am I good at?<br/>
  <span style="color: #0f0">resume</span> - Opens a copy of my resume<br/>
  <span style="color: #0f0">email</span> - Lets chat!<br/>
  <span style="color: #0f0">gui</span> - Displays normal portfolio website<br/>
  <span style="color: #0f0">help</span> - This command!<br/> 
  <span style="color: #0f0">clear</span> - Clears the screen
  `});Object.defineProperty(o,"ABOUT",{enumerable:!0,configurable:!0,writable:!0,value:`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Who am I?:</span><br/>
  <div style="text-align: justify; text-align: inter-word">
  Akshay is an innovative and results-driven software engineer with expertise in Java, Python, and cloud technologies. 
  He hs a proven track record in developing critical infrastructure and driving continuous improvement in fast-paced environments. 
  Alongside this he is an excellent collaborator with a passion for problem-solving and learning new technologies.
  </div>
  `});Object.defineProperty(o,"EDUCATION",{enumerable:!0,configurable:!0,writable:!0,value:`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Where have I studied?:</span><br/>
  MSc in Quantum Technology Applications and Management, Univerisity of Sussex, 2024 - present<br/>
  MEng in Engineering Science, University of Oxford, 2018 - 2022
  `});Object.defineProperty(o,"SKILLS",{enumerable:!0,configurable:!0,writable:!0,value:`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">What am I good at?:</span><br/>
  <span style="font-weight: bold">Programming Languages:</span> Java, Python, JavaScript, TypeScript, C# <br/>
  <span style="font-weight: bold">Frameworks and Libraries:</span> React, Spring Boot <br/>
  <span style="font-weight: bold">Tools and Technologies:</span> Git, Linux, Kubernetes, Docker, Drone, Kafka, Jira, Confluence <br/>
  <span style="font-weight: bold">Databases:</span> PostgreSQL, Elastic, Amazon Athena <br/>
  <span style="font-weight: bold">Cloud Platforms:</span> AWS <br/>
  <span style="font-weight: bold">Development Methodologies:</span> TDD, Agile, Scrum <br/>
  `});Object.defineProperty(o,"EMAIL",{enumerable:!0,configurable:!0,writable:!0,value:`
  Let's chat! You can email me at <a href=mailto:akshay.anu@gmail.com>akshay.anu@gmail.com</a>
  `});Object.defineProperty(o,"RESUME_PATH",{enumerable:!0,configurable:!0,writable:!0,value:"https://akshaypal123.github.io/terminal-portfolio-website/public/resume.pdf"});Object.defineProperty(o,"GUI_WEBSITE_URL",{enumerable:!0,configurable:!0,writable:!0,value:"https://bbc.com"});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("output"),s={help:l,about:p,education:d,skills:f,resume:m,email:b,gui:h,clear:y};function c(){const n=document.createElement("div");n.classList.add("input-line");const r=document.createElement("span");r.textContent="visitor@akshaypal:~$";const a=document.createElement("input");a.type="text",a.classList.add("input"),a.addEventListener("keypress",u),n.appendChild(r),n.appendChild(a),i.appendChild(n),a.focus()}function u(n){if(n.key==="Enter"){const r=n.target,a=r.value.trim().toLowerCase();t(a),r.setAttribute("readonly","true"),r.parentElement.classList.add("readonly-line"),c()}}function t(n){s[n]?s[n]():e(`Command not found: ${n}. Type 'help' for a list of commands`)}function e(n){const r=document.createElement("p");r.classList.add("output-line"),r.innerHTML=n,i.appendChild(r)}function l(){e(o.HELP)}function p(){e(o.ABOUT)}function d(){e(o.EDUCATION)}function f(){e(o.SKILLS)}function m(){window.open(o.RESUME_PATH,"_blank")}function b(){e(o.EMAIL)}function h(){e("I am still currently developing my GUI website! For now please learn more about my experiences on this page.")}function y(){i.innerHTML=""}c()});
