function show(id,message) {
    let error = document.getElementById(id);
    error.textContent =message;
}

function clear(id) {
    let error = document.getElementById(id);
    error.textContent = "";
}

function validate(event) {
    let isValid = true;
    let fname = document.getElementById("fname").value;
    let fnamepat = /^[A-Za-z]{2,20}$/;
    if (!fnamepat.test(fname)) {
        show("fname-error","first name invalid");
        isValid = false;
    } else {
        clear("fname-error");
    }

    let lname=document.getElementById("lname").value;
    let lnamepat=/^[A-Za-z]{2,20}$/
    if((!lnamepat.test(lname))&&lname===""){
        show("lname-error","last name invalid");
        isValid=false;
    }
    else{
        clear("lname-error");
    }

    let email=document.getElementById("email").value;
    let emailpat=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpat.test(email)){
        show("email-error","invalid email");
        isValid=false;

    }
    else{
        clear("email-error");
    }

    let mobile=document.getElementById("mobile").value;
    if(mobile.length!=10){
        show("mobile-error","invalid mobile number should contail 10 digits");
        isValid=false;

    }
    else{
        clear("mobile-error");
    }

    let male=document.getElementById("male").checked;
    let female=document.getElementById("female").checked;
    if(!male && !female){
        show("gender-error","select any one");
        isValid=false
    }
    else{
        clear("gender-error")
    }

    let address=document.getElementById("address").value;
    if(address===""){
        show("address-error","address should be entered")
        isValid=false
    }
    else{
        clear("address-error");
    }

    let password=document.getElementById("pass").value;
    let passpat= /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!passpat.test(password)){
        show("password-error","password must contain atleast one uppercase,digit,special characters and minimum of 8 characters")
        isValid=false
    }
    else{
        clear("password-error");
    }

    let confirmpass=document.getElementById("cpass").value;
    if(confirmpass!=password){
        show("cpassword-error","password not match");
        isValid=false;
    }
    else{
        clear("cpassword-error");
    }

if(isValid){
    alert("submitted successfully")
}

if(!isValid){
    event.preventDefault();
}

}

