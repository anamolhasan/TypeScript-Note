// ============================================================
// Object: Optional, Readonly, Literal Type
// ============================================================

/*=============================================================
1️⃣ Optional Property
---------------------------------------------------------------
Object এ কোন property optional হলে ? দিয়ে দেখানো হয়
*/

type User = {
    name: string  // ব্যাধ্যতামূলক
    age?:number  // optional
}

const u1: User = {
    name: 'Anam', // age না হলে থাকলে ও vaild 
}

const u2: User = {
    name: 'Hasan',
    age:23  // age থাকলেও valid
}

/*=========================================================
2️⃣ Optional Function Parameter
-----------------------------------------------------------
Function parameter optional হলে ? দিয়ে ব্যবহার করা যায় 
*/

function greet(name:string, message?: string) {
    if(message){
        console.log(message)
    } else {
        console.log('Hello!')  // fallback
    }
}
 
greet('Anam') // message ছাড়া 
greet('Anam', 'Hi bro')  // message সহ



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

function showUser({name, nickName}: {name:string; nickName?:string}){
     console.log('Name:', name)
     console.log('Nick:', nickName ?? 'No nickname') // fallback
}

showUser({name:'Anwar'}) // nickName নাই
showUser({name:'Anam', nickName:'AK'}) // nickname আছে

/**===========================================================
 * Optional Chaining (?.)
 * -----------------------------------------------------------
 * Nested object property access এ error এড়াতে ব্যবহার হয়
 */

const userObj = {
    name:'Anam',
    address:{
        city:'Dhaka'
    }
}

console.log(userObj?.address?.city) // Dhaka
// যদি address না থাকে ->  undefined return করবে error হবে না 

/** =========================================================
 * Optional কোথায় ব্যবহার করা হয়?
 * ----------------------------------------------------------
 * - object property
 * - function parameter
 * - class property
 * - tuple
 * - destructuring
 * - API response 
 * - optional chaining
 * - union type
 * - default value
 */

/*===========================================================
 Literal Type
 ------------------------------------------------------------
 প্রতিটি value দিয়েই টাইপ তৈরি করা যায় 
*/

//  সরাসরি literal দিয়ে type
type Direction = 'left' | 'right';

// typeof দিয়ে variable value -> type 
const value = 'Hello'
type ValueType = typeof value

// array/object থেকে type বানানো (const assertion)
const fruits = ['apple', 'banana'] as const;
type Fruit = (typeof fruits)[number]

const obj = {name: 'Anam',age:27} as const 
type ObjKeys = keyof typeof obj; // 'name' | 'age'

/**===========================================================
 * Readonly Property
 * -----------------------------------------------------------
 * Readonly মানে property পরিবর্তন করা যায় না 
 *  */

type UserReadOnly = {
    readonly id:number  // পরিবর্তন করা যাবে না 
    name:string;
}

const readonlyUser: UserReadOnly = {
    id:434,
    name:'anam'
}

readonlyUser.name = 'hasan' // OK
// readonlyUser.id = 343;   // Error: Cannot assign to 'id' because it is read-only