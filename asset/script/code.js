    let message_input = document.getElementById('input-message')

function sendMessage() {
    let message = message_input.value.toLowerCase()
    if (!message) return;
    
    message_input.value = ''


    addUserMessage(message)
}

function addUserMessage(message) {
    let date = new Date;
    const messages_container = document.getElementById('messages')

    const messageContainer = document.createElement('div')
    messageContainer.className = 'message ask'
    
    messageContainer.innerHTML = `
        <p>${message}</p>
        <p class="time">${date.getHours()}:${date.getMinutes()}</p>
    `;
    
    messages_container.appendChild(messageContainer);

    getResult(message)
}


function getResult(message) {
    let date = new Date;
    let result_message;

    const messages_container = document.getElementById('messages')

    const messageContainer = document.createElement('div')
    messageContainer.className = 'message result'
    

    if (message.includes('неполный') && message.includes('заказ')) {
        result_message = 'Обратитесь к менеджеру предприятия.'
    } 
    else if (message.includes('как') && message.includes('менеджер') && message.includes('поможет')) {
        result_message = 'Менеджер может заменить заказ, дособрать, перепроверить. Менеджер может помочь с трудоустройством. Менеджер поможет решить спорную ситуацию.'
    }
    else if (message.includes('врем') && message.includes('заказ')) {
        result_message = 'Заказ готовится до 15 минут, в зависимости от загруженности предприятия.'
    }
    else if (message.includes('заказ') && message.includes('больше')) {
        result_message = 'Проявите терпение скорее всего ваш заказ слишком большой или предприятие загружено.'
    }
    else if (message.includes('свои') && message.includes('материалы')) {
        result_message = 'Да, но для высокого качества лучше материалы партнеров.'
    }
    else if (message.includes('изменить') && message.includes('заказ')) {
        result_message = 'Да, заказ можно изменить, обратитесь к менеджеру предприятия.'
    }
    else if (message.includes('отменить') && message.includes('заказ')) {
        result_message = 'Да, заказ можно отменить в приложении.'
    }
    else if (message.includes('наш') && message.includes('волос')) {
        result_message = 'Обратитесь к менеджеру, вам поменяют заказ.'
    }
    else if (message.includes('вернуть') && message.includes('деньги')) {
        result_message = 'Да, если вы нашли волос вы сможете вернуть деньги.'
    }
    else if (message.includes('трудоустроится') && message.includes('сайт')) {
        result_message = 'Оставьте заявку, заполнив все поля, после чего с вами свяжется оператор.'
    }
    else if (message.includes('трудоустроится') && message.includes('друг')) {
        result_message = 'Нет, других способов трудоустройства нет.'
    }
    else if (message.includes('трудоустроится') && message.includes('менеджера')) {
        result_message = 'Заполните анкету, после чего вам назначат собеседование'
    }
    else if (message.includes('трудоустроится')) {
        result_message = 'Для трудоустройства воспользуйтесь сайтом или обратитесь к менеджеру.'
    }
    else {
        result_message = 'Я не могу ответить на данный вопрос, соединяю вас с оператором.'
    }


    messageContainer.innerHTML = `
        <p>${result_message}</p>
        <p class="time">${date.getHours()}:${date.getMinutes()}</p>
    `;
    
    messages_container.appendChild(messageContainer);

    scrollToBottom()
}

function scrollToBottom() {
    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}