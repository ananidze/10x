const addRecordForm = document.getElementById('add-record-form');
const newRecordText = document.getElementById('new-record-text');
const recordsBody = document.getElementById('records');
const recoverLastBtn = document.getElementById('recover-last-btn');
const auditLog = document.getElementById('audit-log');

let lastDeletedRecord = null;

function logAction(action) {
    const listItem = document.createElement('li');
    listItem.textContent = `${new Date().toLocaleTimeString()}: ${action}`;
    auditLog.appendChild(listItem);
}

function addRecord(text) {
    const newRow = recordsBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    cell2.appendChild(deleteButton);
    logAction(`Added record: "${text}"`);
}

addRecordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = newRecordText.value.trim();
    if (text) {
        addRecord(text);
        newRecordText.value = '';
    }
});

recordsBody.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        const recordText = row.cells[0].textContent;
        lastDeletedRecord = { text: recordText, originalRow: row.cloneNode(true) };
        row.remove();
        logAction(`Deleted record: "${recordText}"`);
        recoverLastBtn.disabled = false;
    }
});

recoverLastBtn.addEventListener('click', function() {
    if (lastDeletedRecord) {
        const newRow = recordsBody.insertRow();
        const cells = lastDeletedRecord.originalRow.cells;
        for(let i = 0; i < cells.length; i++) {
            newRow.insertCell(i).innerHTML = cells[i].innerHTML;
        }
        logAction(`Recovered record: "${lastDeletedRecord.text}"`);
        lastDeletedRecord = null;
        recoverLastBtn.disabled = true;
    }
});

recoverLastBtn.disabled = true;