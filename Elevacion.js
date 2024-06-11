// GIVEN
console.log(example);
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//1
console.log(hello);                                   
var hello = 'world'; 
//AFTER HOISTING BY THE INTERPRETER                                
// var hello;
//console.log(hello); // log no definido
//hello = "world";

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
//var needle = 'haystack';
//test() // test no definido;
//function test(){
//        var needle = 'magnet';
//        console.log(needle);
//    }

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
//var brendan = 'super cool';
//console.log(brendan); // console='super cool'
//function print(){
//        brendan = 'only okay';
//        console.log(brendan);
//    }
    
//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
//var food = 'chicken';
//console.log(food); // console = chicken
//eat();
//function eat(){    // console = 'half chicken'
//    food = 'half-chicken';
//    console.log(food);
//    var food = 'gone';
//}

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
//var mean 
//mean();
//console.log(food);
//    food = "chicken";
//    console.log(food);
//    var food = "fish";
//    console.log(food);
//}
//console.log(food);

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
//var genre 
//console.log(genre); // undefiened
//rewind();
//function rewind() {
//    var genre = "r&b";
//    genre = "rock";
//    console.log(genre);
//    
//    console.log(genre);
//}
//console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
//dojo = "san jose";
//console.log(dojo); // error
//learn();           // function undefined
//function learn() {
//    dojo = "seattle";
//    console.log(dojo);
//    var dojo = "burbank";
//    console.log(dojo);
//}
//console.log(dojo);



