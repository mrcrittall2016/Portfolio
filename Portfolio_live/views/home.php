<!DOCTYPE  html >
<html>
    <head>
        <title>Dr Matthew R. Crittall</title>

        <meta charset = "utf-8">
        <meta name = "viewport" content = "width=device-width, intial-scale = 1">

        <!--Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <!--Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

        <!-- link to own stylesheet -->
        <link rel = "stylesheet" type = "text/css" href = "/css/css-main_3.css"/>

         <!-- cdn link to fontawesome -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">

        <!-- Link to page's own js -->
        <script src = "/js/home.js"></script>        
 

    </head>

    <body>        
        
        <div class = "return"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></div>
        <div class = "border"></div>
        <div class = "header background">
            <div class = "container-fluid">
                <h1>Dr Matthew R. Crittall</h1>
                <p>Senior Scientist/Medicinal Chemist/Web Designer/Software Developer</p>
                <ul class = "menu">
                    <li><a href = "#about">About</a></li>
                    <li><a href = "resume.php">Resume</a></li>
                    <li><a href = "portfolio.php">Portfolio</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class = "supporting-1" id = "about">
            <div class = "container">
                <h1>About me</h1>
                <p>Senior Scientist/Medicinal Chemist/Web Designer/Software Developer</p>
                <p class = "prose">My name is Matthew and I am a Senior Scientist and Medicinal Chemist working in the Drug Discovery industry. Currently I work for <a href = "http://www.sygnaturediscovery.com/"><strong>Sygnature Discovery</strong></a> (a SME based in Nottingham), which specialises in the design and development of novel medicines for the biotech industry. I hold a PhD in synthetic organic chemistry but have also dedicated a considerable quantity of my own time to the art of computer science, taking a course at Harvard University in 2016 to learn the core concepts of this discipline. As such, I have experience in the following languages: C, PHP, Javascript/JQuery, HTML, CSS MySQL and Python. Projects related to this field can be found in the portfolio section. My skills and experience are listed in the resume section. Please feel free to get in touch and say hello as per the contact form below.</p>
            </div>
        </div>
        <div class = "supporting-2" id = "contact">
            <div class = "container">
                <h1>Contact</h1>
                <p>Comments/Collaborations/Questions</p>
                <div class = "row">
                    <div class = "col-md-4">
                        <!--<div class = "thumbnail">-->
                            <img class = "image" src = "images_portfolio/telephone2.jpg"/>
                        <!--</div>-->
                    </div>
                    <form>
                        <div class = "col-md-7">                            
                            <div class = "form-group">
                                <input type = "text" class = "form-control field" placeholder = "Name" name = "name"/>
                            </div>
                            <div class = "form-group">
                                <input type = "email" class = "form-control field" placeholder = "Email" name = "email"/>
                            </div>
                            <div class = "form-group">
                                <input type = "text" class = "form-control field" placeholder = "Subject" name = "subject"/>
                            </div>    
                            <div class="form-group">                                
                                <textarea class="form-control" rows="5" id="comment" name = "message" placeholder = "message"></textarea>
                            </div>                          
                        </div>
                        <div class = "col-md-1 col-xs-12">
                            <div id = wrap>
                                
                            	<span class="glyphicon glyphicon-chevron-right"></span>
                                
                            </div>
                        </div>  
                    </form>              
                </div>
            </div>
        </div> 
        <div class="modal fade modal-customise" id="myModal" role="dialog">
            <div class="modal-dialog">                                    
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"></h4>
                </div>
                <p class="modal-body"></p>
                <div class="modal-footer"></div>
            </div>                                    
            </div>
        </div>        
        <div class = "supporting-3">
            <div class = "container-fluid">
                <ul class = "menu-secondary">                    
                    <li><img src = "images_portfolio/moody2.jpg"/></li>
                    <li><img src = "images_portfolio/party2.jpg"/></li>
                    <li><img src = "images_portfolio/cyprus3.jpg"/></li>
                    <li><img src = "images_portfolio/cyprus4.jpg"/></li>
                    <li><img src = "images_portfolio/alps2.jpg"/></li>
                    <li><img src = "images_portfolio/guitar2.jpg"/></li>
                    <li><img src = "images_portfolio/running3.jpg"/></li>
                    <li><img src = "images_portfolio/boat2.jpg"/></li>                    
                </ul>
            </div>
        </div>
        <div class = "supporting-4">
            <div class = "container">
                <ul class = "menu menu-primary">
                    <li><a href = "https://github.com/mrcrittall2016"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                    <li><a href = "https://www.linkedin.com/in/matthew-crittall-0ba83654/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                    <li><a href = "https://www.facebook.com/mattcrittall"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
                <p>Connect</p>
            </div>
        </div>       
        <div class = "supporting-5">
            <div class = "container"></div>
            <p>Copyright 2017 Matthew R. Crittall</p>
        </div>    
    </body>    
</html>