logEmail=document.getElementById("log-email");
logPass=document.getElementById("log-pass");
logBtn=document.getElementById("log-btn");

success = document.getElementById("success");
error = document.getElementById("error");
successIcon = document.getElementById("success-icon");
errorIcon = document.getElementById("error-icon");

//Ternary expression
let stored = localStorage.getItem("users");
let users = stored ? JSON.parse(stored) : [];

//function userExist
function userExists(email,password){
    for(let i = 0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password ){
            return users[i];
        }
    }
    return false;
}

logBtn.addEventListener("click",function (){
    error.style.display="none";
    success.style.display="none";
    error.textContent="All inputs are required!"

    errorIcon.style.display="none";
    successIcon.style.display="none";

    user = userExists(logEmail.value.trim(),logPass.value.trim());

    if(logEmail.value.trim()=="" || logPass.value.trim()==""){
        errorIcon.style.display="block";
        error.style.display="block";
    }
    else if(!user){
        errorIcon.style.display="block";
        error.textContent="Email or Password does not exist!"
        error.style.display="block";
    }
    else{
        success.style.display="block";
        successIcon.style.display="block";
        localStorage.setItem("loggedInUser",JSON.stringify(user));
        setTimeout(()=>{
            window.location.href="home.html";
        },1500)

    }
})