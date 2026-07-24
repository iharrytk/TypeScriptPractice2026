abstract class Page {
    abstract title():void;
    abstract url():void;

    pageloading():void{
        console.log('page load in 20 sec');
    }


}


class LoginPage extends Page{
    //abstract method implementations
    title(): void {
        console.log("Login Page  implementated title method of Page");
    }
    url(): void {
        console.log("Login Page  implementated url method of Page");
    }

    //overriden method
    override pageloading():void{
        console.log('page load in 5 sec');
    }

    //indiviadual method 
    doLogin(username:string,password:string){
        console.log("do the login",username,password);
    }

    
}

let lp:LoginPage=new LoginPage();
lp.doLogin('harry','harry');
lp.pageloading();
lp.title();
lp.url();

