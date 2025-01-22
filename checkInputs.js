document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('intiligentie');

    form.addEventListener('change', function(event) {
        if (event.target.id === 'inteligence_input_field') {
            const allForms = document.querySelectorAll('.question-form');
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                radios.forEach(function(radio) {
                    radio.checked = false; // Uncheck each radio button
                });
            });
            window.open('https://markenhage.nl/', '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gevaar');

    form.addEventListener('change', function(event) {
        if (event.target.id === 'gevaar_ja') {
            const allForms = document.querySelectorAll('.question-form');
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                radios.forEach(function(radio) {
                    radio.checked = false; // Uncheck each radio button
                });
            });
            window.open('https://www.newmancollege.nl/', '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trauma');

    form.addEventListener('change', function(event) {
        if (event.target.id === 'trauma_ja') {
            const allForms = document.querySelectorAll('.question-form');
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                radios.forEach(function(radio) {
                    radio.checked = false; // Uncheck each radio button
                });
            });
            window.open('https://www.gymnasiumbreda.nl/', '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gepest');

    form.addEventListener('change', function(event) {
        if (event.target.id === 'gepest_nee') {
            const allForms = document.querySelectorAll('.question-form');
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                radios.forEach(function(radio) {
                    radio.checked = false; // Uncheck each radio button
                });
            });
            window.open('https://www.mencia.nl/', '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('drugs');

    form.addEventListener('change', function(event) {
        if (event.target.id === 'drugs_ja') {
            const allForms = document.querySelectorAll('.question-form');
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                radios.forEach(function(radio) {
                    radio.checked = false; // Uncheck each radio button
                });
            });
            window.open('https://www.tessenderlandt.nl/', '_blank');
        }
        
    });
});


document.getElementById('send-answers').addEventListener("click", function(){


            const form = document.getElementById('drugs');
            let allFilledIn = true;
            const allForms = document.querySelectorAll('.question-form');

            // Check if all radio buttons in all forms are checked
            allForms.forEach(function(f) {
                const radios = f.querySelectorAll('input[type="radio"]');
                const isAnyChecked = Array.from(radios).some(radio => radio.checked);
                if (!isAnyChecked) {
                    allFilledIn = false;
                }
            });

            if (allFilledIn) {
                window.open('https://www.olvbreda.nl/', '_blank');
            } else {
                const errorbox = document.getElementById("error-box");
                errorbox.innerText = "Niet alle vragen zijn beantwoord.";
            
            }
        
})
