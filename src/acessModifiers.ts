class User{
    public testing():void{

    }
    protected coding():void{

    }
    private management():void{
        //Private methods are accessible only within the class

    }
}

class SDET extends User{

public working():void{

    this.testing();//public methods are accessible anywhere 
    this.coding();//protected methods are accessible within the sub class and within the class it was declared
    this.working();

    let sdet:SDET=new SDET();

    sdet.coding();
    sdet.testing();
    sdet.working();

}
}

//outside of class
let u:User=new User();
u.testing();//Outside of class only public methopds are accessible


//outside of SDET class:
let sd:SDET=new SDET();
sd.testing();//Only public methods can accessed outside the class
sd.working();//Only pubblic methods can be accessed outside the class.
