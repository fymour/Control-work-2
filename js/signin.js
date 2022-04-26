let signInName = document.getElementById('your_name')
let signInPass = document.getElementById('your_pass')
let data = JSON.parse(localStorage.getItem('users'))


function check() {
     if(data.some(item => item.username === signInName.value && item.password === signInPass.value)){
        window.open("index.html", "_self")
    }else{
        signInName.style.borderBottom = "1px solid red"
        signInPass.style.borderBottom = "1px solid red"
    }
}