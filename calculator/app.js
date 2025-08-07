var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

var operation = prompt("Enter the operation you want to perform '+' '-' '*' '/' '%' ");

if(operation == "+"){
    document.write(num1+num2);
}

else if(operation == "-"){
    document.write(num1-num2);
}

else if(operation == "*"){
    document.write(num1*num2);
}

else if(operation == "/"){
    document.write(num1/num2);
}

else if(operation == "%"){
    document.write(num1%num2);
}