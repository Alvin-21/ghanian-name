const wrapper = document.querySelector('.wrapper'),
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

function collectData() {

    var formData = new FormData(form[0]);
    alert(formData.get('first_name') + " " + formData.get('last_name') + " " + formData.get('gender') + " " + formData.get('year') + " " + formData.get('month') + " " + formData.get('day'));

    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', collectData, false);
}, false);
