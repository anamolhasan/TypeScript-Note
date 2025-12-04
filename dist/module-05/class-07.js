"use strict";
//=============================================================
// Functions in TypeScript
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
/*
Normal Function
---------------------------------------------------------------
Type Annotation সহ normal function
Return type নির্দিষ্ট করা যায়
*/
function addNormal(a, b) {
    return a + b;
}
/**
 * Arrow Function
 * ------------------------------------------------------------
 * Arrow function syntax
 * Type Annotation একইভাবে করা যায়
 */
const addArrow = (a, b) => a + b;
/**
 * Object Method Function
 * ------------------------------------------------------------
 * Object এর ভিতরের function বা method
 * 'this' keyword ব্যবহার করা যায়।
 */
const obj = {
    balance: 0,
    add(value) {
        const totalValue = this.balance + value;
        return totalValue;
    }
};
console.log(obj.add(5)); //5
/**
 * Callback Function
 * ----------------------------------------------------------
 * Array method (যেমন map, filter, reduce) এ callback ব্যবহার করা হয়।
 */
// মূল Function
function greet(name, callback) {
    const msg = `Hello, ${name}!`;
    callback(msg); // Callback call
}
// callback function
function showMessage(message) {
    console.log(message);
}
// function call 
greet('Anam', showMessage);
//  *****************
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const squaredArray = array.map((value) => {
    return value * value;
});
console.log(squaredArray); //  [1,4,9,16,25,36,64,81,0]
console.log(squaredArray.length); // 9
//# sourceMappingURL=class-07.js.map