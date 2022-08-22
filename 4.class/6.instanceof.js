class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(a instanceof A, a instanceof B, a instanceof Object)
// instanceof - 해당 객체가 해당클래스에서 생성된것인지 알수있다.
console.log(b instanceof A, b instanceof B, b instanceof Object)
// b는 A를 부모클래스로 가지고있기때문에 당연히 전부 true다

console.log(typeof a, typeof b) // 객체기에 object
console.log(typeof A, typeof B) // 클래스기에 function