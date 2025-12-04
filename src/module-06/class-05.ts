// ✅ Generics with function

/* 
Generics ব্যবহার করার সুবিধা:
1️⃣ Reusable: একই ফাংশন সব ধরনের টাইপে ব্যবহার করা যাবে
2️⃣ Type-Safe: ইনপুট যে টাইপ, আউটপুটও সেই টাইপ হবে
*/

/* 
✅ সমস্যা Generics ছাড়া

Generics না থাকলে একই কাজের জন্য আলাদা ফাংশন লিখতে হয়:
– string এর জন্য এক ফাংশন
– number এর জন্য আরেক ফাংশন
– object এর জন্য আরেক ফাংশন

এতে কোড বড় এবং maintain করা কঠিন হয়ে যায়
*/

// ------------------------------------
// আলাদা আলাদা ফাংশন (Generics ছাড়া)
const createArrayWithString = (value:string) => [value]
const createArrayWithNumber = (value:number) => [value]
const createArrayWithObj  = (value:{id:number;name:string}) => [value]

const arrayString = createArrayWithString("i'am anamol hasan")
const arrNumber = createArrayWithNumber(222)
const arrObj = createArrayWithObj({id:3423,name:'Anamol Hasan'})
// console.log(arrNumber)
// console.log(arrayString)
// console.log(arrObj)

// ------------------------------------
// ✅ Generics ব্যবহার করে একই ফাংশ
const createArrayGeneric = <T>(value:T):T[] => {
    return [value]
}

// Using with generic
const genericArrayString = createArrayGeneric('Anamol Hasan') //string[]
const genericArrayNumber = createArrayGeneric(2423) // number[]
const genericArrayObj = createArrayGeneric({id:21,name:'Anam'}) // object[]
// console.log(genericArrayNumber)
// console.log(genericArrayString)
// console.log(genericArrayObj)

// ------------------------------------
// ✅ দুইটা Generic Type: T এবং U, Tuple return
const createPair = <X ,Y>(first:X,second:Y):[X,Y] => {
    return [first, second] ; // tuple
}
// use
const pair1 = createPair("Age", 232) // [string, number]
const pair2 = createPair(true, 'Active') // [boolean, string]
const pair3 = createPair({id:1,},'User') // [{id:number}, string]


// -----------------------------------------------------------
// Generic Function with Object Merge Example
const studentCourse = <T>(studentInfo:T) => {
  return {
    name:'Programming Hero',
    ...studentInfo,  // Generic type এর property merge
  };
}

// example
const studentI1 = {
    id:1,
    name:'Anam',
    HasPen:true
}
const studentI2 = {
    id:2,
    name:'Hasan',
    HasPen:false,
    isMarried:true
}

// Use 
const result1  = studentCourse(studentI1);
const result2 = studentCourse(studentI2)
console.log(result1)
console.log(result2)

/* 
Output:
result1 =>: { name: "programming hero", id: 1, name: "Anamol", hasPen: true }
result2 =>: { name: "programming hero", id: 2, name: "Hasan", hasPen: false, isMarried: true }
*/