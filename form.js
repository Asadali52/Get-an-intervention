
// form input 

document.querySelectorAll('.form-input-group input').forEach(input => {
    function updateLabel() {
        if (input.value.trim() !== "") {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    }
    input.addEventListener('blur', updateLabel);
    updateLabel();
});
