// background.js

chrome.webRequest.onCompleted.addListener(function(details) {
        if(details.url.includes("forgeofempires.com/game/json")){
            console.log("=>" + details.url)
        }
    },
    {urls: ["<all_urls>"]}
);

