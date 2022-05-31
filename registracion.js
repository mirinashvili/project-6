// form validation

document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;
    
    //username
    let username = document.getElementById('username').value;
    
    if (username.length < 6 || username == " " ){
        errors.username = 'Username can not be empty and must be more then 4 characters';
    }

    let username1 = document.getElementById('username1').value;
    
    if (username.length < 4 || username1 == " " ){
        errors.username1 = 'Username can not be empty and must be more then 4 characters';
    }
    console.log(errors);

    //password
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if (password != password2) {
        errors.password = 'Passwords do not match';
    }

    //checkbox
    let checkbox = document.getElementById('check').checked;

    if (!checkbox) {
        errors.agree = 'You must agree our terms and conditions';
    }

    //radio
    let radio = false;

    form.querySelectorAll('[name = "radio"]').forEach( item => {
        if (item.checked) {
            radio = true;
        }
    });

    if (!radio) {
        errors.radio = 'Please select your Age';
    }


    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    })

    for (let item in errors) {
        let errorPlaceholder = document.getElementById('error_' + item);

        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[item];
        }
    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }

})