const evidenceItems = document.querySelectorAll('[data-evidence="true"]');
const evidenceLog = document.getElementById('evidence-log');
const evidenceCountElement = document.getElementById('evidence-count');
let remainingEvidence = evidenceItems.length;

evidenceCountElement.textContent = remainingEvidence;

evidenceItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.textContent;
    evidenceLog.appendChild(listItem);

    item.addEventListener('click', function() {
        if (!item.classList.contains('collected')) {
            item.classList.add('collected');
            listItem.classList.add('collected');
            remainingEvidence--;
            evidenceCountElement.textContent = remainingEvidence;
        }
    });
});