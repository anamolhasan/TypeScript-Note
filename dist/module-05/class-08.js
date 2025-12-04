"use strict";
// ===========================================================
// Rest & Spread Operator in Typescript
// ===========================================================
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rest এবং Spread Operator যদি না জানা থাকে,
 * spreadRest.ts ফাইলে বিস্তারিত বুঝা যেতে পারে
 */
/*=======================================================
1. Rest Operator
---------------------------------------------------------
Rest operator দিয়ে একাধিক value কে একটি array তে সংগ্রহ করা যায়
*/
/* ================ Example: Function Rest Parameter ======= */
const spread = (...friend) => {
    console.log(friend); // friend একটি array type হবে
};
spread('Hello', "i'am", 'Anam', 'Karim');
/**
 * 2. Spread Operator
 * --------------------------------------------------
 * Spread operator ঠিক উল্টো কাজ করে -
 * একটি array বা object কে আলাদা value তে ছড়িয়ে দেয়
 */
/*============= Example 1: Spread Array ==================== */
const user1 = ['Anam', 'Hasan', 'Shakil'];
const user2 = ['Fatema', 'Sultana', 'Aisha', 'A'];
const res = [...user1, ...user2]; // user1 + user2 merge
/*============= Example 2: spread Object ================= */
const obj1 = {
    hobby: 'Reading Book'
};
const obj2 = {
    firstName: 'Anam',
    lastName: 'Hasan',
    age: 27
};
const userInfo = { ...obj1, ...obj2 }; // obj1 + boj2 merge
console.log(userInfo);
//# sourceMappingURL=class-08.js.map