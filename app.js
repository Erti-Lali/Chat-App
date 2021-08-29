const input = document.querySelector('.submit-input');
const msgArea = document.querySelector('.msg-box');
const modal = document.getElementById('modal');
const modalInput = document.querySelector('.modal-input');
const headerName = document.querySelector('.name');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    headerName.innerHTML = modalInput.value;
    if (headerName.innerHTML.length >=8) {        
        alert('too long');
        location.reload();        
    } else if (headerName.innerHTML.length <= 8 && modalInput.value.trim() !== '') {
        headerName.innerHTML = modalInput.value;
        modal.classList.add('d-none');      
    };    
});

input.addEventListener('keypress', el => {
    var inputValue = input.value;
    var keyCode = el.keyCode;

    if (keyCode == 13 && inputValue.trim() !== '') {
        appendUserMsg(inputValue);
        appendBotMsg(inputValue);
        input.value = '';
    }; 
});
