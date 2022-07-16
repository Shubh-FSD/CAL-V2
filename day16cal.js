


let screen =document.getElementById("screen");
buttons = document.querySelectorAll("button");
console.log(buttons);
let screenValue="";
for (item of buttons){
    item.addEventListener("keypress",calculator)
    item.addEventListener("click",calculator)
 
    function calculator(e) {
    if (e.type == "keypress") {
        e.preventDefault(); 
        console.log(e.key)
        
        var keynum = e.key

        var letters=/[a-zA-Z]/
        if(keynum=="Enter"){
            ans(keynum) 
        }
        else if(keynum.match(letters)){
            alert("Please put digits")
        }
        else{
            ans(keynum)
        }
    }else{
        var click1 = e.target.innerText
        ans(click1)
    }
}

   function ans(buttonText){

    console.log('Button text is',buttonText);
    if(buttonText =="X"){
        buttonText = "*";
        screenValue += buttonText;
        screen.value =screenValue;
    }
    else if (buttonText =="C"){
        screenValue = "";
        screen.value = screenValue;
    }
    else if (buttonText == "=" || buttonText == "Enter"){
        screen.value = eval(screenValue);
    }
    
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }

}
}





















