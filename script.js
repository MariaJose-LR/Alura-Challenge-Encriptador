const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const encryptedText = document.getElementById('encrypted-text');
const copyBtn = document.getElementById('copy-btn');
const noTextImage = document.getElementById('no-text-image');
const noTextTitle = document.getElementById('no-text-title');
const noTextMessage = document.getElementById('no-text-message');

const encryptionKey = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt(text) {
    return text.replace(/[eiaou]/g, letter => encryptionKey[letter]);
}

function decrypt(text) {
    let decrypted = text;
    for (let [key, value] of Object.entries(encryptionKey)) {
        decrypted = decrypted.replace(new RegExp(value, 'g'), key);
    }
    return decrypted;
}

function showResult(text) {
    encryptedText.value = text;
    encryptedText.style.display = 'block';
    copyBtn.style.display = 'block';
    noTextImage.style.display = 'none';
    noTextTitle.style.display = 'none';
    noTextMessage.style.display = 'none';
}

function showNoText() {
    encryptedText.style.display = 'none';
    copyBtn.style.display = 'none';
    noTextImage.style.display = 'block';
    noTextTitle.style.display = 'block';
    noTextMessage.style.display = 'block';
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        showResult(encrypt(text));
        inputText.value = '';
        inputText.placeholder = 'Ingrese el texto aquí';
    } else {
        showNoText();
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        showResult(decrypt(text));
        inputText.value = '';
        inputText.placeholder = 'Ingrese el texto aquí';
    } else {
        showNoText();
    }
});

copyBtn.addEventListener('click', () => {
    encryptedText.select();
    document.execCommand('copy');
});
