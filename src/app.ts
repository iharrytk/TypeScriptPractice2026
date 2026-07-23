let mynum:number=10;
console.log(mynum);//10

//nynum='givesoomestring then mynum will be in red line.Typescript is telling that mynumtype is number';


let myboolean:boolean=true;
myboolean=false;
console.log(myboolean);
console.log('========================================');

let mystring:string='haritha';
console.log(mystring);

console.log('========================================');
let user:null=null;
//or
user=null;
console.log('========================================');

let x:undefined=undefined;
//or
x=undefined;
console.log('========================================');

let distance: bigint = 50n;
console.log(distance);

console.log('========================================');

let testvalue:any;

testvalue=10;
testvalue='hello';
testvalue=true;
console.log(testvalue);//true:last stored value of the variable
console.log(typeof testvalue);//boolean

console.log('========================================');

let value:unknown;
value='hello';
console.log(value);//hello
console.log(typeof value);//string
console.log('========================================');

//void:no return from the function
function testing():void{
    console.log('hello world');
}
testing();//hello world

console.log('========================================');

function getStudentNAme(studentNAme:string):string{


   console.log('the student name is: '+studentNAme);
   return 'scored 100 on 100 ';
}

let marks:string=getStudentNAme('haritha');
console.log(marks);


console.log('========================================');


//never return type:a value which will never occur or will never happen...error,infinite loop

function throwElementError(locator:string):never{
    throw new Error(locator+' LOCATOR NOT FOUND');


}

//throwElementError('loginBtn');//output:
// Error: loginBtn LOCATOR NOT FOUND
//     at throwElementError (c:\Users\harit\OneDrive\Desktop\SDET\TypeScript2026Practice\src\app.ts:72:11)
//     at <anonymous> (c:\Users\harit\OneDrive\Desktop\SDET\TypeScript2026Practice\src\app.ts:77:1)

console.log('========================================');


function throwEnvironmentError(enterEnv:string):never{

    throw new Error(enterEnv+' NOT VALID ENV');
}

//throwEnvironmentError('UAT')
//Output:
// Error: UAT NOT VALID ENV
//     at throwEnvironmentError (c:\Users\harit\OneDrive\Desktop\SDET\TypeScript2026Practice\src\app.ts:87:11)
//     at <anonymous> (c:\Users\harit\OneDrive\Desktop\SDET\TypeScript2026Practice\src\app.ts:90:1)


console.log('========================================');

//union types
let id:string|number|boolean;//id can be string number or bpoolean
id='abcd';
id=10;
id=true;
console.log(id);//true:because it is the latest value
console.log(typeof id);//boolean


console.log('========================================');



//Arrays-dynamic in nature
let differentName:string[]=["harry potter","Hermione","Ron weasley"]
console.log(differentName);//[ 'harry potter', 'Hermione', 'Ron weasley' ]

let salaries:number[]=[10000000,2000000,15022222];
console.log(salaries);//[ 10000000, 2000000, 15022222 ]

let cast:Array<string|number>=["tom",100000,"Weasley"];
console.log(cast);//[ 'tom', 100000, 'Weasley' ]


console.log('========================================');



//tuple:fixed length array with specific types-static array
let nameAndSalary:[string,number]=["haritha",150000];
console.log(nameAndSalary);//[ 'haritha', 150000 ]


console.log('================================================');

//Objects in typescript

let newUser:{user:string,salary:number,isActive:boolean,city:string}
={
    user:'harry',
    salary:100000000,
    isActive:true,
    city:'USA'
}
console.log(newUser);//{ user: 'harry', salary: 100000000, isActive: true, city: 'USA' }

//or

type userType={user:string,salary:number,isActive:boolean,city:string}
let userdetails:userType={
    user:'harry',
    salary:100000000,
    isActive:true,
    city:'USA'
}
console.log(userdetails);//{ user: 'harry', salary: 100000000, isActive: true, city: 'USA' }