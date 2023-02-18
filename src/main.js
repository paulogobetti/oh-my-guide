// Buscar e mostrar em loop opções da nova tabela.

// Dado original virá do back-end, buscar por ID.
function showForm(table) {
    let answers = table.answers
    let answersQtd = Object.keys(answers).length

    let body = document.getElementById('body') // <div>
    body.innerHTML = ''
    let form = document.createElement('form')
    form.action = 'POST'
    let questionTitle = document.createElement('h1')
    let select = document.createElement('select')
    select.size = 20

    select.addEventListener('change', ( ) => {
        nextButton.setAttribute('onclick', 'nextQuestion(' + select.value + ')')
    })

    questionTitle.innerHTML = table.tableTitle

    body.append(form)
    form.append(questionTitle)
    form.append(select)

    for(i = 0; i < answersQtd; i++) {
        let option = document.createElement('option')
        option.innerHTML = answers[i].value
        // option.value = Math.floor(Date.now() * Math.random()).toString(36)
        option.value = answers[i].id
        option.classList = 'teste'
        select.append(option)
    }

    let breakLine = document.createElement('br')
    let nextButton = document.createElement('input')
    nextButton.type = 'button'
    nextButton.value = "Next"
    nextButton.id = 'button'
    nextButton.setAttribute('onclick', 'nextQuestion(' + select.value + ')')

    body.append(breakLine)
    form.append(nextButton)
}

showForm(initQuestion)

const nextQuestion = (response) => {
    if(response == '101') {
        showForm(financialOptions)
    }

    if(response == '102') {
        showForm(legalOptions)
    }

    if(response == '103') {
        showForm(logisticsOptions)
    }

    if(response == '113') {
        showResponse(response_1)
    }
}

const clientCodeRegistration = ( ) => {
    // e.preventDefault( )
    console.log('clientCodeRegistration')
}

const showResponse = (response) => {
    let body = document.getElementById('body') // <div>
    body.innerHTML = ''

    let responseTitle = document.createElement('h1')
    responseTitle.innerHTML = response.value

    let responseDesc = document.createElement('p')
    responseDesc.innerHTML = response.desc

    let responseType = document.createElement('p')
    responseType.innerHTML = response.type

    let textArea = document.createElement('textarea')

    let sendButton = document.createElement('input')
    sendButton.type = 'button'
    sendButton.classList = 'button'

    body.append(responseTitle)
    body.append(responseDesc)
    // breakLine()
    body.append(responseType)
    body.append(textArea)
    body.append(sendButton)
}

const registerRequest = ( ) => {
    console.log('registerRequest')
    // Enviar client-code + select.value para o back-end.
    // Gravar no banco o request relacionado ao ID do usuário.
    // Cada solicitação poderá finalizar aberta ou fechada.
    // Caso seja aberta, outro setor fechará após dar a tratativa.
}

const breakLine = ( ) => {
    let breakLine = document.createElement('br')
    body.append(breakLine)
}

document.addEventListener('DOMContentLoaded', ( ) => {
    document.getElementById('client-code').addEventListener('click', clientCodeRegistration)
})

// Cada form terá um ID, e de certo modo, não importa o que o programa fará nos meios, apenas o output registrado corretamente é importante.

// A aplicação será praticamente um loop básico que trará do banco de dados um formulário 0 startPoint e a partir daí, trazer o restante.
