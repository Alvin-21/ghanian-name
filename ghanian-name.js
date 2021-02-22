const wrapper = document.querySelector('.wrapper'),
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

function collectData() {

    var formData = new FormData(form[0]);

    const century = parseInt(formData.get('year').slice(0, 2));
    let year = parseInt(formData.get('year').slice(2));
    let month = parseInt(formData.get('month'));
    const day = parseInt(formData.get('day'));
    const gender = formData.get('gender');

    let index;
    function dayOfWeek() {
        let calculatedMonth;
        if(month <= 2) {
            calculatedMonth = month + 10;
        } else {
            calculatedMonth = month - 2;
        }

        if(month === 11 || month === 12) {
            year -= 1;
        }

        let weekDay = (day + Math.floor((2.6 * calculatedMonth) - 0.2) - (2 * century) + year + Math.floor(year / 4) + Math.floor(century / 4)) % 7;

        if(weekDay < 0) {
            weekDay += 7;
        }
        index = weekDay;
        return weekDay;
    }

    alert(dayOfWeek());

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let name;
    if(gender === "male") {
        name = maleNames[index];
    } else {
       name = femaleNames[index];
    }

    if(month < 1 || month > 12 || day < 1 || day > 31) {
        alert("Please make sure you have entered the correct date.\nDay should be between 1-31 and Month should be between 1-12.");
    } else {
        alert(name);
    }

    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', collectData, false);
}, false);
