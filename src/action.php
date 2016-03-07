<?php
  
  /* Отключаем отображение ошибок */ 
  error_reporting(0);

  /* Функция отправки сообщения */
  function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '') 
  { 
    $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
    $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

    $headers =  "From: $from_user <$from_email>\r\n". 
                "MIME-Version: 1.0" . "\r\n" . 
                "Content-type: text/html; charset=UTF-8" . "\r\n"; 

    return mail($to, $subject, $message, $headers); 
  }

  $subject     = 'Заявка с сайта remplast56.ru';    // Тема письма
  $email_from  = 'info@remplast56.ru';              // От кого - Мыло 
  $from_name   = 'Ремпласт 56';                     // От кого - Имя отправителя  
  $email_to   = 'info@remplast56.ru';               // От кого - Мыло отправителя  
  
  $order_name  = $_REQUEST['fullname'] ? $_REQUEST['fullname'] : 'Не указано';
  $order_phone = $_REQUEST['tel'] ? $_REQUEST['tel'] : 'Не указано';

  $message  = '<p>Имя: ' . $order_name . '</p>';
  $message .= '<p>Телефон: ' . $order_phone . '</p>';
  // $message .= '<p>Дата: ' . $order_phone . '</p>';
  // $message .= '<p>Форма: ' . $form_name . '</p>';
  // $message .= '<p>URL: ' . $url . '</p>';

  if( mail_utf8($email_to, $from_name, $email_from, $subject, $message) ) {
    $answer = array(
      'title' => 'Заявка принята',
      'description' => 'Менеджер перезвонит и согласует дату и время прихода мастера.' 
    );
  }
  else
  {
    $answer = array(
      'title' => 'Ошибка :(',
      'description' => 'Пожалуйста перезвоните по одному из следующих телефонов: 55-35-84, 20-25-96, 594-300.' 
    );
  }

  echo json_encode($answer);

?>