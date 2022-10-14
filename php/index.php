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
function unique_names($array1, $array2) 
{
    for($i=0; $i<count($array1); $i++)
    {
       for($k=0; $k<count($array2); $k++)
       {
         if($array1[$i]==$array2[$k])
         {
             $array1[$i]=NULL;
         }
       } 
    }
    return join($array1,$array2);
    
}

 $names = unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma']);
echo join(', ', array($names)); // should print Emma, Olivia, Ava, Sophia


?>

