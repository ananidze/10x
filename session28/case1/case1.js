function revealMessage() {
    const hiddenMessageElement = document.getElementById('hidden-message');
    const decodedMessageElement = document.getElementById('decoded-message');

    hiddenMessageElement.style.display = 'block';

    const encodedMessage = hiddenMessageElement.textContent;
    const decodedMessage = encodedMessage.split('').reverse().join('');

    decodedMessageElement.textContent = decodedMessage;
}