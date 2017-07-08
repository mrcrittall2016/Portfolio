<?php

    // configuration
    require("../includes/config.php");     
    
    
    if (empty($_GET["fields"]))
    {
        http_response_code(400);
        exit;
    }
    
    
    //echo "Testing page"; 
    
    
    
    $form_fields = $_GET["fields"];
    //$form_fields = ["Name" => "Matthew", "Email" => "drcrittall@gmail.com", "Subject" => "testing", "Message" => "Hello"];
    
     
    
    //print_r ($form_fields); 
    
    // Email message
    
    $subject = $form_fields["Subject"]; 
    $address = "drcrittall@gmail.com";
	$body = "Dear Matthew,<br><br>" . $form_fields["Message"] . "<br><br>From<br><br>" . $form_fields["Name"] . "<br><br>" . $form_fields["Email"];
	
		
	//echo $body; 	
	
	$value = email($address, $subject, $body);
	
	
	if ($value == true){
	
		$info = true; 
		
	}
	
	else if ($value == false){
	
		$info = false; 
		
	}
    
    
    header("Content-type: application/json");
    print(json_encode($info, JSON_PRETTY_PRINT));
    
 
?>