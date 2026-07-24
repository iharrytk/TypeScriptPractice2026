interface USMedico{
    physion():void;
    cardio():void;
    emergencyservices():void;
}


interface UKMedical{

    ent():void;
    oncology():void;
    emergencyservices():void;

}


interface IndianMedical{

    pediatrics():void;
    dental():void;
    emergencyservices():void;

}

class FortisHospital implements USMedico,UKMedical,IndianMedical{

    //Overridden methods from the interface.All methods should be implemented
    ent(): void {
        console.log("Fortis hospital-ENT ");
    }
    oncology(): void {
        console.log("Fortis hospital-oncology ");
    }
    pediatrics(): void {
        console.log("Fortis hospital-pediatrics ");
    }
    dental(): void {
        console.log("Fortis hospital-dental ");
    }
    physion(): void {
        console.log("Fortis hospital-physion ");
    }
    cardio(): void {
        console.log("Fortis hospital-cardio ");
    }


    //individual method of Forthisbhospital class

    gastro():void{

        console.log("fortis hospital-gastro");
    }


    emergencyservices():void{
        console.log("Fortis hospital-emergency services");
    }

}

let fh:FortisHospital=new FortisHospital();
fh.cardio();
fh.dental();
fh.emergencyservices();
fh.ent();
fh.gastro();
fh.oncology();
fh.pediatrics();
fh.physion();


//Top cAsting


// Top Casting:  Child class Object can be referred to by the Parent Interface reference variable.


// Individual Methods,Overridden methods and Parent Class methods can be accessed by the Parent Interface Reference variable.
 