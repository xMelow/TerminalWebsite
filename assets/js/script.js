"use strict";

import { help, whois, projects, socials, anime, banner } from './commands.js';

const $output = document.querySelector('#output');

function init() {
    showbanner();
    document.querySelector("#input").addEventListener('keydown', checkInput);
}

function checkInput(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const cmd = e.target.value.trim();

        if (cmd){
            const commandElement = document.createElement("div");
            commandElement.innerHTML = `<h2>visitor@fs.terminal.com:~$ <span>${cmd}</span></h2>`;

            $output.appendChild(commandElement);

            e.target.value = "";
            command(cmd);
        }
    }
}

function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            showOutput(help, 10);
            break;
        case 'whois':
            showOutput(whois, 5);
            break;
        case 'projects':
            showOutput(projects, 10);
            break;
        case 'socials':
            showOutput(socials, 10);
            break;
        case 'anime':
            showOutput(anime, 7);
            break;
        case 'banner':
            showbanner();
            break;
        case 'clear':
            clearTerminal();
            break;
        default:
            commandNotFound();
            break;
    }
}

function showbanner() {
    const bannerHTML = banner.map(line => line).join("\n"); 
    $output.innerHTML += `<pre>${bannerHTML}</pre>`;
}

function showOutput(content, speed) {
    let i = 0;

    function nextLine() {
        if (i < content.length) {
            typeText(content[i], () => {
                i++;
                nextLine();
            }, speed);
        }
    }
    nextLine();
}

function typeText(txt, callback, speed = 15) {
    let i = 0;
    let result = "";
    const div = document.createElement("div");
    $output.appendChild(div);

    function typeChar() {
        if (i < txt.length) {
            result += txt.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else if (callback) {
            callback();
            $output.innerHTML += `<div>${result}</div>`;
        }
    }
    typeChar();
}

function clearTerminal() {
    $output.innerHTML = "";
}

function commandNotFound(){
    $output.innerHTML += `
        <br>
        <div>Command not found</div>
        <div>please try again</div>
        <br>
    `;
}

init();