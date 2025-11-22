function calculator() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('result');
    
    if (!weight || !height || weight <= 0 || height <= 0) {
        resultBox.innerHTML = '<p class="result-text">Please enter valid weight and height</p>';
        resultBox.classList.remove('has-result');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    let category, description;
    
    if (bmi < 18.5) {
        category = "Underweight";
        description = "You may need to gain weight. Consult a healthcare professional.";
    } else if (bmi < 25) {
        category = "Normal Weight";
        description = "Great! You're in a healthy weight range.";
    } else if (bmi < 30) {
        category = "Overweight";
        description = "Consider a balanced diet and regular exercise.";
    } else {
        category = "Obese";
        description = "It's important to consult a healthcare professional.";
    }
    
    resultBox.innerHTML = `
        <p class="result-bmi">${bmi}</p>
        <p class="result-category">${category}</p>
        <p class="result-description">${description}</p>
    `;
    resultBox.classList.add('has-result');
}
