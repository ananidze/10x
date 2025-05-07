const dataList = document.getElementById('data-list');
const searchInput = document.getElementById('search-input');
let allExtractedData = [];

function extractHiddenData() {
    allExtractedData = [];
    dataList.innerHTML = '';
    const elementsWithHiddenData = document.querySelectorAll('[data-hidden]');

    elementsWithHiddenData.forEach(element => {
        const hiddenValue = element.getAttribute('data-hidden');
        const textContent = element.textContent.trim();
        const dataEntry = { value: hiddenValue, text: textContent, element: element };
        allExtractedData.push(dataEntry);

        const listItem = document.createElement('li');
        listItem.textContent = `Attribute: ${hiddenValue} - Content: "${textContent}"`;
        dataList.appendChild(listItem);
    });

    if (allExtractedData.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No hidden data found.';
        dataList.appendChild(listItem);
    }
}

function searchData() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const listItems = dataList.getElementsByTagName('li');

    for (let i = 0; i < allExtractedData.length; i++) {
        const dataEntry = allExtractedData[i];
        const listItem = listItems[i]; 
        const combinedText = `${dataEntry.value} ${dataEntry.text}`.toLowerCase();

        if (searchTerm === '' || combinedText.includes(searchTerm)) {
            listItem.style.display = '';
            listItem.classList.remove('highlight');
            if (searchTerm !== '') {
                 highlightText(listItem, searchTerm);
            }
        } else {
            listItem.style.display = 'none';
        }
    }
}

function highlightText(element, term) {
    const innerHTML = element.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(term.toLowerCase());
    if (index >= 0) {
        element.innerHTML = innerHTML.substring(0, index) +
            '<span class="highlight">' + innerHTML.substring(index, index + term.length) + '</span>' +
            innerHTML.substring(index + term.length);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const extractButton = document.querySelector('button[onclick="extractHiddenData()"]');
    if (extractButton) {
        extractButton.addEventListener('click', extractHiddenData);
    }
    const searchButton = document.querySelector('button[onclick="searchData()"]');
    if (searchButton) {
        searchButton.addEventListener('click', searchData);
    }
});