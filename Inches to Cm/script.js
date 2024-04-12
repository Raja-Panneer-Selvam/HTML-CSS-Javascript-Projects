
function convert(){
    let inches=Number(document.getElementById("input").value);
    let centi=inches*2.54;
    let answer=document.getElementById("ans");
    answer.innerHTML=centi + " Centimeter"
}