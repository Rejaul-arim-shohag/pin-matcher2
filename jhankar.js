function getPin(){
    const random = Math.random()*10000;
    const pin = (random + "").split(".")[0];
    if(pin.length ==4){
        return pin;
    } else{
        console.log("pin", pin);
        return getPin()
    }
}

// display pin
function generatedPin(){
    const pinInput = document.getElementById("pin")
    pinInput.value = getPin()
};

const buttonContainer = document.getElementById("digit-conatiner");
            buttonContainer.addEventListener('click', function(event){
                const digit = event.target.innerText;
                if(isNaN(digit)){
                    //clear backspace
                    //one delete 
                } else{
                    const typedInput = document.getElementById("typed-pin");
                    typedInput.value = typedInput.value + digit;
                }
            })

            function verifyPin(){
                const pinInput = document.getElementById("pin").value;
                const typedInput = document.getElementById("typed-pin").value;
                if(pinInput===typedInput){
                    document.getElementById("correct-pin").style.display="block";
                    document.getElementById("incorrect-pin").style.display="none"
                } else{
                    document.getElementById("incorrect-pin").style.display="block";
                    document.getElementById("correct-pin").style.display="none";
                }
            }
        
                