"use strict";
// =========================================================
// Generic in TypeScript
// =========================================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1.Generic Array 1.Generic Tuple 3.Generic Array of Object
/* Generic: TypeScript এর একটি future যা function, class,
interface ইত্যাদিকে flexible রাখে । মানে টাইপ আগে থেকে নির্দিষ্ট
না করে ব্যবহারকারীর প্রয়োজন অনুযায়ী টাইপ নিতে দেয়।
*/
/*------------------------------------------------------------
Generic Array
-------------------------------------------------------------*/
let numbers = [1, 2, 3, 4]; // number type array
let strings = ['a', 'b', 'c']; // string type array
const pairA = ['Age', 25];
const pairB = [true, 'Yes'];
const genericObj = [
    { name: "Anwar", age: 22 },
    { name: "Sakib", age: 9 },
];
/* -----------------------------

/*
Step-by-step summary:
1. <T> হলো placeholder, মানে "যেকোনো type"
2. Function/Array/Tuple/Interface এ ব্যবহার করা যায়
3. Input এবং output একই type হবে
4. Reusable ও flexible কোড তৈরিতে সহায়ক
*/
//# sourceMappingURL=class-03-Generic.js.map