"use strict";

import { help, whois, projects, socials, anime } from './commands.js';

const $output = document.querySelector('#output');

function init() {
    document.querySelector("#inputField").addEventListener('keydown', checkInput)
}

function checkInput(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const cmd = e.target.value.trim();

        if (cmd){
            command(cmd);
            e.target.value = "";
        }
    }
}

function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            showOutput(help);
            break;
        case 'whois':
            showOutput(whois);
            break;
        case 'projects':
            showOutput(projects);
            break;
        case 'socials':
            showOutput(socials);
            break;
        case 'anime':
            showOutput(anime);
            break;
        case 'clear':
            clearTerminal();
            break;
        default:
            commandNotFound();
            break;
    }
}

function showOutput(content) {

    for (let i = 0; i < content.length; i++) {
        const el = content[i];
        $output.innerHTML += `<div>${el}</div>`;
    }
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