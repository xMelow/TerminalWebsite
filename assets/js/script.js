"use strict";

import { help } from './commands.js'

function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            help;
            break;
        case 'whois':
            whois;
            break;
        case 'projects':
            projects;
            break;
        case 'socials':
            socials;
            break;
        case 'clear':
            //Clear the terminal
            break;
        default:
            //Error message
            break;
    }
}