<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");

$c = 56.78;
$newone = (int)$c;
echo $newone;


   echo "<br>" ;
   echo (min(5,3.5,-56,50,345));
   echo "<br>" ;
   echo (max(5,3.5,-56,50,345));

echo(rand(10,50));

define("companies",["Google", "Facebook", "Twitter","Insta"]);
echo "<br>";
echo companies[1];
echo "<br>";

$raq = array(1,4,2.7,2,6,4,0,78,45,34,32);
sort($raq);

for($i=0; $i<count($raq); $i++)
{
  echo $raq[$i]. " ";
}


?>

