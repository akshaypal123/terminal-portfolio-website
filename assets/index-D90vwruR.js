var L=Object.defineProperty;var w=(a,n,r)=>n in a?L(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r;var l=(a,n,r)=>w(a,typeof n!="symbol"?n+"":n,r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class s{}l(s,"HELP",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Available commands:</span><br/> 
  <span style="color: #0f0">about</span> - Who am I?<br/> 
  <span style="color: #0f0">education</span> - Where have I studied?<br/>
  <span style="color: #0f0">skills</span> - What am I good at?<br/>
  <span style="color: #0f0">resume</span> - Opens a copy of my resume<br/>
  <span style="color: #0f0">email</span> - Lets chat!<br/>
  <span style="color: #0f0">gui</span> - Displays normal portfolio website<br/>
  <span style="color: #0f0">help</span> - This command!<br/> 
  <span style="color: #0f0">clear</span> - Clears the screen
  `),l(s,"ABOUT",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Who am I?:</span><br/>
  <div style="text-align: justify; text-align: inter-word">
  Akshay is an innovative and results-driven software engineer with expertise in Java, Python, and cloud technologies. 
  He hs a proven track record in developing critical infrastructure and driving continuous improvement in fast-paced environments. 
  Alongside this he is an excellent collaborator with a passion for problem-solving and learning new technologies.
  </div>
  `),l(s,"EDUCATION",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">Where have I studied?:</span><br/>
  MSc in Quantum Technology Applications and Management, Univerisity of Sussex, 2024 - present<br/>
  MEng in Engineering Science, University of Oxford, 2018 - 2022
  `),l(s,"SKILLS",`
  <span style="font-size: 18px; font-weight: bold; color: #cd5909">What am I good at?:</span><br/>
  <span style="font-weight: bold">Programming Languages:</span> Java, Python, JavaScript, TypeScript, C# <br/>
  <span style="font-weight: bold">Frameworks and Libraries:</span> React, Spring Boot <br/>
  <span style="font-weight: bold">Tools and Technologies:</span> Git, Linux, Kubernetes, Docker, Drone, Kafka, Jira, Confluence <br/>
  <span style="font-weight: bold">Databases:</span> PostgreSQL, Elastic, Amazon Athena <br/>
  <span style="font-weight: bold">Cloud Platforms:</span> AWS <br/>
  <span style="font-weight: bold">Development Methodologies:</span> TDD, Agile, Scrum <br/>
  `),l(s,"EMAIL",`
  Let's chat! You can email me at <a href=mailto:akshay.anu@gmail.com>akshay.anu@gmail.com</a>
  `),l(s,"RESUME_PATH","/../public/resume.pdf"),l(s,"GUI_WEBSITE_URL","https://bbc.com");document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("output"),n={help:p,about:u,education:f,skills:m,resume:h,email:y,gui:g,clear:b};function r(){const o=document.createElement("div");o.classList.add("input-line");const i=document.createElement("span");i.textContent="visitor@akshaypal:~$";const c=document.createElement("input");c.type="text",c.classList.add("input"),c.addEventListener("keypress",d),o.appendChild(i),o.appendChild(c),a.appendChild(o),c.focus()}function d(o){if(o.key==="Enter"){const i=o.target,c=i.value.trim().toLowerCase();t(c),i.setAttribute("readonly","true"),i.parentElement.classList.add("readonly-line"),r()}}function t(o){n[o]?n[o]():e(`Command not found: ${o}. Type 'help' for a list of commands`)}function e(o){const i=document.createElement("p");i.classList.add("output-line"),i.innerHTML=o,a.appendChild(i)}function p(){e(s.HELP)}function u(){e(s.ABOUT)}function f(){e(s.EDUCATION)}function m(){e(s.SKILLS)}function h(){window.open(s.RESUME_PATH,"_blank")}function y(){e(s.EMAIL)}function g(){e("I am still currently developing my GUI website! For now please learn more about my experiences on this page.")}function b(){a.innerHTML=""}r()});
