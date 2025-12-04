"use strict";
// =====================================================
// ✅ GENERIC with INTERFACE (সহজ ব্যাখ্যা)
// =====================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ Single Object হিসেবে Generic ব্যবহার
const userResponse = {
    data: { id: 1, name: 'Anam' },
    age: 200
};
// ✅ Array হিসেবে Generic ব্যবহার
const postsResponse = {
    data: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
    ],
    age: 200
};
// simple details
const product1 = {
    id: 121,
    name: 'Laptop',
    details: {
        price: 54866,
        inStock: true
    }
};
// Complex details 
const product2 = {
    id: 102,
    name: 'Smartphone',
    details: {
        price: 120000,
        colors: ['black', 'White', 'blue'],
        warranty: '1 year'
    }
};
// Example Developer
const poorDeveloper = {
    name: 'Anamol Hasan',
    salary: 100000,
    device: {
        brand: 'Apple',
        model: 75656
    },
    smartWatch: {
        heartRate: '32 bpm',
        stopWatch: true
    }
};
// Example Developer
const richDeveloper = {
    name: 'Anamol Hasan',
    salary: 100000,
    device: {
        brand: 'Apple',
        model: 96786
    },
    smartWatch: {
        stopWatch: true,
        clock: false
    }
};
// ✅ Example Developer with 2 Generic Types
const developer = {
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
//# sourceMappingURL=class-04.js.map