// ===========================================================
// 1. Union Type
// 2. Intersection Type
// ===========================================================

/*============================================================
1. Union Type 
--------------------------------------------------------------
একাধিক টাইপের মধ্যে যে কোন একটি value হিসেবে নিতে পারে।
Union মানে 'OR'  symbol:  | 
*/

/* ================= Example 1: Simple Union ===============*/
type Student = number | string ;
const student : Student = 'Anamol Hasan'

console.log(student)

/*============== Example 2: Union with Literal Types ========= */
type Status = 'Success' | 'error' | 'loading'
let s: Status;
s  = 'loading'; // allowed
s = 'error'; // allowed
// s = 'fail' // not allowed

/* ========== Example 3: Union With Object ============== */
type UserObj = {name:string};
type AdminObj = {name: string; role:'admin'}

let person: UserObj | AdminObj

person = {name: 'Anam'} // allowed
person = { name: 'Anam', role: 'admin'} // allowed
// person = { role: 'admin'} // not allowed

/*===========================================================
2. Intersection Type 
-------------------------------------------------------------
একাধিক টাইপকে একসাথে মিক্স করে নতুন টাইপ তৈরি করা হয় ।
Intersection মানে 'AND'
Symbol: & 
*/

/* ======= Example 1: Intersection with Required Fields ===== */
type User = {name: string};
type AdminInfo = {isAdmin:boolean}

type Admin = User & AdminInfo;
const a: Admin = {
    name:'Siam', 
    isAdmin:true
}