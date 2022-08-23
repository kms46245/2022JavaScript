let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}  

// set의 특징) key가 없기때문에 중복된 value가 없다.

set.add(user1).add(user2).add(user1)    // user1을 중복시켜서 넣더라도 값은 1번만들어간다.
console.log(set)

console.log(set.size)       // size - 원소의 갯수
console.log(set.has(user1), set.has(user2), set.has({})) // has(...) - ...가 있는가

console.log(set.delete(user1))  // delete - 원소 삭제
console.log(set)

//
set.add(user1)

for(let user of set)        // set도 iterating 가능
    console.log(user)

set.forEach(val => console.log(val))    // forEach는 set에도 있다.(map과는 사용방식이다름)

//
set = new Set([1, 2, 3])     //생성자에서 대입가능.
console.log(set)

//
let arr = Array.from(set)   // Array.from(...) - ...세트를 배열로 변환
console.log(arr)

set = new Set('hello')
console.log(set)    // set의 특징때문에 중복된 value는 제거가 되었다.