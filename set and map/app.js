

// const set1 = new Set(["apple","mango","banana"])



// console.log(set1.entries())


// const map = new Map([["name","faizan"],["age",20]])

// console.log(map)

// const map2 = new Map();

// map2.set("Name","Faizan");

// console.log(map2.get("Name"))


// const fruits = new Map();

// fruits.set("apple",500)
// fruits.set("mango",300)

// // console.log(fruits.get())

// console.log(  typeof(fruits)    )


//  function outer(){

//     let counter = 0;

//     function inner(){

//         counter++;
//         console.log(counter);
//     }

//     return inner();
//  }


//  const func = outer();

//  func();




// function outer() {
//   let counter = 0;

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// const func = outer();
// func(); // 1
// func(); // 2
// func(); // 3


// function greet(name){

//     return ()=> {
//         console.log("Hello",name)
//     }
// }

// greet("usman")();
// greet("faizan")()

// function add(a,b){
//     return a+b
// }

// const result = add(5,6);

// console.log(result);

    // function Car(make, model) {
    //   this.make = make;
    //   this.model = model;
    // }
    // const myCar = new Car("Toyota", "Camry");
    // console.log(myCar.make); // "Toyota" - 'this' refers to 'myCar'


    console.log(this )
