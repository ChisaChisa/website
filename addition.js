//console.log("chisa");
//var header=document.getElementById("page-header");
//console.log(header);
//console.log(number1)
var button = document.getElementById("printer");
function printNumber() {
    var PI=document.getElementById("PI");
    console.log(parseFloat(PI.value));
    var wc=document.getElementById("wc");
    console.log(parseFloat(wc.value));
    var LL=document.getElementById("LL");
    console.log(parseFloat(LL.value));
    var result=document.getElementById("result");
    //result.innerText="aaaa";

    if(parseFloat(PI.value) < 7){
        //console.log("PI is less than 7");
        result.innerText="SUSCEPTIBLE to liquefaction";
    }else{
        if(parseFloat(PI.value) >= 12){
        //console.log("PI is more or equal to 7");
        result.innerText="NOT susceptible to liquefaction";
        }else{
            if(parseFloat(wc.value)/parseFloat(LL.value) > 0.85){
                result.innerText="SUSCEPTIBLE to liquefaction";
            }else{
                result.innerText="NOT susceptible to liquefaction";
            }
        }
    }  
    
}