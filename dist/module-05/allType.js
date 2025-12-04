"use strict";
// ============================================================
//  TypeScript এ কত ধরনের টাইপ আছে ?
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
/*
 TypeScript এ fixed number নেই, কারণ প্রতিনিয়ত নতুন নতুন টাইপ ফিচার যোগ হয়।
কিন্তু মূল ক্যাটাগরি অনুযায়ী ৮ - ১০ টা বড় বড় টাইপ গ্রুপ মনে রাখলেই পুরো TypeScript বোঝা যায় ।

TypeScript এর প্রধান প্রধান টাইপগুলো :

1. Primitive Types -> (বেসিক টাইপ)
----------------------------------------------------------
string, number, boolean, null, undefined, symbol, bigint

2. Object Type ->
-----------------------------------------------------------
object, array, function, classes

3. Literal Types
-----------------------------------------------------------
Exact value টাইপ হিসেবে ধরা হয়
উদাহরণ:
'Hello'
23
true

4.Union Types
-------------------------------------------------------------
একাধিক টাইপের মধ্যে একটি value নিতে পারে
উদাহরন:  string | number

5. Intersection Types
-------------------------------------------------------------
একাধিক টাইপ একত্রিত করে নতুন টাইপ তৈরি করে
উদাহরণ: TypeA & TypeB

6. Any, Unknown, Never
-------------------------------------------------------------
any      -> সবকিছুই allowed
unknown  -> safe any
never    -> কখনো return হয় না

7. Type Alias & Interface
--------------------------------------------------------------
type User = { ... }
interface User { ... }

8. Tuple Types
-------------------------------------------------------------
Fixed length array যেখানে প্রত্যেক element এর type নির্দিষ্ট
উদাহারণ:
const student: [string, number] = ['anam', 344]

9. Enum Types
----------------------------------------------------------
Predefined set of named constants
উদাহারণ:
enum Role {User, Admin}

10. Generics
---------------------------------------------------------
Reusable type template
উদাহারণ:
Array<T>
Promise<T>


সংক্ষেপে:
TypeScript এ primitive, object, literal, union, intersection, tuple, enum, generics, এবং special types (any, unknown, never) মিলিয়ে প্রায় ১০ ধরনের টাইপ গ্রুপ কাজে লাগে।


*/ 
//# sourceMappingURL=allType.js.map