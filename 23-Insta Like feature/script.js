var cont = document.querySelector("#container");
var love = document.querySelector("#love");
var like = document.querySelector("#like");

cont.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;
    like.classList.remove("ri-heart-3-line");
    like.classList.add("ri-heart-3-fill");
    like.style.color = "red";

    setTimeout(function(){
        love.style.opacity = 0;
    },1500);
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },3000);
})

like.addEventListener("click", function(){
    if(like.classList.contains("ri-heart-3-line")){
        like.classList.remove("ri-heart-3-line");
        like.classList.add("ri-heart-3-fill");
        like.style.color = "red";
    }
    else{
        like.classList.add("ri-heart-3-line");
        like.classList.remove("ri-heart-3-fill");
        like.style.color = "black";
    }
})