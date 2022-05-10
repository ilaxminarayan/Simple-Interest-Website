function answer(){
    let amount_input=parseInt(document.getElementById("amount").value);
    let rate_input=parseInt(document.getElementById("rate").value);
    let time_input=parseInt(document.getElementById("time").value);
    let interest = (amount_input*rate_input*time_input)/100;
    let total =interest+amount_input;

    document.getElementById("output-1").innerHTML=amount_input;
    document.getElementById("output-2").innerHTML=interest;
    document.getElementById("output-3").innerHTML=total;
}
