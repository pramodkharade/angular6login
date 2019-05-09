<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
$_POST = json_decode(file_get_contents('php://input'),true);
 if(isset($_POST) && !empty($_POST)){
     $username = $_POST['username'];
     $password = $_POST['password'];

     if($username=='admin' && $password=='admin'){
         ?>
         {
             "success":true,
             "secret":"This is the secret no one knows but the admin"
         }
         <?php
     }
     else{
         ?>
         {
             "success":false,
             "message":"Invalid credentials"
         }
         <?php
     }
 }else{
     ?>
     "success":false,
     "message":"Only post access accepted"
     <?php
 }
?>