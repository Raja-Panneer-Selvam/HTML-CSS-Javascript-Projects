function cheker(){
let input=Number(document.getElementById("input").value);
let rate=0;

if (input<3)
    rate=5.8
else if(input>=3 && input<=6)
    rate=6.5
else if(input>=7 && input<=9)
    rate=6.8
else
    rate=7
let result=document.querySelector("#result")
result.innerHTML= rate +" %  is your Interest Rate."
}