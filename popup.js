// popup.js

import {config} from "./config.js";

const botButton = document.getElementById("bot") ;
const monitorButton = document.getElementById("monitor");

const userKeyInput = document.getElementById("userKey")
const sidInput = document.getElementById("sid")

botButton.addEventListener('click', function (){
    download('bot.bat',
        '@echo off\n' +
        'cd "'+ config.path.bot + '"\n' +
        '"' + config.path.python +'\\python" main.py --userKey ' + userKeyInput.value + " --sid " + sidInput.value + "\n" +
        "pause"
    );
});

monitorButton.addEventListener('click', function (){
    download('monitor.bat',
        '@echo off\n' +
        'cd "'+ config.path.bot + '"\n' +
        '"' + config.path.python +'\\python" monitor.py'
    );
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

window.onload = function() {
    chrome.runtime.sendMessage({ method: "getValues" }, function(response) {
        if(typeof(response['userKey']) !== "undefined" && typeof(response['userKey']) !== "undefined") {
            userKeyInput.value =  response['userKey']
            sid.value =  response['sid']
            // chrome.action.setBadgeText({text: "1"}).then(r => console.log(r));
        } else {
            // chrome.action.setBadgeText({text: ""}).then(r => console.log(r));
        }

    });
}
