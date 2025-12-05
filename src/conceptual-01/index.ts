
// alias
// type TPerson = {
//     name:string;
//     age:number;
//     city:{
//         zipCode:number;
//         address:string
//     }
// }

// let person :TPerson = {
//     name:'rakib',
//     age:12,
//     city:{
//         zipCode:3453,
//         address:'Dhaka'
//     }
// }

// console.log(person)

// array
// let shoppingList : string[] = ['Egg', 'milk']

// tuple
// let user : [string, number] = ['Rakib', 43]

// console.log(user)

// enum TrafficLight  {
//   Red,
//   Yellow,
//   Green,
// }

// let signal:TrafficLight= TrafficLight.Red
// console.log( signal)


// unknown
let box: unknown = 2;
box = 'Text'

if(typeof box === 'string'){
    console.log(box.toUpperCase())
}