

$(function(){

    // Basic page functions
    return_to_top();                  

    click_link();             

    mobile_menu(); 

    // Portfolio page 
    if ($('div').hasClass('portfolio')){

       portfolio_image(); 
        
    }

 }); 
 
 // Returns user to top of page if click on return arrow 
 function return_to_top(){

        // Keep return icon hidden until beyond a certain distance
        $('.return').css("display", "none");   

        // Keep checking scrollbar position
        $(window).scroll(function(){      

            if ($(window).scrollTop() > 200){
                $('.return').fadeIn("slow");
            }

            else {
                //$('.return').css("display", "none");
                $('.return').fadeOut("slow");
            }                  
            
        }); 

        // Return user to top of page if click on return button
        $('.return').click(function(){

            $('html, body').animate({scrollTop:0}, 900); 

        }); 

 }

 // Smoothe scrolls user to different part of page depending on link clicked
 function click_link(){
    
    // If click on link in menu 
    $('.menu li a, .mobile_menu li a').click(function(){


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
 }

 // Displays mobile menu when click on bars
 function mobile_menu(){

    // If click on three-bar glyphicon
    $('i.fa-bars').click(function(){

        //$('#myModal').modal("show");
        $('.white_block').slideDown("fast");

        $(this).css("display", "none"); 
        $('i.fa-long-arrow-up').css("display", "block"); 

        $('i.fa-long-arrow-up').click(function(){
            $('.white_block').slideUp("fast"); 
            $(this).css("display", "none"); 
            $('i.fa-bars').css("display", "block"); 
        });

    });
 }
 
 // Displays information regarding different projects on portfolio page when click on image
 function portfolio_image(){

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

 }
