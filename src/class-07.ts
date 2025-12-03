//=============================================================
// Functions in TypeScript
// ============================================================

/*
Normal Function
---------------------------------------------------------------
Type Annotation সহ normal function
Return type নির্দিষ্ট করা যায় 
*/

function addNormal(a:number, b:number):number {
    return a  + b
}

/** 
 * Arrow Function
 * ------------------------------------------------------------
 * Arrow function syntax
 * Type Annotation একইভাবে করা যায়
 */
const addArrow = (a:number, b:number): number => a + b;

/**
 * Object Method Function
 * ------------------------------------------------------------
 * Object এর ভিতরের function বা method
 * 'this' keyword ব্যবহার করা যায়।
 */

const obj = {
    balance:0,
    add(value:number):number{
        const totalValue = this.balance + value
        return totalValue
    }
}

console.log(obj.add(5)) //5


/**
 * Callback Function
 * ----------------------------------------------------------
 * Array method (যেমন map, filter, reduce) এ callback ব্যবহার করা হয়।
 */

// মূল Function
function greet(name:string, callback:(message:string) => void){
    const msg = `Hello, ${name}!`;
    callback(msg); // Callback call
}

// callback function
function showMessage(message:string){
    console.log(message);
}

// function call 
greet('Anam', showMessage)

//  *****************

const array: number[] = [1,2,3,4,5,6,7,8,9,0]

const squaredArray = array.map((value:number) => {
    return value * value
})

console.log(squaredArray) //  [1,4,9,16,25,36,64,81,0]
console.log(squaredArray.length) // 9