// Variables: undefined, null, boolean, string, obj, symbol

var owner = "The owner: 'Avazbek Ravshanov' "

console.log(owner)

var text =  "The web site was built by 'Avaz-tech' "

console.log(text)


//console.log(typeof(text2))
//onsole.log(text2.length)

var arr = ["Marvel", "Sony Pictures", "Universal Pictures"]

arr.push('20th Century')

console.log(arr)

function kino(txt, thnk){
    console.log("Ko'ramiz\n" + txt  + thnk);

}

kino("ONLY BEST QUALITY MOVIES" ,"\nThankyou")


function sum(x,y){

    console.log("Natija: " + (x*y));

}

sum(3,4)

 var num = 3.1

 console.log(Math.round(num))

 console.log(Math.pow(4,5))
 console.log(Math.abs(-89))

var myArr = [];
var i = 0;
while (i<5){
myArr.push(i);
i++ 
}
console.log(myArr);

let person = {
    name: 'Ben',
    age: 26
};
console.log(person);

person.name = "Avaz"

console.log(person);
