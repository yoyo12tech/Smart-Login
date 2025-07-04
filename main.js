regName=document.getElementById("reg-name");
regEmail=document.getElementById("reg-email");
regPass=document.getElementById("reg-pass");
regBtn=document.getElementById("reg-btn")



success = document.getElementById("success");
error = document.getElementById("error");
successIcon = document.getElementById("success-icon");
errorIcon = document.getElementById("error-icon");
errorEmail = document.getElementById("error-email");
errorPass = document.getElementById("error-pass");


//Ternary expression
let stored = localStorage.getItem("users");
let users = stored ? JSON.parse(stored) : [];

//function email regex
function emailRegex(userEmail){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(userEmail)){ //returns true is it passes test else false
        return true; 
    }
    else{
        return false;
    }
}
//function pass regex
function passRegex(pass){
    const passRegex = /^.{6,25}$/
    if (passRegex.test(pass)) {
        return true;
    }
    else{
        return false;
    }
}
//function userExist
function userExists(email,password){
    for(let i = 0;i<users.length;i++){
        if(users[i].email.toLowerCase()==email.toLowerCase()){
            return users[i];
        }
    }
    return false;
}



regBtn.addEventListener("click", function() {
    error.style.display="none";
    success.style.display="none";

    errorIcon.style.display="none";
    successIcon.style.display="none";

    errorEmail.style.display="none";
    errorPass.style.display="none";

    errorEmail.textContent="Enter a valid Email!"


    if(regName.value.trim() == "" || regEmail.value.trim()=="" || regPass.value.trim()==""){
        error.style.display="block";
        errorIcon.style.display="block";
    }
    else if(!emailRegex(regEmail.value.trim())){
        errorEmail.style.display="block";
        errorIcon.style.display="block";
    }
    else if(!passRegex(regPass.value.trim())){
        errorPass.style.display="block";
        errorIcon.style.display="block";
    }
    else if(userExists(regEmail.value.trim())){
        errorEmail.textContent="User already exists!"
        errorEmail.style.display="block";
        errorIcon.style.display="block";



    }
    else{
        new_user={
            name:regName.value.toLowerCase(),
            email:regEmail.value.toLowerCase(),
            password:regPass.value.toLowerCase(),
        }
        users.push(new_user);
        localStorage.setItem("users",JSON.stringify(users));
        success.style.display="block";
        successIcon.style.display="block";
        setTimeout(()=>{
            window.location.href="login.html";
        },1500);


    }
})








