function userData(name:string,age?:number):void{
    console.log("hello "+name);
    console.log("the age you enetered is:"+age);
}



userData('haritha',33);
userData('xyx');


function launchBrowser(name:string,headless?:boolean):boolean{

if(headless){
    console.log("run testcases in headless mode");
    return true;
}
else{

    console.log("run testcases in normal mode in the browser:"+name);
    return true;
}


}


//Function Overloading:is basically different functions with same name and diff parameters.
//At the time of defining the function.

//design the prototype//defining the function
function combination(a:number,b:number):number;
function combination(a:string,b:number):string;


function combination(a:any,b:any):any{

    return a+b;
}

console.log(combination('a',2)); //a2
console.log(combination(2,2)); //4






