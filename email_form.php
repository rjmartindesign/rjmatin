<?php
    $toEmail = "richard@rjmartin.co.uk";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
    $subject = "Contact Form - " . $_POST["userName"];
    if(mail($toEmail, $subject, $_POST["content"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>