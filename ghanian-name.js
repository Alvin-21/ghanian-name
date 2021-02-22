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
        if(month <= 2) {
            month += 10;
        } else {
            month -= 2;
        }

        if(month === 11 || month === 12) {
            year -= 1;
        }

        let weekDay = (day + Math.floor((2.6 * month) - 0.2) - (2 * century) + year + Math.floor(year / 4) + Math.floor(century / 4)) % 7;

        if(weekDay < 0) {
            weekDay += 7;
        }
        index = weekDay;
        return weekDay;
    }

    alert(dayOfWeek());

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if(gender === "male") {
        alert("Your Ghanian Name is: " + maleNames[index]);
    } else {
        alert("Your Ghanian Name is: " + femaleNames[index]);
    }

    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', collectData, false);
}, false);
