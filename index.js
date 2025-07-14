function repetion(str) {
  let view = new Set()
  for(let a of str) {
    if(view.has(a)) {
      return a
    }
    view.add(a)
  }
  return null
}
console.log(repetion("salom"));
console.log(repetion("assalam"));
console.log(repetion("muhammad"));


