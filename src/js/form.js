// 
// Параметры валидации
// -----------------------------------
var order_form_validator = $("#form").validate({

  rules: {
    name: "required",
    tel: {
      required: true,
      minlength: 6
    }
  },

  messages: {
    name: "Укажите ваше имя",
    tel: {
      required: "Укажите телефон для связи",
      minlength: jQuery.validator.format("Минимальная длина {0} символов")
    }
  },

  errorClass: "text-danger",

  submitHandler: function(form) {

    $(form).ajaxSubmit(submit_options);

    return false;
  }
});

// 
// Параметры ajax
// -----------------------------------

var submit_options = { 
    // target:        '#output2',   // target element(s) to be updated with server response 
    // beforeSubmit:  showRequest,  // pre-submit callback 
    success:       showResponse,  // post-submit callback 
    error:         showError,

    // other available options: 
    //url:       url         // override for form's 'action' attribute 
    //type:      type        // 'get' or 'post', override for form's 'method' attribute 
    dataType:  'text',       // 'xml', 'script', or 'json' (expected server response type) 
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
  
  $('#form__submit').hide();  

  $('#form__success')
    .text(response)
    .show();  
} 

// Не удачно
function showError() {

  $('#form__submit').hide();

  var response = 'Ошибка! Свяжитесь с нами по телефону.';

  $('#form__error')
    .text(response)
    .show();  
}
