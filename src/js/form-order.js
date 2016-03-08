// 
// Параметры валидации
// -----------------------------------
var form_order_validator = $("#form-order").validate({

  rules: {
    fullname: "required",
    tel: {
      required: true,
      minlength: 6
    }
  },

  messages: {
    fullname: "Укажите ваше имя",
    tel: {
      required: "Напишите телефон чтобы менеджер смог согласовать дату",
      minlength: jQuery.validator.format("Минимальная длина {0} символов")
    }
  },

  errorClass: "form__error",

  submitHandler: function(form) {

    $(form).ajaxSubmit(submit_order_options);
    return false;
  }
});



// 
// Параметры ajax
// -----------------------------------

var submit_order_options = { 
    // target:        '#output2',   // target element(s) to be updated with server response 
    // beforeSubmit:  showRequest,  // pre-submit callback 
    success:       showResponse,  // post-submit callback 
    error:         showError,

    // other available options: 
    //url:       url         // override for form's 'action' attribute 
    //type:      type        // 'get' or 'post', override for form's 'method' attribute 
    dataType:  'json',       // 'xml', 'script', or 'json' (expected server response type) 
    clearForm: true          // clear all form fields after successful submit 
    //resetForm: true        // reset the form after successful submit 

    // $.ajax options can be used here too, for example: 
    //timeout:   3000 
};


// 
// Функции обработчики ajax ответа
// -----------------------------------

// Удачно
function showResponse(response, statusText, xhr, $form)  { 
  
  $('#modal-order').modal('hide');  
  setModalAnswer(response);
} 

// Не удачно
function showError() {

  $('#modal-order').modal('hide');

  var response = {
    title       : 'Ошибка :(',
    description : 'Пожалуйста перезвоните по одному из следующих телефонов: 55-35-84, 20-25-96, 594-300.'
  };

  setModalAnswer(response);
}

function setModalAnswer(data) {
  var modal_responce = $('#modal-responce');

  $(modal_responce)
    .find('#modal-title')
    .text(data.title);

  $(modal_responce)
    .find('#modal-description')
    .text(data.description);

  $(modal_responce).modal('show');
}
