class car{
    start(){

        console.log("car will start");
    }

     stop(){

        console.log("car will stop");
    }

     refuel(){

        console.log("car will refuel");
    }

}

class BMW extends car{

    override start()  {
        console.log("BMW will start");
    }

    autoparking(){

        console.log("BMW will autopark");
    }


}

let c:car=new BMW();
c.start();
c.stop();
c.refuel();



