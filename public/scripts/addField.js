//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar os campos, que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pergar os campo, que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function (field) {
        //pegar o field do momemento e limpa ele
        field.value = ""
    })

    //colocar na pagina: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

