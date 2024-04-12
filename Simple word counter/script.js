function checker() {
    let input=String(document.getElementById("textarea").value);

    let input1 = input.replace(/\s+/g, " ").trim();
    let output=input1.split(" ");
    let out1=output.length;

if(output[0]==""){
    out1=0;
}
    let result=document.getElementById("result");
    result.innerHTML=out1 +  "  words"
} 