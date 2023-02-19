const showForm = (table) => {
    let answers     = table.answers
    let answersQtd  = Object.keys(answers).length

    let body                = document.getElementById('body') // <div>
    body.innerHTML          = ''
    let form                = document.createElement('form')
    // form.action         = 'POST'
    let questionTitle       = document.createElement('h1')
    questionTitle.innerHTML = table.tableTitle
    let select              = document.createElement('select')
    select.size             = 20

    select.addEventListener('change', ( ) => {
        nextButton.setAttribute('onclick', 'nextQuestion(' + select.value + ')')
    })

    body.append(form)
    form.append(questionTitle)
    form.append(select)

    for(i = 0; i < answersQtd; i++) {
        let option          = document.createElement('option')
        option.innerHTML    = answers[i].value
        // option.value = Math.floor(Date.now() * Math.random()).toString(36)
        option.value        = answers[i].id

        select.append(option)
    }

    let breakLine           = document.createElement('br')
    let nextButton          = document.createElement('input')
    nextButton.type         = 'button'
    nextButton.value        = "Next"
    nextButton.classList    = 'button'
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

    if(response == '113' || response == '111' || response == '108') {
        showResponse(response_1)
    }

    if(response == '112' || response == '110' || response == '109' || response == '107' || response == '106' || response == '105') {
        showResponse(response_2)
    }
}

const clientCodeRegistration = ( ) => {
    // e.preventDefault( )
    console.log('clientCodeRegistration')
}

const showResponse = (response) => {
    let body        = document.getElementById('body') // <div>
    body.innerHTML  = ''

    let form            = document.createElement('form')
    form.action         = 'POST'

    let responseTitle       = document.createElement('h1')
    responseTitle.innerHTML = response.value

    let responseContainer   = document.createElement('div')
    responseContainer.id    = 'response-card'

    let responseDescription        = document.createElement('p')
    responseDescription.innerHTML  = response.desc

    let responseType        = document.createElement('p')
    responseType.innerHTML  = 'Type of occurrence: ' + response.type
    // responseType.classList  = 'response-type-flag'

    let textArea            = document.createElement('textarea')
    textArea.placeholder    = "Enter comments about the issue request and resolution."

    let breakLine           = document.createElement('br')
    let sendButton          = document.createElement('input')
    sendButton.type         = 'button'
    sendButton.classList    = 'button'
    sendButton.value        = 'Finish'

    body.append(form)
    form.append(responseTitle)
    responseContainer.append(responseDescription)
    responseContainer.append(responseType)
    responseContainer.append(textArea)
    form.append(responseContainer)

    body.append(breakLine)
    form.append(sendButton)
}

const registerRequest = ( ) => {
    console.log('registerRequest')
    // Enviar client-code + select.value para o back-end.
    // Gravar no banco o request relacionado ao ID do usuário.
    // Cada solicitação poderá finalizar aberta ou fechada.
    // Caso seja aberta, outro setor fechará após dar a tratativa.
}

const breakTag = (parent) => {
    let breakLine = document.createElement('br')
    parent.append(breakLine)
}

document.addEventListener('DOMContentLoaded', ( ) => {
    document.getElementById('client-code').addEventListener('click', clientCodeRegistration)
})

// Cada form terá um ID, e de certo modo, não importa o que o programa fará nos meios, apenas o output registrado corretamente é importante.
