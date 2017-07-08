$(function(){

    // Keep return icon hidden until beyond a certain distance
    $('.return').css("display", "none");                  

    // Return user to top of page if click on return button
    $('.return').click(function(){

        $('html, body').animate({scrollTop:0}, 900); 

    });      

    // If click on link in menu 
    $('.menu li a').click(function(){

        //alert($(this).html()); 
        if (this.hash !== "") {  

            // Prevent default anchor click behavior
            event.preventDefault();

            var id = this.hash; 

            // Scroll to relevant position
            var offset = $(id).offset().top; 

            $('html, body').animate({ scrollTop: offset }, 900); 
                
        }

    });
    
      // If user wants to email me...
      $('.glyphicon-chevron-right').click(function(){

			event.preventDefault();

			
	
			// Ajax call here... depending on result show different modal content
			//$('#myModal').modal("show");
			
			// See here for how to get form values using jQuery: https://www.formget.com/jquery-get-value-of-input/		
			var fields_list = {fields:{Name:$('form input[name="name"]').val(), Email:$('form input[name="email"]').val(), Subject:$('form input[name="subject"]').val(), Message:$('form textarea[name="message"]').val()}}
			
			console.log(fields_list); 
			
			var filled = 0; 
			var size = 0; 
			
			// Check contents of fields object...
			for (key in fields_list["fields"]) {
				
				size++; 
				
				if(fields_list["fields"][key] == ''){			 
				
					
					//alert("Please input " + key + " before sending")	
					$('#myModal .modal-title').html("Sorry"); 
					$('#myModal .modal-body').html("Please ensure all fields are filled before sending"); 
					$('#myModal .modal-body').css("text-align", "center"); 
					$('#myModal').modal("show");						
					break; 						
					
				}
				
				
				filled++; 
				
				
			
			}
			
			
			// If all fields are filled 
			if (filled == size){
			 
        			
				$.getJSON("contact.php", fields_list).done(function(data, textStatus, jqXHR){
				
					  // Check data returned successfully 
					  console.log(data);
				  
				  
					  if (data == true){
					  
							//alert("Congratulations, data received!");
						
							// Now show modal with congrats message
							$('#myModal .modal-title').html("Congratulations"); 
							$('#myModal .modal-body').html("Your message has been sent successfully!"); 
							$('#myModal .modal-body').css("text-align", "center");
							$('#myModal').modal("show");
							
							// Now clear all fields					
						 	$('form input').val(''); 
						 	$('form textarea').val(''); 
					  }
				  
					  else if (data == false){
					  
						  //alert("Technical difficulties - please try again later!"); 
						  $('#myModal .modal-title').html("Technical difficulties"); 
						  $('#myModal .modal-body').html("Please try again later"); 
						  $('#myModal .modal-body').css("text-align", "center");
					  	  $('#myModal').modal("show");
					  	  
					  	  // Now clear all fields
					  	  $('form input').val(''); 
						  $('form textarea').val(''); 
					  	  
					  }
				  
				  
				})
				
				.fail(function(jqXHR, textStatus, errorThrown) {
					// log error to browser's console
					console.log(errorThrown.toString());
				});
			
			}
        			
			

		


	 });


    // Keep checking scrollbar position            

    $(window).scroll(function(){                  

        // If scrollbar exceeds certain value, show return block       

        if ($(window).scrollTop() > 200){
            $('.return').fadeIn("slow");
        }

        else {
            //$('.return').css("display", "none");
            $('.return').fadeOut("slow");
        }                  
        
    });             

 }); 