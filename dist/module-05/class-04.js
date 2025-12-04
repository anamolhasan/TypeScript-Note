"use strict";
// =========================================================
// ✔️ TypeScript এর প্রধান টাইপগুলো 
// =========================================================
Object.defineProperty(exports, "__esModule", { value: true });
/*=========================================================
1️⃣ Primitive Types
----------------------------------------------------------
 string, number, boolean, null, undefined, symbol, bigint
*/
/**=================== Example: String ======================= */
let a = 'Hello';
a = a + 'World'; // string concatenation
console.log(a); // Hello world
/** ================ Example: Object Reference ===================== */
let obj1 = { name: 'Anam' };
let obj2 = obj1;
obj2.name = 'Hasan'; // reference update
console.log(obj2.name); // Hansan
const func1 = (value) => {
    return value;
};
const hello = func1(54);
console.log(hello); // 54
const literal = 'anam';
const optional = {
    a: 232,
    b: "i'am",
    c: 'anam'
};
/*==========================================================
4️⃣ Union Type
------------------------------------------------------------
একাধিক টাইপের মধ্যে যেকোন একটি হতে পারে
 */
let direction;
direction = 'down';
const arr = [3, 3];
const student2 = [1, 2, 3, 4, 56, 7];
const student3 = [5, 6, 7, 8];
student2.push(...student3); //spread operator
console.log(student2); // [1,2,3,4,56,7,5,6,7,8]
const user1 = ['Anamol', 'Hasan', 'shakil'];
const user2 = ['Fatema', 'Sultana', 'Aisha', 'A'];
const res = [...user1, user2]; // merge array
console.log(res);
/*=========================================================
6️⃣ Nested Array Destructuring
-----------------------------------------------------------
Array এর মধ্যে array হলে destructuring
 */
const arr2 = [21, 32, 43, [12, 22]];
const [, , , nested] = arr2;
console.log(nested); //[12, 22]
const data = [
    1,
    [2, 3],
    [4, [5, 6]]
];
const [x, [y, z], [pv, [q, r]]] = data;
console.log(x, y, z); //1, 2, 3
console.log(pv, q, r); // 4, 5, 6
/*===========================================================
7️⃣ Union (String | Number)
-------------------------------------------------------------
Variable multiple type নিতে পারে
 */
let value;
value = 10;
value = 'Anam';
console.log(value);
let p = {
    age: 4,
    name: ''
};
//# sourceMappingURL=class-04.js.map