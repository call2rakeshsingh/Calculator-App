const displayPara = document.getElementById("displayPara");
const forEqual = document.getElementById("forEqual");

let calculationVar = 0;
function forCal(control){


    if(forEqual.checked == true && (control == "+" || control == "-" || control == "*" || control == "/" || control == "%")){
        forEqual.checked = false;
    }

    if(control == "=" && forEqual.checked == true){
        displayPara.innerText = eval(calculationVar);
        forEqual.checked = false;
    } 

    else if(control == "="){
        displayPara.innerText = eval(calculationVar);
    }
    else if(control == "AC"){
        calculationVar = 0;
        displayPara.innerText = calculationVar; 
        forEqual.checked = false;
    }
    else if(forEqual.checked == false){
        if(displayPara.innerText == 0){
            calculationVar = "";
            calculationVar += control;
            displayPara.innerText = calculationVar;   
        } else{
    calculationVar += control;
    displayPara.innerText = calculationVar;    
        }
}
}




