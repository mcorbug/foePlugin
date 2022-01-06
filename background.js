// background.js

let user_key;
let sid;

chrome.webRequest.onSendHeaders.addListener(function (details) {
        if(details.url.includes("forgeofempires.com/game/json")){
            user_key = details.url.substr(details.url.indexOf("h=") + 2)
            chrome.cookies.get({url: details.url, name: 'sid' },function (cookie) {
                if (cookie) {
                    sid = cookie.value
                } else {
                    sid = "unavailable"
                }
            });
        }
    },{
        urls: ['<all_urls>']
    }, [
        'requestHeaders'
    ]
);

//Get message from content script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request['method'] === "getValues"){
            sendResponse({
                "sid": sid,
                "userKey": user_key
            });
        }
    }
);