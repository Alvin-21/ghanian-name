// I got the below code from the following youtube video to help me manipulate data from the form input. https://www.youtube.com/watch?v=IAmcCrETKIc
const wrapper = document.querySelector('.wrapper'),
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

// The following youtube resource helped collect data from the forms. https://www.youtube.com/watch?v=IAmcCrETKIc
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

    dayOfWeek();

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
        alert("Your Ghanian Name is: " + name);
    }

    // The following resource helped me reset the form after it has been submitted.
    // input-to-object.html. (2021). Retrieved from https://gist.github.com/prof3ssorSt3v3/52ebd432bb7b8a155985a2f82509541d
    document.forms[0].reset();
}

// https://www.youtube.com/watch?v=IAmcCrETKIc
// The above youtube video helped me load the function for collectData once the sumbit button has been clicked.
document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', collectData, false);
}, false);
