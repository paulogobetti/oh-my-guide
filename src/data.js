// Os IDs precisam ser gerados e buscados dinâmicamente, de forma que, se o usuário excluír uma tabela, as outras não crasharão.
// Exibir alerta quando uma tabela ou resposta não for encontrada.

let initQuestion = {
    tableID: 1,
    tableTitle: 'Which department corresponds to the customer`s request?',
    answers: [
        {
            id: 101,
            value: 'Financial',
            type: 'answer'
        },
        {
            id: 102,
            value: 'Legal',
            type: 'answer'
        },
        {
            id: 103,
            value: 'Logistics',
            type: 'answer'
        },
        {
            id: 104,
            value: 'Technician',
            type: 'answer'
        }
    ],
    type: 'question'
}

let financialOptions = {
    tableID: 2,
    tableTitle: 'Fiancial',
    answers: [
        {
            id: 105,
            value: 'Error withdrawing money.',
            type: 'answer'
        },
        {
            id: 106,
            value: 'Reporting a fraud.',
            type: 'answer'
        },
        {
            id: 107,
            value: 'Does not recognize purchase.',
            type: 'answer'
        }
    ],
    type: 'question'
}

let legalOptions = {
    tableID: 3,
    tableTitle: 'Legal',
    answers: [
        {
            id: 109,
            value: 'Customer sued the company.',
            type: 'answer'
        },
        {
            id: 110,
            value: 'Customer was sued by the company.',
            type: 'answer'
        },
        {
            id: 111,
            value: 'Customer is threatening to sue the company.',
            type: 'answer'
        }
    ],
    type: 'question'
}

let logisticsOptions = {
    tableID: 4,
    tableTitle: 'Logistics',
    answers: [
        {
            id: 112,
            value: 'Customer has lost the card.',
            type: 'answer'
        },
        {
            id: 113,
            value: 'Customer wants to request a new copy of the card.',
            type: 'answer'
        }
    ],
    type: 'question'
}

let response_1 = {
    value: 'Bad luck for him!',
    desc: 'Let the customer know that this is all his problem, thanks!',
    type: 'Type: close',
    res: 'Entrou em reclamando mas viu que o problema era dele.',
    clientID: '$clientCode'
}

let response_2 = {
    value: 'The customer needs an open case!',
    type: 'open',
    res: 'Waiting for response from backoffice.',
    clientID: '$clientCode'
}
