"use strict";
// =====================================================
// 🧠 1. Type Assertion
// =====================================================
Object.defineProperty(exports, "__esModule", { value: true });
/*
✅ Type Assertion কি?

TypeScript কে বলা হয় যে:
👉 "আমি এই ভ্যারিয়েবলের টাইপ জানি — তুমি চিন্তা কোরো না!"

মানে TypeScript আমাদের কথায় বিশ্বাস করবে,
এবং value আসলে যে টাইপ বলেছি সেটাই ধরে নেবে।
*/
/* ================= 🧩 Basic Example ================= */
let data = "Hello";
// এখানে আমরা TypeScript কে বলছি — data হচ্ছে string
let length = data.length;
// console.log(length);
/*
📘 ব্যাখ্যা:
data এর টাইপ any, তাই TypeScript জানে না এটি string কিনা।
(data as string) দিয়ে আমরা TypeScript কে বোঝালাম, “এটা string”।
ফলে `.length` property ব্যবহার করা এখন নিরাপদ।
*/
/* ================= 🧮 Function Example ================= */
const checkStudentInfo = (value) => {
    // Type Checking সহ কাজ
    if (typeof value === "string") {
        return `👨‍🎓 Student name is ${value.toUpperCase()}`;
    }
    else if (typeof value === "number") {
        // Type Assertion ব্যবহার করেও value কে number ধরেছি
        if (value >= 80) {
            return `🏅 Grade: A+`;
        }
        else {
            return `📘 Grade: B`;
        }
    }
    else {
        return "❌ Invalid input type!";
    }
};
// ==================== Function Call ====================
checkStudentInfo("Anamol"); // Assertion: string হিসেবে নিচ্ছে
// console.log(checkStudentInfo(85 as number)); // Assertion: number হিসেবে নিচ্ছে
/*
🎯 এখানে আমরা manually Type Assertion ব্যবহার করেছি:
"Anamol" as string   👉 TypeScript কে বলছি এটা string
85 as number          👉 TypeScript কে বলছি এটা number
*/
/* ================= ⚠️ Wrong Assertion ================= */
/*
TypeScript compile-time এ বিশ্বাস করে,
কিন্তু runtime এ error দিতে পারে যদি Assertion ভুল হয়।
*/
let value = 123;
// ❌ নিচের লাইনটা uncomment করলে runtime এ crash করবে
// console.log((value as string).toUpperCase());
/*
📛 কারণ:
TypeScript ভাবছে value একটা string,
কিন্তু আসলে সেটা number — তাই toUpperCase() নেই।
*/
/* ================= 📘 কখন ব্যবহার করবেন ================= */
/*
✅ Type Assertion ব্যবহার করবেন যখন:
1️. আপনি আসল টাইপ ১০০% নিশ্চিত
2️. TypeScript ভুলভাবে টাইপ infer করেছে
3️. আপনি DOM / third-party API data নিয়ে কাজ করছেন (dynamic data)
*/
/* ================= 🌐 Bonus Example (DOM) ================= */
// const inputElement = document.querySelector("#username") as HTMLInputElement;
// console.log(inputElement.value);
// *********************** practise **************************
const converter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    if (typeof input === "string") {
        const [value] = input.split(" ");
        return `converted ${Number(value) * 1000}`;
    }
};
converter(5);
//# sourceMappingURL=class-01.js.map