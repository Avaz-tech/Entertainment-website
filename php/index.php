<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");


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


?>

