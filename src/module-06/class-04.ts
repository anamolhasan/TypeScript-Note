// =====================================================
// ✅ GENERIC with INTERFACE (সহজ ব্যাখ্যা)
// =====================================================

/*
Generics Interface মানে:
Interface-এর কোনো property-এর টাইপ fixed থাকবে না।
ব্যবহারকারী যখন interface ব্যবহার করবে, তখনই টাইপ ঠিক করবে।
*/

// -----------------------------------------------------
// ✅ Example 1: Generic Interface (Single Generic Type)
// -----------------------------------------------------

interface User<T>{
    data:T; // data-এর টাইপ flexible (generic)
    age:number // normal property
}

// ✅ Single Object হিসেবে Generic ব্যবহার
const userResponse:User<{id:number; name:string}> = {
    data: {id:1, name:'Anam'},
    age:200
}

// ✅ Array হিসেবে Generic ব্যবহার
const postsResponse:User<{id:number; title:string}[]> = {
    data:[
        {id:1, title:'Post 1'},
        {id:2, title:'Post 2'},
    ],
    age:200
}

// -----------------------------------------------------
// ✅ Example 2: Generic Interface with Different Details
// -----------------------------------------------------
interface Product<T>{
    id:number;
    name:string;
    details:T; // details - এর টাইপও flexible
}

// simple details
const product1 : Product<{price:number; inStock:boolean}> = {
  id:121,
  name:'Laptop',
  details:{
    price:54866,
    inStock:true
  }
}

// Complex details 
const product2: Product<{price:number; colors:string[]; warranty:string}> = {
    id:102,
    name:'Smartphone',
    details:{
        price:120000,
        colors:['black', 'White', 'blue'],
        warranty:'1 year'
    }
}

// =====================================================
// ✅ Example 3: DeveloperProfile with 1 Generic Type
// =====================================================
interface DeveloperProfile<T>{
    name:string;
    salary:number;
    device:Device
    smartWatch:T
}

interface Device {
    brand:string;
    model:number
}
// sub-interface (smartWatch - এর structure)
interface SmartWatchPoor {
    heartRate:string;
    stopWatch:boolean
}
// sub-interface (smartWatch - এর structure)
interface SmartWatchRich {
    stopWatch:boolean
    clock:boolean
}

// Example Developer
const poorDeveloper: DeveloperProfile<SmartWatchPoor>={
  name:'Anamol Hasan',
  salary:100000,
  device:{
    brand:'Apple',
    model:75656
  },
  smartWatch:{
    heartRate:'32 bpm',
    stopWatch:true
  }
}
// Example Developer
const richDeveloper: DeveloperProfile<SmartWatchRich>={
  name:'Anamol Hasan',
  salary:100000,
  device:{
    brand:'Apple',
    model:96786
  },
  smartWatch:{
    stopWatch:true,
    clock:false
  }
}


// =====================================================
// ✅ Example 4: DeveloperProfile2
// ✅ Multiple Generics (SmartWatch + Bike)
// ✅ Default Generic Value দেওয়া আছে
// =====================================================

interface DeveloperProfile2<SmartWatchType, BikeType = undefined>{
name:string;
salary:number;
device: D;  // nested interface
smartWatch:SmartWatchType;  // generic
bike?:BikeType    // optional generic 
}
// device interface
interface D {
    brand:string;
    model:string;
}
// SmartWatch type
interface SmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

// Bike type
interface Bike {
  brand: string;
  model: string;
  cc: number;
}

// ✅ Example Developer with 2 Generic Types
const developer: DeveloperProfile2<SmartWatch, Bike> = {
  name: "Anamol Hasan",
  salary: 100000,
  device: {
    brand: "Apple",
    model: "MacBook Pro 16",
  },
  smartWatch: {
    heartRate: "75 bpm",
    stopWatch: true,
  },
  bike: {
    brand: "Honda",
    model: "CBR 500R",
    cc: 500,
  },
};
