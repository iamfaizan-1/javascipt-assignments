// qustion no 1

var arr = [];

arr.push("Faizan");
arr.push("Huzaifa");

console.log(arr[0]);


// question no 3

var arr1 = ["Muhammad Faizan"];
console.log(arr1[0]);

// question no 4

var arr2 = [2];

console.log(arr2);

// question no 5

var arr3 = [true];

console.log(arr3)

// question no 6

var arr4 = ["faizan",0,true];

console.log(arr4[1])

// question no 7

var educationQualificatioInPakistan = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","Phd"];

document.write( "list of education qualification in Pakistan:" + "</br>"+ "1." + educationQualificatioInPakistan[0] + "</br>"+ "2." + educationQualificatioInPakistan[1] + "</br>"+"3." + educationQualificatioInPakistan[2] + "</br>"+"4." + educationQualificatioInPakistan[3] + "</br>"+"5." + educationQualificatioInPakistan[4] + "</br>"+"6." + educationQualificatioInPakistan[5] + "</br>"+"7." + educationQualificatioInPakistan[6] + "</br>"+"8." + educationQualificatioInPakistan[7] + "</br>")

// question no 8

// function studentInfo(){
//     var student1 = prompt("Enter name of student 1");
//     var student2 = prompt("Enter name of student 2");
//     var student3 = prompt("Enter name of student 3");
    

//     var score1 = prompt("Enter score of student 1");
//     var score2 = prompt("Enter score of student 2");
//     var score3 = prompt("Enter score of student 3");


//     var percentage1 = (score1*100)/500;
//     var percentage2 = (score2*100)/500;
//     var percentage3 = (score3*100)/500;

//     console.log("Score of "+ student1 + "is "+ score1 +"."+"Percentage: "+ percentage1 +"</br>");
//     console.log("Score of "+ student2 + "is "+ score2 +"."+"Percentage: "+ percentage2 +"</br>");
//     console.log("Score of "+ student3 + "is "+ score3 +"."+"Percentage: "+ percentage3 +"</br>");
// }
// studentInfo();


// question no 9

// var color = ["Blue","Yellow","Green","White","Pink"];

// var colorAddBeg = prompt("Which color you want to add in the beginning");

// color.unshift(colorAddBeg);

// console.log(color);


// var colorAddEnd = prompt("Which color you want to add in the end");

// color.push(colorAddEnd);

// console.log(color);

// var colorAddBeg2 = prompt("Add one more color in the beginning");
// var colorAddBeg3 = prompt("Add one more color in the beginning");

// color.unshift(colorAddBeg2);
// color.unshift(colorAddBeg3);

// console.log("After adding two colors:"+color);


// color.shift();

// console.log("After deletion: "+color);

// color.pop();

// console.log("After deletion from the end: "+color);

// var addingAt = prompt("At which index you want to add");

// var colorAddMiddle = prompt("Which color you want to add in the middle");

// color.splice(addingAt,0,colorAddMiddle);

// console.log("After adding at the required index: "+color);


// var removingAt = prompt("Enter at which index you want to remove");
// var quantity = prompt("How many you want to remove");

// color.splice(removingAt,quantity);

// console.log("after deletion :"+color);


// question no 10

var studentScore = [120,100,300,200,90];

console.log("Scores of students: "+studentScore);

studentScore.sort(function(a,b) {return a-b});

console.log("Ordered scores of students: "+studentScore);


// question no 11

var citynames = ["Karachi","Islamabad","Peshawar","Lahore","Rawalpindi"];

 var copycity =  citynames.slice(0,3);

 console.log(copycity);


//  question no 13

var devices = [];

devices.push("Keyboard");
devices.push("mouse");
devices.push("monitier");

console.log("out",devices[0] + "</br>");
console.log("out",devices[1]+ "</br>");
console.log("out",devices[2]);


// question no 14

var devices2 = [];

devices2.unshift("Keyboard");
devices2.unshift("mouse");
devices2.unshift("moniter");

console.log("out",devices2[0]+ "</br> ")
console.log("out",devices2[1]+ "</br> ")
console.log("out",devices2[2]+ "</br> ")

// question no 15

var companies = ["Motorolla","Samsung","Google","Apple","Nokia"];

document.write("<select>  " + "<option>" +companies[0] + "</option>" + "<option>" + companies[1]+  "</option>" + "<option>" + companies[2]+  "</option>" + "<option>" + companies[3]+  "</option>"+ "<option>" + companies[1]+  "</option>" +"</select>")