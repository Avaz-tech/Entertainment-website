<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");


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
class TextInput
{
    public $result='';

    public function add($input)
    {
     $this->result= $this->result.$input;
    }

    public function getValue()
    {
      return $this->result;
    }
}

class NumericInput extends TextInput
{
  public function add($input)
  {
   $new_input = preg_replace('/\D/', '', $input);
   $this->result= $this->result.$new_input;
  }
}

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();

?>

