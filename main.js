

function checkEligibility() {

    let name_input = document.getElementById('name_input').value
    let age_input = document.getElementById('age_input').value


    let input_error = document.getElementById('input_error')
    if (name_input == '' || age_input == '') {
        input_error.classList.remove('d-none')

        setTimeout(function(){
            input_error.classList.add('d-none')
        }, 2000)

        eligibility.classList.add('d-none')
    }

    let eligibility = document.getElementById('eligibility_alert')
    eligibility.style.fontSize = '25px'
    if (parseInt(age_input) >= 18) {
        eligibility.classList.remove('d-none')
        eligibility.innerHTML = name_input + ' is eligible for voting. He/She is ' + age_input + ' years old'
    }
    else{
        eligibility.classList.remove('d-none')
        eligibility.innerHTML = name_input + ' is not eligible for voting. He/She is ' + age_input + ' years old'
    }

}