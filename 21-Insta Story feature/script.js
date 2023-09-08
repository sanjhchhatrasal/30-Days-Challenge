var arr = [
    {dp: "https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
     story: "https://images.unsplash.com/photo-1693946334746-0966a3edf5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{dp: "https://images.unsplash.com/photo-1692893165861-e70b58e0aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
story: "https://images.unsplash.com/photo-1693915809293-fdf95bc9af34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{dp: "https://images.unsplash.com/photo-1693464081656-c5b1368960d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
story: "https://images.unsplash.com/photo-1692554383031-7a0ee175696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{dp: "https://plus.unsplash.com/premium_photo-1693163542195-79e2a8f72727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
story: "https://plus.unsplash.com/premium_photo-1690205361699-cb2b0e66383d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{dp: "https://images.unsplash.com/photo-1693163229998-cc2d83ad8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
story: "https://images.unsplash.com/photo-1605405400344-fbde1d54e9af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
}
];

var stories = document.querySelector("#stories");
var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div id="story"><img id="${idx}" src="${elem.dp}"></div>`;

})
stories.innerHTML = clutter;

stories.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
})
