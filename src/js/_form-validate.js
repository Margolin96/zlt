function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateText(text) {
  var re = /^[a-zA-Z ]*$/;
  return re.test(text);
}

function validatePhone(phone) {
  phone = phone.replace(/\D/g,'')
  if ((phone.length < 7) || (phone.length > 11)) return false;
  else return true;
}

$('form.validate').submit(function(e) {
  e.preventDefault()
  $.each($(this).find('input:not(.not-valid)'), function(k, v) {
    if ($(v).is(':required') && ($(v).val().length == 0)) {
      $(this).closest('.tooltip').attr('data-valid', 'Обязательное поле')
    } else {
      var valid = false;
      switch($(v).attr('type')) {
        case 'email':
          valid = validateEmail($(v).val());
          break;
        case 'tel':
          valid = validatePhone($(v).val());
          break;
        default:
          valid = validateText($(v).val());
          break;
      }

      if (!valid) {
        $(this).closest('.tooltip').attr('data-valid', 'Неверный формат');
        e.stopPropagation()
      } else {
        $(this).closest('.tooltip').attr('data-valid', '');
      }
    }
  })
})
