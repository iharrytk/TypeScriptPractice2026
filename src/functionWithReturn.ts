function launchBrowser(name:string):boolean{
    switch (name.toLowerCase().trim()) {
        case "chrome":
            console.log("launch chrome");
            return true;
        case "ff":
            console.log("launch ff");
            return true;
        default:
            console.log("plzz pass the right browser ");
            return false;
    }

}
let browserboolean=launchBrowser("chrome");
console.log(browserboolean);


console.log("====================================================");

function getsquareOfNumber(n:number):Promise<number>{

    console.log("the given number is:",n);
    return Promise.resolve(n*n);
}


getsquareOfNumber(10).then((res)=>console.log("square of the number is:",res));


console.log("====================================================");

//create a function that returns the Promise of type userdata Object

type userDataType={myname:string,age:number};
function getUserData():Promise<userDataType>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user=
            {
                myname:'naveen',
                age:30
            };
            resolve(user);
        },3000);
    });
}


getUserData().then((res)=>{console.log(res);});


console.log("====================================================");

//create a function that returns the Promise of type userdata Object

type adress={streetno:string,hno:number,zipcode:number,state:string,country:string};
function userAdresss():Promise<adress>{

    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            let userAdressDetails={
                streetno:'123 st bradshaw',
                hno:1234,
                zipcode:852145,
                state:'Kansas',
                country:'USA'
            }
            resolve(userAdressDetails);
        },3000);
    });
}
async function getuserAdress(){

   let printadress= await userAdresss();
   console.log(printadress);
}
getuserAdress();