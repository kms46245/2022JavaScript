let map = new Map()

map.set('1', 'hello')   // map에 값을 입력할때에는 'index','value'로 입력한다.
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))   // 읽어들일때는 'index'의 값을 쓴다.
console.log(map.has('1'), map.has(true), map.has(false))  //has - map에 해당 key가 존재하는지 확인한다.
console.log(map.size) // size - map에 들어있는 value값의 갯수

console.log(map.delete(1), map.delete(2))   // delete(index) - map의 값 삭제 -> true시 삭제됨.
console.log(map)

map.clear()         // clear - map 요소 전부 삭제
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')    // chainning이 가능
console.log(map)

//
let greens = new Map([
    ['cucumber', 500],  // 생성자로 만들수도있다. 배열의 배열로 이용
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys()    // keys() - 해당 맵의 key만을 추출
console.log(keys)

for(let key of keys)    // iterator이기때문에 iterating도 가능
    console.log(key)

let values = greens.values() // values() - 해당 맵의 value만을 추출
console.log(values)

for(let value of values)    // 마찬가지로 iterating도 가능
    console.log(value)

greens.forEach((val, key) => console.log(key, val))   // forEach 사용시 value, key, map순으로 작성

// 객체를 맵으로 이용할때에는 먼저 배열로 바꾼뒤 map에 넣는다.
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)  // entries() - 해당 객체를 배열화 시킨다.
console.log(entries)
console.log(new Map(entries))

// 반대로 map을 객체로 변환
map = new Map()
map.set('apple', 1).set('orange', 2).set('pear', 3)

fruits = Object.fromEntries(map)    // fromEntries(...) - Map...을 객체에 넣는다.
console.log(fruits)