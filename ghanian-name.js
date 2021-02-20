const wrapper = document.querySelector('.wrapper'),
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

function collectData() {

    var formData = new FormData(form[0]);
    alert(formData.get('first_name') + " " + formData.get('last_name') + " " + formData.get('gender') + " " + formData.get('year') + " " + formData.get('month') + " " + formData.get('day'));

    const century = parseInt(formData.get('year').slice(0, 2));
    let year = parseInt(formData.get('year').slice(2));
    let month = parseInt(formData.get('month'));
    const day = parseInt(formData.get('day'));

    if(century === 23) {
        alert("yes");
    }

    function dayOfWeek() {
        if(month <= 2) {
            month += 10;
        } else {
            month -= 2;
        }

        if(month === 11 || month === 12) {
            year -= 1;
        }
        
        let dayOfWeek = (day + Math.floor((2.6 * month) - 0.2) - (2 * century) + year + Math.floor(year / 4) + Math.floor(century / 4)) % 7;
        
        return dayOfWeek;
    }

    alert(dayOfWeek());
    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', collectData, false);
}, false);
