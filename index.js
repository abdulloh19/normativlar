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
let age = [{ age: 20 }, { age: 15 }, { age: 22 }, { age: 33 }];
age.sort((a,b) => {
  return(a.age === b.age && a.name.localeCompare(b.name) || a.age - b.age)
});

console.log(age);
