
// // let functionName = (res, req) => {
// //   res.status(200).json({ message: "Hello from Next.js API!" });
// // };

// // let sum = (a, b) => {
// //   return a + b;
// // }

// // let multiply = (a, b) => {
// //   return a * b;
// // }      


// // let marks = [85, 90, 78, 92, 88];
// // for (let i = 0; i < marks.length; i++) {
// //   console.log(`Mark ${i + 1}: ${marks[i]}`);
// // }     


// // let fruits = ["Apple", "Banana", "Orange", "Mango"];
// // fruits.forEach((fruit, index) => {
// //   console.log(`Fruit ${index + 1}: ${fruit}`);
// // });


// // let Marks2 = [50, 60, 70, 80, 90];
// // let newmarks = Marks2.map(mark =>{
// //     return mark + 5;
// // })
// // console.log(newmarks);    


// // let names = students.map(student => {
// //   return student.name;
// // })

// // console.log(names);

// // let marks = [85, 90, 78, 92, 88];
// // let passedMarks = marks.filter(mark => mark >= 80);
// // console.log(passedMarks);

// // let Marks2 = [50, 60, 70, 80, 90];
// // let newmarks = Marks2.reduce((sum, mark) => {
// //     return sum + mark;
// // }, 0);
// // console.log(newmarks);    

// // let marks5 = [90, 56, 78, 99, 82];
// // let [a,b,c=100] = marks5;

// // console.log(a); // 90 
// // console.log(b); // 56 
// // console.log(c); // 78 


// // let student = {
// //     name: "Ashish",
// //     age: 20,
// //     grade: "0"
// // };

// // let { name, age, grade } = student;

// // console.log(name); // Ashish
// // console.log(age); // 20
// // console.log(grade); // 0  

// // spread operator

// let marks6 = [90, 56, 78, 99, 82];
// let newMarks = [...marks6, 95, 88]; 

// console.log(newMarks); // [90, 56, 78, 99, 82, 95, 88]

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// } 


// const original = {
//     name: "Ajay",
//     details: { age:25}
// };

// const shallowcopy = {...original};
// shallowcopy.name = "Ashish";
// shallowcopy.age = "21";


// const deepcopy  = structuredClone(original);
// deepcopy.name = "Ashish";
// deepcopy.details.age = 30;

// console.log(original.details.age)

// let a = {name : "Ashish"}
// let b = a;

// console.log(a===b);


let a = {x: 10}
let b = {x: 10}