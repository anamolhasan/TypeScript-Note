"use strict";
// ===========================================================
//  Rest Operator(...)
// ===========================================================
Object.defineProperty(exports, "__esModule", { value: true });
/*
Function & Usage:

Rest operator দিয়ে একাধিক value কে একটি array তে সংগ্রহ করা যায়।
অর্থাৎ, “বাকি সব মান একসাথে” - এই কাজটাই করে rest operator
*/
/* ============== Example ================================ */
function addNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
/*
TypeScript  এ numbers এর টাইপ হলো number[]
=> সবসময় rest parameter একটি array type হয়
*/
/**=======================================================
   Spread Operator (...)
 --------------------------------------------------------
 Function & Usage:

 Spread operator ঠিক উল্টো কাজ করে -
 এটি একটি array বা object কে আলাদা আলাদা value তে “ছড়িয়ে দেয়”।


 ***** Importance:

 1. Array বা object copy/ merge করতে
 2. Immutable ডেটা ম্যানেপুলেশন (React এ ব্যবহৃত)
 3. Poops pass করার সময় React Component এ
 
   */
/* =========== Example =========================== */
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
/* ================= Comparison Table ================= */
/*
| বিষয়       | Rest Operator            | Spread Operator
-----------------------------------------------------------------------
| কাজ       | বাকি value গুলোকে একত্রে নেয় | value গুলোকে ছড়িয়ে দেয়
| ব্যবহারের জায়গা   | Function parameter  | Array, Object, Function call
| রিটার্ন টাইপ       | সবসময় Array        | context অনুযায়ী ভিন্ন
| উদাহরণ          | `function sum(...nums)` | `[...arr]`, `{...obj}`
*/
//# sourceMappingURL=spreadRest.js.map