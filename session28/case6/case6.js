const draggables = document.querySelectorAll('.draggable');
const dropTargets = document.querySelectorAll('.drop-target');
const decodedTextElement = document.getElementById('decoded-text');
const correctOrder = ['item1', 'item2', 'item3'];
let draggedItem = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function(event) {
        draggedItem = event.target;
        setTimeout(() => {
            event.target.style.display = 'none';
        }, 0);
    });

    draggable.addEventListener('dragend', function(event) {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });
});

dropTargets.forEach(target => {
    target.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    target.addEventListener('dragenter', function(event) {
        event.preventDefault();
        target.style.backgroundColor = 'lightgray';
    });

    target.addEventListener('dragleave', function() {
        if (!target.firstChild) {
            target.style.backgroundColor = '';
        }
    });

    target.addEventListener('drop', function(event) {
        event.preventDefault();
        if (!target.firstChild) { 
            target.appendChild(draggedItem);
            draggedItem.style.position = 'static'; 
            checkOrder();
        } 
        if (target.dataset.expected === draggedItem.id) {
            target.style.backgroundColor = 'lightgreen';
        } else {
            target.style.backgroundColor = 'lightcoral';
        }
    });
});

function checkOrder() {
    let currentOrder = [];
    dropTargets.forEach(target => {
        if (target.firstChild) {
            currentOrder.push(target.firstChild.id);
        }
    });

    if (currentOrder.length === correctOrder.length) {
        let isCorrect = true;
        for (let i = 0; i < correctOrder.length; i++) {
            if (currentOrder[i] !== correctOrder[i]) {
                isCorrect = false;
                break;
            }
        }
        if (isCorrect) {
            decodedTextElement.textContent = 'Congratulations! Message Decoded: SECRET CODE REVEALED';
            dropTargets.forEach(target => target.classList.add('correct'));
        } else {
            decodedTextElement.textContent = 'Incorrect order. Try again.';
        }
    }
}