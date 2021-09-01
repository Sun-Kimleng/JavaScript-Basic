//Create Constructor
var Computer =function (comName, comLocation, comBudget){
    this.comName = comName;
    this.comLocation = comLocation;
    this.comBudget = comBudget;

    this.ComputerDetails = function(){
        console.log ("This is "+ comName +" from "+comLocation+" has "+comBudget+"M$ net worth\n")
    }
}



var Computer1 = new Computer('Asus', 'China', 1700);
var Computer2 = new Computer('Apple', 'United States', 3500);

Computer1.ComputerDetails();
Computer2.ComputerDetails();