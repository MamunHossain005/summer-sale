function getValueById(id) {
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const val = parseFloat(elementText);
    return val;
}

function setTextById(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
}