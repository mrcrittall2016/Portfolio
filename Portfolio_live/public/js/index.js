$(function(){

    // Keep return icon hidden until beyond a certain distance
    $('.return').css("display", "none");                  

    // Return user to top of page if click on return button
    $('.return').click(function(){

        $('html, body').animate({scrollTop:0}, 500); 

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
    
    


    // Keep checking scrollbar position            

    $(window).scroll(function(){                  

        // If scroll is beyond certain position then show return button
        if ($(window).scrollTop() > 200){
            $('.return').fadeIn("slow");
        }

        else {
            //$('.return').css("display", "none");
            $('.return').fadeOut("slow");
        }                  
        
    });             

 }); 