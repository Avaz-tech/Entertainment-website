<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");

$x = 5;
$y = 7;

function myTest()
{
  
  $GLOBALS['y'] = $GLOBALS['y'] + $GLOBALS['x'];
  echo $GLOBALS['y'];
}

myTest();

?>

