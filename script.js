const directionSelect = document.getElementById('direction');
const inputLabel = document.getElementById('inputLabel');
const inputField = document.getElementById('input');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function updateLabel() {
    if (directionSelect.value === 'c2f') {
        inputLabel.textContent = 'Temperatura en Celsius (°C):';
    } else {
        inputLabel.textContent = 'Temperatura en Fahrenheit (°F):';
    }
    inputField.value = '';
    resultDiv.textContent = '';
}

directionSelect.addEventListener('change', updateLabel);

function convert() {
    const value = parseFloat(inputField.value);

    if (isNaN(value)) {
        resultDiv.textContent = 'Por favor, introduce un número válido.';
        resultDiv.style.color = '#e74c3c';
        return;
    }

    let result;
    if (directionSelect.value === 'c2f') {
        result = (value * 9 / 5) + 32;
        resultDiv.textContent = `${value} °C = ${result} °F`;
    } else {
        result = (value - 32) * 5 / 9;
        resultDiv.textContent = `${value} °F = ${result} °C`;
    }
    resultDiv.style.color = '#333';
}

convertBtn.addEventListener('click', convert);

inputField.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convert();
    }
});

updateLabel();
