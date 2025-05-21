const inputs = document.querySelectorAll('.form-input-group input');
const selectedCountry = document.querySelector('.custom-select .selected');
const customSelect = document.querySelector('.custom-select');
const options = document.querySelectorAll('.custom-select .custom-options div');
const submitBtn = document.querySelector('.form-submit-btn');

let formWasSubmitted = false;

// Real-time validation for inputs
inputs.forEach(input => {
    const group = input.closest('.form-input-group');

    function updateLabel() {
        if (input.value.trim() !== "") {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }

        if (formWasSubmitted) {
            if (input.value.trim() !== "") {
                input.classList.remove('error');
                if (group) group.classList.remove('error');
            }
        }
    }

    input.addEventListener('blur', updateLabel);
    input.addEventListener('input', updateLabel);
    updateLabel();
});

// Listen for option click to update selectedCountry and remove error
options.forEach(option => {
    option.addEventListener('click', () => {
        selectedCountry.textContent = option.textContent;
        customSelect.classList.remove('error');  // Remove error on select immediately
    });
});

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    formWasSubmitted = true;

    let allFilled = true;

    inputs.forEach(input => {
        const group = input.closest('.form-input-group');

        if (input.value.trim() === '') {
            input.classList.add('error');
            if (group) group.classList.add('error');
            allFilled = false;
        } else {
            input.classList.remove('error');
            if (group) group.classList.remove('error');
        }
    });

    if (selectedCountry.textContent.trim() === 'Country') {
        customSelect.classList.add('error');
        allFilled = false;
    } else {
        customSelect.classList.remove('error');
    }

    if (allFilled) {
        window.location.href = '/thank-you/thankyou.html';
    }
});