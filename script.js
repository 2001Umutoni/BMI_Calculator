function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (height === '' || weight === '') {
        result.textContent = 'Please enter both height and weight.';
        result.style.color = 'red';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        result.style.color = 'orange';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        result.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        result.style.color = 'darkorange';
    } else {
        category = 'Obese';
        result.style.color = 'red';
    }

    result.textContent = `Your BMI is ${bmi} (${category}).`;
}
