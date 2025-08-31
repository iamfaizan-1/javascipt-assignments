// question no 1
// var firstName = prompt("Enter your first name");

// var lastName = prompt("Enter your last name");

// var fullName = firstName + " "+ lastName;

// console.log("Your full name is: "+fullName);


// question no 2

// var mobilePhone = prompt("Enter your fav mobile phone model");

// var length = mobilePhone.length;

// console.log(length);


// question no 3


// var str = "Pakistani";

// for(i = 0 ; i< str.length; i++){

// if(i == 3){
//     console.log("character at index 3 is:"+str[i]);
// }

// }





// question no 4

// var str = "Hello world";

// for(i = str.length-1; i >= 0; i--){

//     console.log(str[i])


// if(str[i] == 'l'){

//     console.log("l is at index: "+i);
// }

// }


// question no 5


// var str = "Pakistani";

// console.log(str.charAt(5));



// question no 6
// var firstName = prompt("Enter your first name");

//  var lastName = prompt("Enter your last name");

 
//  console.log(firstName.concat(lastName))


// question no 7

// var city = "Hyderabad";



// var replace = city.replace("Hyder","Islam");
// console.log(replace)

// cleanest cities


// var cleanestCities = ["copenhegen","islamabad","london","california"];



// var flag = false;

// function clean(){

//     var input = document.getElementById("userInput").value
    
//     for (i=0; i<cleanestCities.length; i++){

//         if(input.toLowerCase() == cleanestCities[i]){
//             document.getElementById("para").innerHTML = "The city found at index"+ i;
// flag = true;
//             break;
//         }


        
//     }

//     if(flag != true){
//     document.getElementById("para").innerText = "City not found";
// }


// }


// var city = "Hyderbad";


// for(i= -1; i< city.length; i+=5){

// var result = i;

// if( result == "Hyder"){


//     var result = "Islam";

//     console.log(result+"abad");
// }

// }



// question no 8

// var message = "Ali and Sami are best friends. They play cricket and football cricketer"

// var result = message.replaceAll("and","&");

// console.log(result)



// question no 9

// var str = "472";

// var integer = parseInt(str);

// console.log(str);
// console.log(integer);

// console.log(typeof(str))
// // console.log(typeof(integer))
// var text = "World War II"

// var firstChar = text.indexOf("World War II");

// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12)
    
// }

// console.log(text)


// var text = "My name is Faizan";


// console.log(text.slice(3,7))


// let text = "My name is Faizan";

// var firstChar = text.indexOf("name");

// // console.log(firstChar);

// if(firstChar !== -1){

//     text  = text.slice(0, firstChar) + "game" + text.slice(firstChar+3)
// }

// console.log(text)

// var text = "Hyderabad";

// var toChange = "Hyder";

// var withChange = "Islam";

// var firstChar = text.indexOf("Hyder");

// if( firstChar !== -1 ){

//     text = text.slice(0,firstChar) + withChange + text.slice(firstChar + toChange.length);
// }

// console.log(text)



// var text = "Ali and Sami are best friends. They play cricket and football together"

// var firstChar = text.indexOf("and");

// var toChange = "and";
// var withChange = "&";

// var secondChar = text.lastIndexOf(toChange)
// if(firstChar !== -1){

//     text  = text.slice(0,firstChar) + withChange + text.slice(firstChar + toChange.length)

// }

// console.log(text)

// // console.log(secondChar)

// // console.log(firstChar)