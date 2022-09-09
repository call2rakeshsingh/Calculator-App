const displayPara = document.getElementById("displayPara");

let calculationVar = [];
let calculationSignVar = "";
function forCal(control){
    
    if(control != "+" && control != "-" && control != "*" && control != "/" && control != "." && control != "=" && control != "(" && control != ")" && control != "%"){
        calculationSignVar += control;
        console.log("not +", control, control == "+");
        
    }

    else if(control == "+" || control == "-" || control == "*" || control == "/" || control == "." || control == "(" || control != ")" || control == "%"){
        calculationVar.push(calculationSignVar);    
        calculationVar.push(control);
        calculationSignVar = "";
    }

    else if(control == "="){
        calculationVar
    }

    else if(control == "AC"){

    }

    function showOnDisplay(){
        let inVar="";
        newVar = "";
        calculationVar.forEach(function(element){
            newVar += element;
            });
            if(control != "+" && control != "-" && control != "*" && control != "/" && control != "." && control != "=" && control != "(" && control != ")" && control != "%"){
            y = displayPara.innerText = newVar + calculationSignVar;
        } else if(control == "="){
            // calculationVar.forEach(function(element){                
            //     console.log(element+inVar);
            //     inVar += element
            //     });

                for (let index = 0; index < calculationVar.length-1; index++) {
                    
                    if(index % 2 == 0){
                    const element = calculationVar[index];
                    
                    inVar += Number.parseInt(element);
                    displayPara.innerText = inVar;
                    console.log(typeof inVar);
               
                    }
                    else if(index % 2 == 1){
                        const element = calculationVar[index];
                        inVar += element;
                        console.log(inVar,"inside else");
                        
                    }

                    
                }


        }
            else{
            x = displayPara.innerText = newVar;
        }
    }

    showOnDisplay();
    
}




