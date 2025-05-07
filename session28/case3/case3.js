const suspects = document.getElementsByTagName('suspect');
const evidence = 'blue-scarf';

for (let i = 0; i < suspects.length; i++) {
    const suspect = suspects[i];
    const clue = suspect.getAttribute('data-clue');

    if (clue === evidence) {
        suspect.classList.add('prime-suspect');
        const identifiedElement = document.createElement('p');
        identifiedElement.textContent = 'IDENTIFIED';
        suspect.parentNode.insertBefore(identifiedElement, suspect.nextSibling);
    }
}