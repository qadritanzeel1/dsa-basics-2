//Starting DSA from complete basics 

//sum of two integers 

// let a=10;
// let b =20;

// console.log(a+b)

// we can also do like this 
// let d=10;
// let e =20;
// let sum = a+b

// console.log(sum)

// below is how we take the value from the user

// let n = Number(prompt("Please enter a number"));

// console.log(n)


// swap two variables via three methods

// 1st with extra variable

// let a = 10;
// let b = 20;
// console.log(a,b);
// let temp;

// temp=a;
// a=b;
// b=temp;
// console.log(a,b)

//2nd without extra variable only methamatical operation



let a = 10;
let b = 20;

// a = a+b // 10 + 20 = 30;
// b = a-b // 30 - 20 = 10;
// a = a-b // 30 - 10 = 20 

// a=20 b = 10

// console.log(a,b);

// 3rd method is destructuring assignment

[a,b] = [b,a]

console.log(a,b)
