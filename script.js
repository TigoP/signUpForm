const inputFormulario = document.querySelector('form')
const btnAderir = document.querySelector('.btnAderir')
console.log(inputFormulario)

btnAderir.addEventListener("click", validarFormulario)

function validarFormulario(e) {
    e.preventDefault()

    const nome = document.querySelector('.campoNome').value
    const sobrenome = document.querySelector('.campoSobrenome').value
    const email = document.querySelector('.campoEmail').value
    const password = document.querySelector('.campoPassword').value

    if (nome == "" || sobrenome == "" || email == "" || password == "") {

        alert ("Todos os campos devem ser preenchidos")
        
        return
    }

    console.log(nome)
    console.log(sobrenome)
    console.log(email)
    console.log(password)
    console.log(e) 

    limpaInput()
}

function limpaInput() {

    document.querySelector('.campoNome').value = ""
    document.querySelector('.campoSobrenome').value = ""
    document.querySelector('.campoEmail').value = ""
    document.querySelector('.campoPassword').value = ""  

}

