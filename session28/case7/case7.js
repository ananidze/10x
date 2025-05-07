const lockPanel = document.getElementById('lock-panel');
const lockButtons = document.querySelectorAll('.lock-button');
const lockStatus = document.getElementById('lock-status');
const correctSequence = ['1', '2', '3'];
let enteredSequence = [];

lockButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = button.dataset.id;
        button.classList.add('active');
        enteredSequence.push(buttonId);
        lockStatus.textContent = 'Code: ' + enteredSequence.join('-');

        if (enteredSequence.length === correctSequence.length) {
            checkSequence();
        }
    });
});

function checkSequence() {
    let isCorrect = true;
    for (let i = 0; i < correctSequence.length; i++) {
        if (enteredSequence[i] !== correctSequence[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        lockStatus.textContent = 'Success! System Unlocked.';
        lockPanel.innerHTML = '<h1>Access Granted</h1>';
    } else {
        lockStatus.textContent = 'Incorrect Code. Resetting...';
        lockPanel.classList.add('error-animation');
        setTimeout(() => {
            resetLock();
            lockPanel.classList.remove('error-animation');
        }, 500);
    }
}

function resetLock() {
    enteredSequence = [];
    lockButtons.forEach(button => {
        button.classList.remove('active');
    });
    lockStatus.textContent = 'Enter Code';
}