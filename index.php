<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");

  $bad_string = "Hi! <script src='http://www.evilsite.com/bad_script.js'></script> It's a good day!";
  $good_string = sanitize($bad_string);
  // $good_string returns "Hi! It\'s a good day!"

  // Also use for getting POST/GET variables
  $_POST = sanitize($_POST);
  $_GET  = sanitize($_GET)



}
?>
