let signUpName = document.getElementById('user_name')
let signUpEmail = document.getElementById('email')
let signUpPass = document.getElementById('your_pass')
let signUpRePass = document.getElementById('re_pass')
let state = []
window.addEventListener('load' , ()=>{
    if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(state))
        window.location.reload()
    }
})

function submit() {
    let checkName = document.getElementById('user_name');
    let checkPass = document.getElementById('your_pass');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let confirmationPass = document.getElementById('re_pass')
    // let isExist = signUpName.find(user =>JSON.stringify(state) ===('user_name'))
    
    
    if (checkName.value.length == "") {
        alert('Please fill in username');
    }
    else if (checkPass.value.length == "") {
        alert('Please fill in password');

    } else if (checkName.value.length == "" && checkPass.value.length == "") {
        alert('Please fill in email and password');

    } else if (checkPass.value.length < 8) {
        alert('Min at least 8 symbols');

    } else if (!checkPass.value.match(numbers)) {
        alert('please add at least 1 number');

    } else if (!checkPass.value.match(upperCaseLetters)) {
        alert('please add at least 1 uppercase letter');

    } else if (!checkPass.value.match(lowerCaseLetters)) {
        alert('please add at least 1 lowercase letter');
    } else if(((confirmationPass.value!='')&&(checkPass.value != confirmationPass.value))){
        alert('Password doesnt match')
    }
     else {
        let getted = JSON.parse(localStorage.getItem('users'))
        getted.push({
            username: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value
        })
        console.log(getted)
        localStorage.setItem('users', JSON.stringify(getted))
        alert('Your account has been created')
    }
}
