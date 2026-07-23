class ElementError extends Error{
    constructor(message:string){

        super(message)
    }
}

class BrowserError extends Error{
    constructor(message:string){

        super(message)
    }
}

class FrameworkError extends Error{
    constructor(message:string){

        super(message)
    }
}




function launchBrowser(browserName:string){

    switch (browserName.toLowerCase().trim()) {
        case 'chrome':
            console.log('launch chrome');
            break;
        case 'ff':
            console.log('launch ff');
            break;
        case 'ie':
            console.log('launch ie');
            break;
        default:
            console.log("plz pass the right browser");
            throw new BrowserError("======INVALID BROWSER===========");
            
    }
}


let browser='eee';
launchBrowser(browser);