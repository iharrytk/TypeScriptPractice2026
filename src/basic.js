"use strict";
let message = 'hello world';
console.log(message);
function launchBrowser(browserName) {
    return browserName.toLowerCase();
}
let browser = launchBrowser("CHROME");
console.log(browser);
