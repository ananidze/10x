const networkNodes = document.querySelectorAll('.network-node');
const decodedTransmissionElement = document.getElementById('decoded-transmission');
let decodedMessages = [];

networkNodes.forEach(node => {
    if (node.children.length >= 3) {
        const thirdChild = node.children[2];
        if (thirdChild.hasAttribute('data-message')) {
            decodedMessages.push(thirdChild.getAttribute('data-message'));
        }
    }
});

decodedTransmissionElement.textContent = decodedMessages.join(' ');

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            console.warn('DOM Tampering Detected!', mutation);
            alert('Alert! Potential DOM tampering detected. Check console for details.');
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true, attributes: true });