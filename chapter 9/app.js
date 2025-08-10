// Question no 1

// var city = prompt("Enter your city");

// var uppercase = city.toUpperCase();

// if( uppercase == "KARACHI"  ){

// alert("Welcome to city of lights");

// }
// else if( uppercase == "FAISLABAD" ){
//     alert("Welcome to FAISLABAD")
// }

// else if( uppercase == "ISLAMABAD"){
//     alert("Welcome to Islamabad")
// }
// else if( uppercase == "LAHORE"){
//     alert("Welcome to lahore")
// }

// else{
//     alert("Welcome")
// }


// question no 2


// var gender = prompt("Enter your gender please");
// var yourGender = gender.toLowerCase();


// if(yourGender == "male"){
//     alert("Good morning Sir");
// }
// else if(yourGender == "female"){
//     alert("Good morning Ma'am");
// }

// else{
//     alert("No other genders allowed")
// }

//question no 3


// var trafficSignal = prompt("Enter the signal red, yellow or green");

// var trafficSignal1 = trafficSignal.toLowerCase();

// if(trafficSignal1 == "red"){
//     alert("Stop");
// }
// else if (trafficSignal1 == "yellow"  ){
//     alert("Ready")
// }

// else if (trafficSignal1 == "green"){
//     alert("Go")
// }
// else{
//     alert("Not a valid signal")
// }



// question no 4

// var fuel = prompt("Enter the fuel your car have");

// if (fuel <= 0.25 ){
//     alert("Please refill the fuel in your car");
// }

// else if (fuel > 0.25){
//     alert("The fuel is enough")
// }
// else{
//     alert("Enter valid fuel")
// }



// question no 5

// A

// var a = 4;

// if(++a === 5){
//     alert("Given condition for variable a is true;")
// }



// B


// var b = 82;

// if(b++ === 83 ){

//     alert("Given condition for variable b is true")
// }
// else{
//     alert("False")
// }


//C

// var c = 12;

// if(c++ === 13){
//     alert("Condition 1 is true");
// }

// if(c === 13){
//     alert("Condition 2 is true")
// }

// if(++c<14){
//     alert("Condition 3 is true")
// }

// if(c === 14){
//     alert("Condition 4 is true")
// }

// D

// var materiaCost = 20000;

// var laborCost = 2000;

// var totalCost = materiaCost+laborCost;

// if(totalCost === materiaCost+laborCost){
//     alert("The cost equals")
// }


// f


// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// question no 6

// var marksPhysics = prompt("Enter your physics marks");
// var marksChemistry = prompt("Enter your chemistry marks");
// var marksBio = prompt("Enter your Biology marks");

// var one = parseInt(marksPhysics);
// var two = parseInt(marksChemistry);
// var three = parseInt(marksBio);

// var obtainedMarks =  one + two + three;
// var totalMarks = 300;

// var percentage = obtainedMarks *100 / totalMarks;
// var Grade;
// if(percentage >= 80 ){
//     Grade = "A One"
//     document.write(totalMarks + "</br>" + obtainedMarks + "</br>" + percentage + "</br>" + Grade + "</br>" + "Excellent")
// }

// else if( percentage >= 70){
// Grade = "A"
//     document.write(totalMarks + "</br>" + obtainedMarks + "</br>" + percentage + "</br>" + Grade + "</br>" + "Good")
// }


// else if( percentage >= 60){
// Grade = "B"
//     document.write(totalMarks + "</br>" + obtainedMarks + "</br>" + percentage + "</br>" + Grade + "</br>" + "You need to improve")
// }


// else if( percentage < 60){
// Grade = "Fail"
//     document.write(totalMarks + "</br>" + obtainedMarks + "</br>" + percentage + "</br>" + Grade + "</br>" + "Sorry")
// }




// question no 7

// Guess Game

// var secret_number = 5;
// var guess = prompt("Guess the number");

// if(guess == secret_number){
//     document.write("Bingo you guess the right number");
// }

// else if(guess == secret_number+1 || guess == secret_number-1){
//     document.write("You are close, guess another number");
// }
// else {
//     document.write("You loose");
// }



// question no 8

// var num = prompt("Enter number");

// if(num%3 == 0){
// console.log("The number is divisible by 3");

// }
// else{

// console.log("The number is not divisible by 3");
// }

// question no 9

var num = prompt("Enter number");

if(num % 2 == 0){
    document.write("The number is even");
}

else{
    document.write("The number is odd");
}



