const messageKeys = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor',
    
};

const responseKeys = {
    ROCK: 'paper',
    PAPER: 'scissor',
    SCISSOR: 'rock',
    DEFAULT: `Can't understand`,
    HELLO: 'Hi There',
    HOW_ARE_YOU: 'Good You?',
};

const appendUserMsg = (value) => {
    let userMsg = document.createElement('div');
    userMsg.classList.add('msg', 'user-msg')
    let p = document.createElement('p');
    p.innerHTML = value;
    msgArea.append(userMsg)
    userMsg.append(p);
    msgArea.scrollTop = msgArea.scrollHeight;
};

const appendBotMsg = (el) => {
    let botMsg = document.createElement('div');
    botMsg.classList.add('msg', 'bot-msg')
    let p = document.createElement('p');
    p.innerHTML = getResponse(el);
    botMsg.append(p);
    msgArea.appendChild(botMsg);
    msgArea.scrollTop = msgArea.scrollHeight;
    // console.log(p);    
};

const firstBotMsg = () => {
    let msg = 'Whats Up'
    msgArea.innerHTML = `
        <div class="msg bot-msg">
            <p>${msg}</p>
        </div>
    `;
}
firstBotMsg()

const hardResponses = {
    HELLO: 'hello',
    HOW_ARE_YOU: 'how are you',
}

const getResponse = (value) => {
    switch(value) {
        case messageKeys.ROCK:
            return responseKeys.ROCK;
            break;

        case messageKeys.PAPER:
            return responseKeys.PAPER;
            break;

        case messageKeys.SCISSOR:
            return responseKeys.SCISSOR;
            break;
        
        case hardResponses.HELLO:
            return responseKeys.HELLO;
            break;

        case hardResponses.HOW_ARE_YOU:
            return responseKeys.HOW_ARE_YOU;
            break;
            
        default:
            return responseKeys.DEFAULT;
            break;
    };
};