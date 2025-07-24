// 2:1

// function repetion(str) {
//   let view = new Set()
//   for(let a of str) {
//     if(view.has(a)) {
//       return a
//     }
//     view.add(a)
//   }
//   return null
// }
// console.log(repetion("salom"));
// console.log(repetion("assalam"));
// console.log(repetion("muhammad"));

// 2:2
// let age = [{ age: 20 }, { age: 15 }, { age: 22 }, { age: 33 }];
// age.sort((a,b) => {
//   return(a.age === b.age && a.name.localeCompare(b.name) || a.age - b.age)
// });

// console.log(age);

//2:3 js
// for(let i = 1; i <= 20; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if(i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//2:4 js
// let arr = [1, 5, 7, 9];
// if(arr.indexOf(7) !== -1) {
//   console.log(arr.indexOf(7));
// } else {
//   console.log(-1);
// }

// normativ savollar No1
// let num = 111
// if (num % 2 === 0) {
// 	console.log('juft son')
// } else {
// 	console.log('toq son')
// }
// savol No2

// let son = 1
// if (son > 0) {
// 	console.log(`musbat son: ${son}`)
// } else if (son < 0) {
// 	console.log(`manfiy son: ${son}`)
// } else {
// 	console.log('siz kiritgan son 0 ga teng')
// }
//  savol No3
// function bigNum(a, b) {
// 	if (a > b) {
// 		return a
// 	} else if (a < b) {
// 		return b
// 	}
// }
// bigNum(5, 10)
// console.log(bigNum(51, 10))

// savol No4
// let baho = +prompt('Nechi baho olganingizni yozing: ')
// if (baho >= 60 && baho <= 69) {
// 	alert("Siz 3 baho bilan O'tdingiz")
// } else if (baho >= 70 && baho <= 89) {
// 	alert("Siz 4 baho bilan o'tdingiz")
// } else if (baho >= 90 && baho <= 100) {
// 	alert("Siz 5 baho bilan o'tdingiz")
// } else {
// 	alert("Siz 2 baho bilan o'ta olmadingiz")
// }

// savol No5
// let userLogin = 'ustudy2025'
// let password = 'u9frontend'
// if (userLogin === 'ustudy2025' && password === 'u9frontend') {
// 	console.log('Xush kelibsiz')
// } else if (userLogin !== 'ustudy2025' && password === 'u9frontend') {
// 	console.log('Login xato')
// } else if (userLogin === 'ustudy2025' && password !== 'u9frontend') {
// 	console.log('Parol xato')
// } else {
// 	console.log('Login va Password xato')
// }

// savol No1
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20]
// let res = num.filter((a) => a % 2/8 === 0)
// console.log(res);

// savol No2
// let sum = 0
// for (let i = 1; i <= 10; i++) {
// 	sum += i
// 	console.log(i)
// }

//savol No3
// let numbers = [7, -11, -2, 10, 24, 11,15,18]
// let positiveNumbers = numbers.filter(num => num > 0 && num % 2 === 0).reduce((acc,cur) => acc + cur, 0);
// console.log(positiveNumbers);

// savol No4
// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log(i)
// 	}
// }

// savol No5
// let arr = [2,-15,-2,13,18]
// let res = Math.max(...arr)
// let min = Math.min(...arr);
// console.log(`Eng katta son: ${res} Eng kichik son: ${min}`);

//savol No1
// let arr = [3,7,2,11,5]
// let lastE = arr.pop();
// let res = lastE * 5
// arr.unshift(res);
// console.log(arr);

// savol No2
// let pairNum = [9, 8, 5, 1, 6, 4]
// let res = pairNum.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0)
// console.log(res);

// savol No3
// let gathered = [1, 33, 0, 22, -11, -24, 10]
// let res = gathered.filter(n => n > 0).reduce((a, b) => a + b, 0)
// console.log(res)

//savol No4
// let arr = [6, 1, 3, 5, 6, 0, 4]
// let sort = arr.sort((a, b) => a - b)
// let res = sort.filter(num => num > 2 ).map((a) => a ** 2)
// console.log(res)

// savol No5
// let arrays = [1, [2, 3], [4], [5, 6, 7]]
// let flatArray = arrays.flat().filter(a => a % 2 !== 0)
// console.log(flatArray)
