//we define 4 state:
//0 - start - everything is empty
//1 - the player press number after start or after "="
//2 - the player press operator after start or after number
//3 - the player press number after opperator

function setState(){
    let obj = {
        "num1": 0,
        "num2": 0,
        "display" : "",
        "operator": "",
        "state" : 0            
    }
    return obj;                
}

exports.calculateNextState = function(s, value) {
    console.log("curr state " + s)
    if(s == null){
        s = setState();
        console.log("s was null ")

    }
    else
    {
        //s = (s);
        console.log("s was state")
    }
    //define the input value type
    switch (value) {
        case "-":
        case "+":
        case "*":
        case "/":  
            console.log("setOperator");                 
            return (setOperator(s,value));                    
            break;
        case "=":
            console.log("calculate");
            return (calculate(s));
            break;
        default: //probably a number
            console.log("addNumber");
            return (addNumber(s,value));
            break;
    }              
}

function setOperator(s, val){   
    
    console.log("change operator")
    console.log(s);
    if(s.state ==3)// != 0 && s.state != 2)
    //    s.num1 = s.num2;
    //else
        s.num1 = operate(s)
    //else
    s.operator = val;    
    s.display = s.num1.toString();            
    s.state = 2; 
    checkForInfinityError(s)
    console.log(s);
    return s;   
}

function checkForInfinityError(s)
{
    if(s.num1 == Infinity){
        s.num1 = 0
        s.display = "ERROR" 
        s.state = 0
    }
    if(s.num1 == Infinity){
        s.num1 = 0
        s.display = "ERROR"
        s.state = 0 
    }
    return s;
}
function calculate(s){
    
    switch (s.state) {
        case 0:
        case 3:
            s.state = 0;
            break;
        case 1:
              
            s.state = 0;
            break;  
       
        case 2:  
            s.num2 = s.num1;
            s.state = 3;   
            break;  
    }    
    console.log("***");
    console.log(s);
    
    s.num1 = operate(s);
    s.display = s.num1.toString();
    checkForInfinityError(s)
    console.log(s);
    console.log("***");
    return s;                 
}

function operate(s){

    let n1 = parseInt(s.num1);
    let n2 = parseInt(s.num2);
    
    switch (s.operator) {
        case "-":
            n1 -= n2;
            break;
        case "+":
        n1 += n2;
            break;
        case "*":
        n1 *=  n2;
            break;
        case "/": 
        n1 /=  n2;
            break;      
    }
    return n1;
}
function addNumber(s, val)
{
    switch (s.state) {
        case 0:
            s.state = 1
            s.num1 = val;
            s.display = s.num1.toString();
            break;
        case 1:
            console.log("state 1")
            s.num1 = addValToNum(s.num1, val);
            s.display = s.num1.toString();
            console.dir(s)
            break;
        case 2:
            s.state = 3
            s.num2 = val;
            s.display = s.num2.toString();
            break;
        case 3:
            s.num2 = addValToNum(s.num2, val);
            s.display = s.num2.toString();
            break;    
    }  
    
    return s; 
}

function addValToNum(num, val)
{
    return parseInt(num) * 10 + parseInt(val);
}
