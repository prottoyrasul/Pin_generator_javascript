function newPin(){
    const pin = Math.round((Math.random()*10000));
    const pinString = pin + "";
    if(pinString.length ===4){
        return pin;
    }else{
        console.log("3 digit pin generated");
        return newPin();
    }
}

document.querySelector(".generate-btn").addEventListener('click',function(){
    let pin = newPin();
    console.log(pin);
    let generatePinInput = document.querySelector(".generatedPin")
    generatePinInput.value =pin;
    generatePinInput.style.textAlign = "center";
})


document.querySelector(".calc-body").addEventListener('click',function(e){
    let number = e.target.innerText;
    let showValue = document.querySelector(".showValue");
    if(isNaN(number)){
        if(number == "C"){
            showValue.value = "";

        }
    }else{
        showValue.value += number;
    }
})




document.querySelector(".wrong-pin").style.display ="none";
document.querySelector(".correct-pin").style.display ="none";

function verification(){
    let pin = document.querySelector(".generatedPin");
    let showValue = document.querySelector(".showValue");
    if(pin.value == showValue.value){
        document.querySelector('.correct-pin').style.display ="block";
        document.querySelector(".wrong-pin").style.display ="none";
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector(".submit-btn").style.backgroundColor = "green";


    }else{
        document.querySelector('.wrong-pin').style.display ="block";
        document.querySelector(".correct-pin").style.display ="none";

        const tryLeft = document.getElementById("tryLeft").innerText;
        let newTry = parseInt(tryLeft);

        if(newTry>0){
            newTry -=1;

}
        document.getElementById("tryLeft").innerText = newTry;

        if( newTry === 0){
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector(".submit-btn").style.backgroundColor = "red";

}

    }
    pin.value="";
    showValue.value="";
    
    

}
document.querySelector('.submit-btn').addEventListener("click",verification);



