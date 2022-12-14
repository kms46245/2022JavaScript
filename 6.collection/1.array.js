//원소에 특별한 제한없이 함수나 클래스도 값으로 취급하기에 가능하다.
let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

//특별한 값들도 각 원소가 될수있다.
arr = [null, undefined, NaN]
console.log(arr)


arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)    // arr[1]은 없으므로 undef이기에 ...으로 처리했다.
console.log(arr[1])


// 2차원 배열(matrix)
let matrix = [
    [1, 2],
    [3, 4]
]

// 배열이 가진 method
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)     // concat - 두가지 배열을 합쳐 하나로 만든다.
console.log(c)

arr = []
arr.push(1) // push - 할당연산자를 사용하지않고 요소를 넣을 수 있다.
arr.push(2) 
arr.push(3)

console.log(arr)
console.log(arr.pop())  // pop - stack의 방식으로 마지막 값부터 꺼낸다.
console.log(arr)

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // shift - 선입선출의 방식으로 첫번째 값부터 꺼낸다.
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1)  // slice - index부터 마지막까지 잘라내서 리턴 (값을 직접 자르는게 아님)
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4)    // splice - 1번째 인덱스부터 2번째 인덱스만큼 그 후 파라미터의 값들을 넣는다.
console.log(arr)


//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))   // indexOf - 해당값이 어느 인덱스에 들어있는지 확인

arr.splice(arr.indexOf('b'))    // splice에서 첫번째 인덱스만 기술하면 기준으로부터 끝까지 잘라낸다.
console.log(arr)
// slice와 splice의 차이 - 리턴의 유무 -> splice는 리턴이 없어서 객체를 직접 건드린다.
//                                       slice는 리턴을 하므로 객체를 건드리지않는다.

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1) 
console.log(arr)

//
arr = [4, 3, 2, 1]
let s = arr.sort()      // sort - 해당 배열을 오름차순으로 정렬을 한뒤 그 정렬된 값을 리턴
console.log(arr, s)     // 값변경과 리턴을 동시에한다.

//과제] s가 arr인지, 확인하라
console.log(s == arr)

arr = [8, 11, 22, 34, 9]    // sort는 원소를 string type으로 취급하고있다.
console.log(arr.sort())     // 그러므로 맨앞자리수를 기준으로 정렬을 한것이다.

console.log(arr.sort((a, b) => a - b))  // 이전에 배운(5장) 식을 이용하면 오름차순과
console.log(arr.sort((a, b) => b - a))  // 내림차순으로 정렬할 수 있다.

// iterating
arr = ['a', 'b', 'c']
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제] 원소를 출력하라.
for(let key in arr) console.log(arr[key])

// let ... of ... - in과 다르게 인덱스를 포함한 value를 리턴
for(let val of arr) console.log(val)


//
function print(e) {
    console.log(e)
}

function print2(e, i){
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()    // toUpperCase() - 각 배열의 원소를 대문자로 변환
}

//
arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)    // map - map에서 하나씩 원소를 읽은뒤 해당 조건을 적용시켜 새로운 배열로 리턴한다.
console.log(arr, arr2)

//
let group = {       // 여기서의 group은 namespace의 역할로 하고 하나의 클래스같은 개념으로 보면 편하다.
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()


//
arr = ['hello', 'world', 2]
let greeting = arr.join()       // join - 각각의 원소를 붙혀 하나의 문자로 만든다.
console.log(greeting)       // 이때 ,기준의 원소 하나하나를 token이라고한다.
console.log(typeof greeting)

console.log(arr.join('/'))  // 구분자를 바꾸고싶을때는 직접 파라미터를 넣어준다.
// 과제: join()에서 'helloworld2'를 return 하라.
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()    // toString - 배열을 스트링타입으로 변환
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr)   // json을 이용해 문자를 다시 배열로 되돌릴수 있다.
console.log(str, '/', typeof str)
