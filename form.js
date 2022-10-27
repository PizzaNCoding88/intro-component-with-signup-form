const fName = document.getElementById("fname");
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const submit = document.getElementById("submit");
const fNameError = docume.getElementById("fNameError");

form.addEventListener('submit', (e) => {
    let messageArr = [];
    if(fName.value === '' || fName.value == null){
        messageArr.push(1);
    }
    if(messageArr.length > 0){
        e.preventDefault();
        
    }
})

