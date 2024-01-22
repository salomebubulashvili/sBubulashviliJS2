"use strict";

// 1

for (let i = 5; i < 100; i++) {
    console.log(i);
    
}

// 2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    const x = array1[i];
    if (x > 0 && x < 10) {
        console.log(x);
    }
}

for (let item of array1) {
    if (item > 0 && item < 10) {
        console.log(item);
    }
}

// 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if(element === 5){
    console.log('არის')
    break;
    }
}

for (let item of array2) {
    if( item == 5) {
        console.log('არის')
        break;
    }
    console.log(item)
}

// 4

let array3= [1, 2, 3, 4, 5];

let sum = 0;

for (let index = 0; index < array3.length; index++) {
    sum += array3[index];
    
}
console.log(sum);

// 5

let array4= [1, 2, 3, 4, 5];

let arithmeticSum = 0;

for (let i = 0; i < array4.length; i++) {
    arithmeticSum += array4[i] / array4.length;
    
}

console.log(arithmeticSum);

// 6

let array5 = [1, 2, 3, 7, 6, 9];

for( let item of array5) {
    if ( item === 7){
    continue;
    }
    console.log(item);
}

// 7

let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'

};

console.log(user.studentstatus);

// 8

let user2 = {
    name: 'anna',
    age: 20,
    atudentstatus: 'active'
};

if( user2.age < 18 && studentstatus === 'active'){
    console.log( 'hello user')
}else if (user2.name === 'levan') {
    console.log('hello levan')
}else if(user2.studentstatus === 'active' || user2.age < 25) {
    console.log('hello anna')
}else {
    console.log('error')
};

let result = user2.age < 18 && user2.studentstatus === 'active' ? 'hello user' : user2.name === 'levan' ? 'hello levan' : user2.studentstatus === 'active' || user2.age < 25 ? 'hello anna' : 'error';

console.log(result);

// 9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for (let x = 0; x < array6.length; x++) {
    const element = array6[x];
    
    if(element % 2 === 0) {
        console.log(element)
    }
}
for ( let item of array6) {
    if ( item % 2 ===0){
        console.log(item)
    }
}

// 10

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];

for (let index = 0; index < users.length; index++) {
    const element = users[index];
    
    if(element.status === true) {
        console.log(element);
    }
}

for( let item of users) {
    if(item.status === true) {
        console.log(item)
    }
}

// 11

let array7 = [32, 14, 10, 'hello', null, '40', 50];

for (let x = 0; x < array7.length; x++) {
    const element = array7[x];
    if( element % 5 === 0 && typeof element === 'number') {
        console.log(element)
    }
}
// სანამ typeof ოპერატორს დავუწერდი, გამომიტანა 10 null 40 50 და ვერ მივხვდი, რატომ null?

for(let item of array7) {
    if(item % 5 === 0 && typeof item === 'number'){
        console.log(item)
    }
}

// 12

let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (let x = 0; x < array8.length; x++) {
    const element = array8[x];
    for (let y = 0; y < element.length; y++) {
        const value = element[y];
        if(value > 0)
        console.log(value)
        
    }
}

for(let item of array8){
    for(let element of item){
        if(element > 0)
        console.log(element)
    }
}