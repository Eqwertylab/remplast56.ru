// 
// Параметры валидации
// -----------------------------------
var form_review_validator = $("#form-review").validate({

  rules: {
    fullname: "required",
    review: {
      required: true,
      minlength: 20
    }
  },

  messages: {
    fullname: "Укажите ваше имя",
    review: {
      required: "Напишите текст отзыва",
      minlength: jQuery.validator.format("Минимальная длина {0} символов")
    }
  },

  errorClass: "form__error",

  submitHandler: function(form) {

    $(form).ajaxSubmit(submit_review_options);
    return false;
  }
});


// 
// Параметры ajax
// -----------------------------------

var submit_review_options = { 
    // target:        '#output2',   // target element(s) to be updated with server response 
    // beforeSubmit:  showRequest,  // pre-submit callback 
    success:       showReviewResponse,  // post-submit callback 
    error:         showReviewError,

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
function showReviewResponse(response, statusText, xhr, $form)  { 
  
} 

// Не удачно
function showReviewError() {

}