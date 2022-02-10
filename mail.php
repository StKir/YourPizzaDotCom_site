<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_tel'];
$sity = $_POST['sity'];
$street = $_POST['street'];
$home = $_POST['home'];
$sector = $_POST['sector'];
$appart = $_POST['appart'];
$order = $_POST['order'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yourpizzaadm@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'W21nNLTeBb6dLqF0miqJ'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('yourpizzaadm@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('yourpizzaadm@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый заказ';
$mail->Body    = 'ФИО: ' .$name . '<br>Телефон: ' .$phone . '<br>Адресс: ' .$sity. ' ' . $street . ' ' .$home . '<br>Подъезд: ' .$sector . ' Квартира: ' .$appart . '<br> Заказ: ' .$order ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thx.html');
}
?>