<?php

    require_once("config.php");
    
    // library for emailing client
    //require("libphp-phpmailer/class.phpmailer.php");
    require(__DIR__ . "/../phpmailer/PHPMailer-phpmailer-5.2.0/class.phpmailer.php");

    /**
     * Apologizes to user with message.
     */
    function apologize($message)
    {
        render("apology.php", ["message" => $message]);
    }

    /**
     * Facilitates debugging by dumping contents of argument(s)
     * to browser.
     */
    function dump()
    {
        $arguments = func_get_args();
        require("../views/dump.php");
        exit;
    }

    /**
     * Logs out current user, if any.  Based on Example #1 at
     * http://us.php.net/manual/en/function.session-destroy.php.
     */
    function logout()
    {
        // unset any session variables
        $_SESSION = [];

        // expire cookie
        if (!empty($_COOKIE[session_name()]))
        {
            setcookie(session_name(), "", time() - 42000);
        }

        // destroy session
        session_destroy();
    }

    /**
     * Redirects user to location, which can be a URL or
     * a relative path on the local host.
     *
     * http://stackoverflow.com/a/25643550/5156190
     *
     * Because this function outputs an HTTP header, it
     * must be called before caller outputs any HTML.
     **/
     
    function redirect($location)
    {
        if (headers_sent($file, $line))
        {
            trigger_error("HTTP headers already sent at {$file}:{$line}", E_USER_ERROR);
        }
        header("Location: {$location}");
        exit;
    }

    /**
     * Renders view, passing in values.
     */
     
    function render($view, $values = [])
    {
        // if view exists, render it
        if (file_exists("../views/{$view}"))
        {
            // extract variables into local scope
            extract($values);

            // render view (between header and footer)
            //require("../views/header.php");
            require("../views/{$view}");
            //require("../views/footer.php");
            exit;
        }

        // else err
        else
        {
            trigger_error("Invalid view: {$view}", E_USER_ERROR);
        }
    }
    
    // mail function added by MRC. Not need $mail->MsgHTML($body) to send HTML links
    function email($address, $subject, $body)
    {
        $mail = new PHPMailer();
        
        // use SMTP
        $mail->IsSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->Password = "crimson50";
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "tls";
        $mail->Username = "jharvard@cs50.net";
        $mail->MsgHTML($body);
          
        // set From:
        $mail->SetFrom("jharvard@cs50.net");
          
        // set To:
        $mail->AddAddress("$address");

        // set Subject:
        $mail->Subject = "$subject";
             
        // set body
        $mail->Body = 
            "$body\n\n";
            
        // send mail
        if ($mail->Send() == false)
        {
            print($mail->ErrInfo);
            return false;
        }
        
        else
        {
            return true;
        }
    }

?>
