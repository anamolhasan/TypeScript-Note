

// interface Person1 {
//     name:string;
//     id:131
// }
// interface User <T> {
//     device:Device;
//     person:Person1
// }
// type Device = {
//     model:number,
//     brand:string
// }


// constraint (extends)

interface Person {
    name:string;
    age:number
}

const constraint = <T extends Person>(value:T) => {
    return value
}

const User = {
    name:'Anamol Hasan',
    age:1322,
    address:'buishar'
}
constraint(User)

// keyof


// union type 

type UserRoleType = 'Admin' | 'Editor' | 'Viewer'
const checkAccessByType = (role:UserRoleType) => {
    if(role === 'Admin') return 'Full Access Granted!'
    if(role === 'Editor') return 'Limited Access Granted'
    return 'view Only Access!'
}
console.log(checkAccessByType('Admin'))

// enum
enum UserRoleEnum {
    Admin = "Admin",
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const checkAccessByEnum = (role:UserRoleEnum) => {
     if(role === UserRoleEnum.Admin) return 'Full Access Granted!';
     if(role === UserRoleEnum.Editor) return 'Limited Access Granted!'
     return 'Viewer only Access!'
}
console.log(checkAccessByEnum(UserRoleEnum.Admin))