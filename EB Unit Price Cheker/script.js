/*

first 50 units= rs 0.75/-
next 100 units= rs 1.00/-
next 100 units= rs 1.30/-
above 250 units=rs 1.50/-
*/


function checkEB() {
    let Units = Number(document.getElementById("inner").value)

if (Units<=50){
  price50=Units*0.75

  document.getElementById('result').innerText = "Your EB Charges is : Rs  " + price50 + " /- "    } 

else if(Units>=51 && Units<=150){

let price1=Units-50;
price150=price1+37.5;

document.getElementById('result').innerText = "Your EB Charges is : Rs  " + price150 + " /- " 

}
else if(Units>=151 && Units<=250){

  let price2=Units-50;
  let price3=price2-100;
  let cam1=price3*1.30;
  price250=100+37.5+cam1;
  document.getElementById('result').innerText = "Your EB Charges is : Rs  " + price250 + " /- " 


}

else if(Units>=251){
  let price4=Units-50;
  let price5=price4-100;
  let cam=price5-100
  let set1=100*1.30;
  let cam3=cam*1.50;
  price300=100+37.5+cam3+set1;

  document.getElementById('result').innerText = "Your EB Charges is : Rs  " + price300 + " /- " 
  
}

  }
