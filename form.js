//INPUT SELECTORS
const fName = document.querySelector(".fname");
const lName = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('#password');
const form = document.getElementById('form');
//ERRORS SELECTORS
const fNameError = document.querySelector(".fNameError");
const lNameError = document.querySelector(".lNameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

form.addEventListener('submit', (e) => {
    let nameArr = [];
    if(fName.value === '' || fName.value == null){
        nameArr.push(1);
    }
    if(nameArr.length > 0){
        e.preventDefault();
        fNameError.classList.toggle("hidden");
        fName.style.borderColor = "red";
    }

    let lnameArr=[];
    if(lName.value === '' || lName.value == null){
        lnameArr.push(1);
    }
    if(lnameArr.length > 0){
        e.preventDefault();
        lNameError.classList.toggle("hidden");
        lName.style.borderColor = "red";
    }

    let emailArr = [];
    if(email.value === '' || email.value == null){
        emailArr.push(1);
    }
    if(emailArr.length > 0){
        e.preventDefault();
        emailError.classList.toggle("hidden");
        email.style.borderColor = "red";
    }

    let passwArr = [];
    if(password.value === '' || password.value == null){
        passwArr.push(1);
    }
    if (passwArr.length > 0){
        e.preventDefault();
        passwordError.classList.toggle("hidden");
        password.style.borderColor = "red";
    }

})