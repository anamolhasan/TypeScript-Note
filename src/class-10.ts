// ===========================================================
//  Type Alias
// ===========================================================

/**
 * TypeScript এ Type Alias মানে হলো একটা টাইপকে নিজের মতো করে 
 * নতুন নাম দিয়ে ব্যবহার করা 
 */

// ================== Example 1: Object Type Alias ============

type User1 = {
    name:string;
    age:number;
    isAdmin:boolean;
}

const user1: User1 = {
    name:'Anam',
    age:27,
    isAdmin:true
}


// =============== Example 2: Array Type Alias ==============
type Numbers = number[]
const scores : Numbers = [12, 34, 64]


// ============ Example 3: Function Type Alias ==============
type AddFn = (a:number, b:number) => number;

const add: AddFn = (a, b) => a + b;

// ========= Example 4: Nested / Complex Type Alias =========

type Address = {
    city: string;
    zip: number;
}
type User = {
    name:string;
    address:Address  // Nested type 
}

const u: User = {
    name: 'Siam',
    address:{
        city:'Brahman-baria',
        zip:1209
    }
}