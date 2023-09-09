var stranger = document.querySelector("h5");
var btn = document.querySelector("#btn");

check = 0
btn.addEventListener("click", function(){
    if(check == 0){
        stranger.innerHTML = "Friends";
        stranger.style.color = "green";
        btn.innerHTML = "Unfollow";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#555";
        check = 1
    }else{
        stranger.innerHTML = "Stranger";
        stranger.style.color = "red";
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "#1450A3 ";
        btn.style.color = "#fff";
        check = 0
    }
});
