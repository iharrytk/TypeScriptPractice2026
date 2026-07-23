//throw the error
function division(a:number,b:number):number{

    if(b===0){
        throw new Error("Cannot divide by 0");
    }
    return a/b;


}



let result=division(10,0);
console.log(result);


console.log("================================================");




function parsetheJSON(){

try{
    let result2=JSON.parse('{"myname":"tom"}');
    console.log(result2);
}
catch(error){
    console.log(error);

}
finally{

    console.log("close the db connection");
}
 console.log("all done");   


}

parsetheJSON();


console.log("=======================================================");


function m1():never{

    throw new Error('some error');
}

m1();

