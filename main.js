document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');

    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            numberDiv.style.backgroundColor = getNumberColor(number);
            lottoNumbersContainer.appendChild(numberDiv);
        });
    });

    function getNumberColor(number) {
        if (number <= 10) return '#f39c12'; // Yellow
        if (number <= 20) return '#3498db'; // Blue
        if (number <= 30) return '#e74c3c'; // Red
        if (number <= 40) return '#2ecc71'; // Green
        return '#9b59b6'; // Purple
    }
});
