//============================================================
//  Non-Primitive Types in TypeScript
// ===========================================================

/*
✔️Non-Primitive Type কি?

Non-Primitive types মানে যেসব ডেটা struture value হিসেবে simple না, বরং multiple value ধারন করতে পারে এবং mutable হয়।

TypeScript বা JavaScript এ মূল non-primitive typess
1. Object
2. Array
3. Function

এগুলো কে modify করা যায়।  primitive type গুলো immutable, non-primitive গুলো mutable.
*/

/* ================ Example: Array =========================*/

let numbers : number[] = [1, 2, 3]
// একই টাইপের একাধিক যেটা রাখতে ব্যবহার হয়

/*================ Example: Object ===========================*/
let person: {
    name:string;
    age:number
} = {
    name:'mojahid',
    age: 21
}
// Key-value pair হিসেবে ডেটা স্টোর করা হয়


/*=============== Example: Function ======================== */
let greet:() => void = () => console.log('Hello')
// function ও একটি reference type


//============ Example: Class / Interface ===================
// Custom structured type বানাতে Class বা Interface ব্যবহার হয়।

/* ================== বৈশিষ্ট্য (Characteristics) ============ */
// 1. Mutable: ডেটা পরিবর্তনযোগ্য 
// 2. Reference stored: copy করলে মূল ডেটার reference চলে যায়

/*=============== সংক্ষেপে=================================== */
// Primitive type সরাসরি value ধরে রাখে
// Non-Primitive type reference ধরে রাখে