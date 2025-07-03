user = JSON.parse(localStorage.getItem("loggedInUser"));

if(user){
    document.getElementById("welcome-span").innerHTML=user.name + " !";
}
else{
    window.location.href="index.html";
}

document.getElementById("log-out").addEventListener("click",function(){
    localStorage.removeItem("loggedInUser")
    window.location.href="login.html";
})

