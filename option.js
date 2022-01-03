//options.js

import {config} from "./config.js";

window.onload = function() {
    // General Settings
    document.getElementById('PythonFolder').value = config.path.python;
    document.getElementById('BotFolder').value = config.path.bot;
    // Game Settings
    document.getElementById('Server').value = config.game.server;
    document.getElementById('version').value = config.game.version;
    document.getElementById('secret').value = config.game.secret;
    // General Settings
    document.getElementById('MinInt').value = config.settings.update.min;
    document.getElementById('MaxInt').value = config.settings.update.max;
    // Polivate
    if(config.settings.polivate.friends){ document.getElementById('friends').checked = true; }
    if(config.settings.polivate.guild){ document.getElementById('guild').checked = true; }
    if(config.settings.polivate.neighbours){ document.getElementById('neighbours').checked = true; }
    // resources
    if(config.settings.resources.coins){ document.getElementById('coins').checked = true; }
    if(config.settings.resources.supplies){ document.getElementById('supplies').checked = true; }
    if(config.settings.resources.random){ document.getElementById('random').checked = true; }
    if(config.settings.resources.goods){ document.getElementById('goods').checked = true; }
    // tavern
    if(config.settings.tavern.sit){ document.getElementById('sit').checked = true; }
    if(config.settings.tavern.collect){ document.getElementById('collect').checked = true; }
    document.getElementById('threshold').value = config.settings.tavern.threshold;
};