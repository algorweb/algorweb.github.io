<?php

$recepient = "a.goroshchenko@yandex.ru";
$sitename = "ALGOR";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nE-mail: $email \nТема сообщения: $subject \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>