const button = document.getElementById('botao')

button.addEventListener('click', (event) => {
event.preventDefault()
const email = document.getElementById('email')
const emailfield = document.getElementById('emailfield')

    if (email.value == ""){
        emailfield.classList.add('emailfail')
        email.value = ""
        email.placeholder = "Email inválido"
    }else if (email.value == email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1 )){
        emailfield.classList.add('emailfail')
        email.value = ""
        email.placeholder = "Email inválido"
    } else{emailfield.classList.remove('emailfail')
    email.value = ""
    alert("Email cadastrado com sucesso!")
    }

})

