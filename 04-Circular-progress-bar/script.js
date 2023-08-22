let number = document.getElementById("number-1");
let counter = 0;

setInterval(() => {
    if(counter == 80){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
   
},30);
let number2 = document.getElementById("number-2");
let counter2 = 0;

setInterval(() => {
    if(counter2 == 70){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
   
},30);
let number3 = document.getElementById("number-3");
let counter3 = 0;

setInterval(() => {
    if(counter3 == 59){
        clearInterval();
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
   
},30);
