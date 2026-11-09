const celsiusInput = document.getElementById('celsius');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function convert() {
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        resultDiv.textContent = 'Por favor, introduce un número válido.';
        resultDiv.style.color = '#e74c3c';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    resultDiv.textContent = `${celsius} °C = ${fahrenheit} °F`;
    resultDiv.style.color = '#333';
}

convertBtn.addEventListener('click', convert);

celsiusInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convert();
    }
});
