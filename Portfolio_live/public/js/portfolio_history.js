

var portfolio = {

    "C" : {
        "title" : "C",
        "description" : "<p>My first ever computer science project demonstrates three very simple programs written in C. The first, <span> water.c </span>, is a program that prompts the user for the length of his or her shower in minutes (as a positive integer) and then prints the equivalent number of bottles of water (as an integer). The second, <span> mario.c </span>, prints a half-pyramid of hash symbols, the height of which is specified by the user’s input. The third, <span> greedy.c </span>, asks a user how much change is owed from a hypothetical transaction and then calculates the minimum number of coins with which said change can be made. The source code for each can be found here:</p>",
        "link" : "<p><a href = 'https://github.com/mrcrittall2016/CS50-pset1---First-Programs-in-C'>CS50 PSet1 – First programs in C</a></p>"
    },

    "Crypto" : {
        "title" : "Crypto",
        "description" : "<p>Another series of programs written in C based on cryptology. The first, <span> caeser.c </span>,is a program that encrypts messages using Caesar’s cipher. The program accepts separately two command-line arguments from the user: a non-negative integer called “k” and then a line of plain-text. The program proceeds to rotate each letter of the plain text by k positions, thus encrypting the message. The second program, <span>vigenere.c</span>, encrypts messages using Vigenère’s cipher. Each character in a string of plain text is rotated through the alphabet k times, whereby k represents a letter of a separate line of plain text. The source code for each program can be found here:</p>",
        "link" : "<p><a href='https://github.com/mrcrittall2016/CS50-pset-2---cryptology-in-C-/tree/master'>CS50 PSet2 – Cryptology in C</a></p>"
    },

    "Game" : {
        "title" : "Game of Fifteen",
        "description" : "<p>A puzzle played on a square, two-dimensional board with numbered tiles that slide. The goal of this puzzle is to arrange the board’s tiles from smallest to largest, left to right, top to bottom, with an empty space in the board’s bottom-right corner. The game is re-created here in C code and can be found here:</p>",
        "link" : "<p><a href ='https://github.com/mrcrittall2016/game_of_fifteen/tree/master'>CS50 PSet3 – Game of Fifteen</a></p>"
    },

    "Forensics" : {
        "title" : "Forensics",
        "description" : "<p>Another series of programs written in C, making use of File I/O, memory management as well as structs. The first program, <span>whodunit.c</span>, copies a BMP file, whereby all the pixels are red to mask a hidden image beneath. This image is revealed by converting all of the red pixels to white. The second program, <span>resize.c</span>, resizes a 24-bit uncompressed BMP by a factor of n. Finally, the third program, <span>recover.c</span>, scans a CompactFlash (CF) card for “deleted” JPEG files and recovers them to the current working directory. The source code for each program can be found here:</p>",
        "link" : "<p><a href = 'https://github.com/mrcrittall2016/CS50-pset4---manipulation-of-image-file-types-using-C'>CS50 PSet4 – Manipulation of image files using C</a></p>"
    },

    "Mispellings" : {
        "title" : "Mispellings",
        "description" : "<p>The challenge associated with this project was to build the fastest spell-checker possible in C. This is achieved through the program, <span>speller.c</span>, which is designed to load a dictionary of words from disc into memory and then identify which of these words are present in various texts, for example the written script for “Austin Powers:International Man of Mystery”. The source code can be found here:</p>",
        "link" : "<p><a href = 'https://github.com/mrcrittall2016/CS50-pset5---Building-the-fastest-possible-spell-checker-in-C'>CS50 PSet5 – Building the fastest spell-checker possible in C</a></p>"
    },

    "Server" : {
        "title" : "Web Server",
        "description" : "<p>This project involved completing the implementation of a web server program, written in C code. The source code can be found here:</p>",
        "link" : "<p><a href = 'https://github.com/mrcrittall2016/CS50-pset6---Implementing-a-web-server-in-C'>CS50 PSet6 – Implementing a web server program using C</a></p>"
    },

    "Finance" : {
        "title" : "CS50 Finance",
        "description" : "<p><span>C$50 Finance</span> is a website built using PHP and designed to act as a web-based tool for users to manage portfolios of stocks. Users can register for an account, enabling them to check real-time stock values as well as “buy” and “sell” said stocks. Users’ details, as well as a history of their transactions and current stocks owned, are stored in a MySQL database. PHP is used to communicate between this back-end “model” and the front-end “view”, which are the webpages served to the user in the form of html and CSS. It is also used to communicate directly with Yahoo, to retrieve stock information in the form of a CSV file which can be parsed for the required data and returned as an associative array. Additional features of the site include enabling users who are already logged in to change their passwords, or empowering the user to deposit additional funds in their account. For simplicity, no Javascript was used in this project. A link to the completed website can be found here:</p>",
        "link":"<p><a href = 'http://www.cs50finance.drcrittall.com/login.php'>CS50 PSet7 – C$50 Finance</a></p>"

    },

    "Mashup" : {
        "title" : "Mashup",
        "description" : "<p>Mashup is a website that integrates the Google Maps API with Google News with a MySQL database containing thousands of postal codes and GPS coordinates. Javascript and jQuery are utilised heavily in this application. Of note,  the website relies on AJAX to communicate in realtime with the PHP back-end and hence retrieve news for the town or area clicked on the map. A further custom feature was also implemented, whereby AJAX is used to communicate with the mediawiki API to retrieve a thumbnail image of the place in question as well as some interesting facts regarding said place. A link to the completed website can be found here:</p>",
        "link" : "<p><a href = 'http://www.mashup.drcrittall.com/'>CS50 PSet8 – Mashup</a></p>"
    },

    "Maps" : {
        "title" : "History Maps",
        "description" : "<p>History Maps represents my CS50 Final Project. It is an educational webapp game that aims to convey in a fun manner some of the major events in military history. In particular, the game focusses on the Duke of Wellington's campaign from 1808 in the Iberian Peninsular against Napoleon Bonaparte's French invaders. The game utilises the Google Maps API to show battle locatons and relies on Javascipt and jQuery to move the player from one location to another depending on the outcome of the battle. AJAX is utilised to communicate with the PHP back-end and ultimately a MySQL database to keep track of the user's score and last known location should they choose to logout from the game at any point. Please feel free to click the link below and assess the game for yourself: </p>",
        "link" : "<p><a href = 'http://www.historymaps.drcrittall.com/welcome.php'>History Maps – CS50 Final Project</a></p>"
    }

};


