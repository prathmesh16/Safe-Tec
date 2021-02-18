<?php    

$json = file_get_contents('php://input');

$data = json_decode($json); 

$to_email = $data->email;
$phone = $data->phone;
$name = $data->name;
$query = $data->query;

$subject = "Contact with SafeTech Fire Services";
$message = "Email sent Successfully! SafeTech Team will contact you shortly!";
$headers = 'From:agri.tech.mh@gmail.com';

$to_email2 = "agri.tech.mh@gmail.com";
$subject2 = "Contact with SafeTech Fire Services";
$message2 = "Name: ".$name."\nEmail: ".$to_email."\nPhone: ".$phone."\nQuery :".$query;
$headers2 = 'From:'.$to_email;

if(mail($to_email,$subject,$message,$headers))
{
	header('content-type: text/plain');
	echo "Email sent Successfully! SafeTech Team will contact you shortly!";
}

mail($to_email2,$subject2,$message2,$headers2);

?>