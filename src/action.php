<?php
  
  error_reporting(0);
  $subject     = 'Заказ с сайта Livelab.pro';       // Тема письма
  $email_from  = 'support@livelab.pro';             // От кого - Мыло 
  $from_name   = 'Сайт Livelab.pro';                // От кого - Имя отправителя  
  $email_to   = 'support@livelab.pro';              // От кого - Мыло отправителя  
  
  $order_name  = $_REQUEST['name'] ? $_REQUEST['name'] : 'Не указано';
  $order_phone = $_REQUEST['tel'] ? $_REQUEST['tel'] : 'Не указано';

  $message  = '<p>Имя: ' . $order_name . '</p>';
  $message .= '<p>Телефон: ' . $order_phone . '</p>';
  // $message .= '<p>Дата: ' . $order_phone . '</p>';
  // $message .= '<p>Форма: ' . $form_name . '</p>';
  // $message .= '<p>URL: ' . $url . '</p>';

  if( mail_utf8($email_to, $from_name, $email_from, $subject, $message) ) {

    echo 'Спасибо! Мы Вам перезвоним!';
  }
  else
  {

    echo 'Ошибка! Свяжитесь с нами по телефону.';
  }

  function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '') 
  { 
    $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
    $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

    $headers =  "From: $from_user <$from_email>\r\n". 
                "MIME-Version: 1.0" . "\r\n" . 
                "Content-type: text/html; charset=UTF-8" . "\r\n"; 

    return mail($to, $subject, $message, $headers); 
  }
?>