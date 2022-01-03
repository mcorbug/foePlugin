// popup.js

const botButton = document.getElementById("bot") ;
const monitorButton = document.getElementById("monitor");

const userKeyInput = document.getElementById("userKey")
const sidInput = document.getElementById("sid")

botButton.addEventListener('click', function (){
    download('test.bat', userKeyInput + "\n" + sidInput );
});

monitorButton.addEventListener('click', function (){
    download('test.txt', 'Moinitor clicked');
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
        userKeyInput.value =  response['userKey']
        sidInput.value =  response['sid']
    });
}
