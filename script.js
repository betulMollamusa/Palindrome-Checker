
const checkButton = document.getElementById('check-btn');
checkButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    if (!textInput) {
        alert('Please input a value');
        return;
    }

    const cleanInput = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanInput.split('').reverse().join('');
    const isPalindrome = cleanInput === reversedInput;

    // Sonuç metni evet ya da hayır
    result.textContent = isPalindrome 
        ? `${textInput} is a palindrome.` 
        : `${textInput} is not a palindrome.`;
    
    // Sonuç görülebilir
    result.classList.remove('hidden');
});

