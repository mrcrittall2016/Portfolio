$(function(){

    // Use CSS selector to target portfolio images
    $('.portfolio .col-md-6 a').click(function(){
        
        var image = ($(this).attr("id"));                    
        
        for (var i in portfolio){                       
            
            if (portfolio[i].title == image){                          
                
                // Now set parameters of modal below to title, description and link...
                $('.modal-title').html(portfolio[i].title); 
                $('.modal-body').html(portfolio[i].description); 
                $('.modal-footer').html(portfolio[i].link); 
            }

        }                   

    });

    // Keep return icon hidden until beyond a certain distance
    $('.return').css("display", "none");                  

    // Return user to top of page if click on return button
    $('.return').click(function(){

        $('html, body').animate({scrollTop:0}, 900); 

    });      
    

    // Keep checking scrollbar position             

    $(window).scroll(function(){                  

        // Get class of next section after header and then offset
        var next_section = "." + ($('.header').next().attr("class")); 
        var offset = $(next_section).offset().top; 

        console.log("offset is: " + offset); 

        console.log("window scroll is: " + $(window).scrollTop());

        // If window_scroll + window_height is greater than offset of next section,
        // display return block. Take into account height of return block and padding of next section  

        var return_height = 80 + 20; 
        /*
        if ($(window).height() + $(window).scrollTop() > offset + return_height){
            //$('.return').css("display", "block");
            $('.return').fadeIn("slow");
        }
        */
        if ($(window).scrollTop() > 200){
            $('.return').fadeIn("slow");
        }

        else {
            //$('.return').css("display", "none");
            $('.return').fadeOut("slow");
        }                  
        
    });  


})