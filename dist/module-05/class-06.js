"use strict";
// ============================================================
// Object: Optional, Readonly, Literal Type
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
const u1 = {
    name: 'Anam', // age না হলে থাকলে ও vaild 
};
const u2 = {
    name: 'Hasan',
    age: 23 // age থাকলেও valid
};
/*=========================================================
2️⃣ Optional Function Parameter
-----------------------------------------------------------
Function parameter optional হলে ? দিয়ে ব্যবহার করা যায়
*/
function greet(name, message) {
    if (message) {
        console.log(message);
    }
    else {
        console.log('Hello!'); // fallback
    }
}
greet('Anam'); // message ছাড়া 
greet('Anam', 'Hi bro'); // message সহ
/*============================================================
3️⃣ Optional এর আসল অর্থ
--------------------------------------------------------------
Optional internally:
age?:number === age: number | undefined
*/
/*============================================================
4️⃣ Optional in Destructuring
-------------------------------------------------------------
Destructuring এর মধ্যে optional property handle করা যায়
*/
function showUser({ name, nickName }) {
    console.log('Name:', name);
    console.log('Nick:', nickName ?? 'No nickname'); // fallback
}
showUser({ name: 'Anwar' }); // nickName নাই
showUser({ name: 'Anam', nickName: 'AK' }); // nickname আছে
/**===========================================================
 * Optional Chaining (?.)
 * -----------------------------------------------------------
 * Nested object property access এ error এড়াতে ব্যবহার হয়
 */
const userObj = {
    name: 'Anam',
    address: {
        city: 'Dhaka'
    }
};
console.log(userObj?.address?.city); // Dhaka
// typeof দিয়ে variable value -> type 
const value = 'Hello';
// array/object থেকে type বানানো (const assertion)
const fruits = ['apple', 'banana'];
const obj = { name: 'Anam', age: 27 };
const readonlyUser = {
    id: 434,
    name: 'anam'
};
readonlyUser.name = 'hasan'; // OK
// readonlyUser.id = 343;   // Error: Cannot assign to 'id' because it is read-only
//# sourceMappingURL=class-06.js.map