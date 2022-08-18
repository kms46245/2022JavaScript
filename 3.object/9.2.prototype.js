let obj = {}    // {} -> 사실 new Object를 축약해서 쓰는것이다.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)
console.log(' ')

obj = new Object() // 이렇게 만들어지는 것을 {}로 축약해서 사용중이다.
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype._proto__)  // Object의 최초프로토타입의 프로토타입은 null이다.

console.log(obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)  // 해당 코드를 윗줄처럼 축약해서 사용하는것이다.
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)  // 중요) Object를 제외한 모든 타입의 프로토타입의 프로토타입은 Object의 프로토타입을 받는다.
console.log(Object.prototype)           // 그러므로 Object에서 가지고있는 fn들을 전부 사용할 수있는 것이다.
console.log(Array.prototype.__proto__ == Object.prototype)  // 이 둘이 같음으로서 증명된다.

console.log(arr2)
//console.log(arr2.toString())    // 하지만 toString()은 Array에 있는 toString()이 실행되므로  Object에 있는 toString()과는 다른 결과가 나온다.


let one = new Number(1)
console.log(one)        // Number도 마찬가지

function User() {

}

function User() {}
let user = new User()
console.log(user.toString())    // toString이 없는 경우에는 프로토타입을 타고타고가서 Object의 toString을 받아온다.
console.log(obj.toString())