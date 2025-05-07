const documents = document.getElementsByClassName('classified-document');

for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];
    const securityLevel = doc.getAttribute('data-security');

    if (securityLevel === 'high') {
        doc.style.backgroundColor = 'red';
    } else if (securityLevel === 'medium') {
        doc.style.backgroundColor = 'yellow';
    } else if (securityLevel === 'low') {
        doc.style.backgroundColor = 'green';
    }

    doc.addEventListener('click', function() {
        alert('Contents: ' + doc.textContent);
    });
}