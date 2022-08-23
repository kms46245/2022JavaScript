//4.3 static (실행을 위해 앞부분 재작성)
class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
        // '-' number타입의 연산이가능 -> 아래의 valueOf나 심볼에서 넘버타입은 viewcnt를
        // 이용하도록 했으니 조회수를 비교하게 된다.  
    }

    toString() {
        return this.title
    }

    valueOf(){
        return this.viewCnt
    }

    // 심볼과 삼항연산자를 이용해 넘버일 경우 viewcnt 그외엔 title로 받게 했다.
    // 그러므로 위의 2개의 코드는 중복이 되는거지만 공부를 위해 남겨둠
    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publisher) // static 변수는 class.변수로 바로 콜 가능

Article.address = 'seoul'   // static 변수를 선언할 시, 추가 가능
console.log(Article.address)

Article.getPrice = () => 2000   // static 메서드도 마찬가지
console.log(Article.getPrice())

let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))    // 조회수를 비교하게된다.
//과제 console.log(article1)의 결과가 java가 출력 되도록하라.
//과제 기준은 toString()과 valueOf()가 살아있을때 가정
console.log(`${article1}`)
console.log(article1 + '')

//static 변수는 객체에 있는 것이 아니라, 클래스에 존재한다.
console.log(article1.publisher, article1.address, article1.compare)
//반대도 마찬가지로 클래스에서 객체의 요소는 존재하지않는다.
console.log(Article.title, Article.viewCnt)

//-------------------------------------------------------
console.log(Object.keys(Article))   // 클래스 요소 - publisher, address, getPrice()
console.log(Article.prototype)      // 클래스의 프로토타입 요소 - 생성자, tostring valueof symbol
console.log(Object.keys(article1))  // 클래스로 만든 객체의 요소 - title, viewcnt

let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)    // sort - 안의 원소들을 정렬한다.
// compare의 값이 a - b의 개념으로 다가가니 오름차순으로 정렬되었다.
console.log(articles)

Article.compare = (a, b) => b - a
// compare의 값이 b - a의 개념으로 들어갈때는 내림차순으로 정렬되었다.
articles.sort(Article.compare)
console.log(articles)
//이로써 알수있는것은 함수식에따라 오름차순 내림차순을 정렬한다.


//4.4 protected
class CoffeeMachine {
    waterAmount // 클래스의 속성이 아닌 객체의 속성이다(82번째 줄 이어서)

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine)) //여기에선 속성이 나오지않는다.
console.log(CoffeeMachine.prototype)    // 프로토타입의 속성도 아니다.

let machine = new CoffeeMachine(220)
console.log(machine)    // machine 객체에는 waterAmount가 존재한다.

machine.waterAmount = 1
machine.voltage = 110
console.log(machine)    // machine의 속성을 직접 추가/수정 할수 있다.

//
CoffeeMachine = class {
    _waterAmount        // _... - protected의 성격을 띈다

    //accessor(getter, setter)를 만드는건 _을 뗀 이름으로 지어준다.
    get waterAmount() { //protected를 불러오기 위한 getter
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {  //protected값의 변경을 위한 setter
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype)    // waterAmount가 이전과 달리 프로토타입에서 생성.

machine = new CoffeeMachine()
console.log(machine)
// 여기서 말하는 waterAmount는 getter/setter를 불러온것이다.
// -> 이것을 <Accessor>라고하고 그것을 프로토타입이 저장하는것

machine.waterAmount = 1
console.log(machine)    // 1이아닌 setter를 불러 2 * waterAmount 사용
console.log(machine.waterAmount) // getter로 불러왔기때문에 100추가

machine._waterAmount = 11 // accessor를 쓰겠다는 의미를 가지지않기때문에 그대로 적용
console.log(machine._waterAmount)   // accessor를 이용하지않고 불러옴


// 4.5 private
class CoffeeMachine2 {
    #waterAmount    //#... - private의 속성을 띔

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine2)
console.log(CoffeeMachine2.prototype)    // protected와 마찬가지로 accessor는 프로토타입이 가진다.

machine.waterAmount = 1
console.log(machine.waterAmount)    // accessor를 이용함

//machine.#waterAmount = 1 // 구문에러 - accessor를 이용해 접근하라고 명시


//4.6 instanceof
class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(a instanceof A, a instanceof B, a instanceof Object)
// instanceof - 해당객체가 해당 클래스에서 생성되었는지 확인가능
console.log(b instanceof A, b instanceof B, b instanceof Object)
// b는 A를 부모클래스로 가지기에 전부 true

console.log(typeof a, typeof b) // 객체 -> object
console.log(typeof A, typeof B) // 클래스 -> function



//5.1 try
let json = '{"name": "john", "age" : 30}'
//주의) json문법을 사용할 시, 스트링타입을 기술할때에는 ""사용
let user = JSON.parse(json) // parse -> user객체로 변환
console.log(typeof json, typeof user)

json = '{age: 30}'
//JSON.parse(json)  // 구문오류 - ""로 문법을 지키라고 명시

//런타임에러를 통해 앱이 죽지않도록 try(예외처리)를 한다.
try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}   // 앱이 죽었을때 나는 오류메세지의 순서가 이렇다


//5.2 throw
json = '{"age": 30}'

try {
    user = JSON.parse(json)

    //과제] user 객체가 준비되면, user.age를 출력하라.
    //answer
    user && console.log(user.age)
    //my_answer -> 같은 의미를 가짐
    if(user) console.log(user.age)

    if(user.name) console.log(user.name)
    else throw new SyntaxError('user.name이 없습니다.')
} catch(e) {
    if(e instanceof SyntaxError)
        console.log("ERROR: "+ e.message)
    else throw e
}


//5.3 finally
function laugh(cnt) {
    //음수이거나 자연수가 아닌경우
    if(cnt <= 0 || Math.trunc(cnt) != cnt)
        throw new Error('반복횟수는 자연수여야합니다.')
        //Error -> Error클래스중 제일 상위의 클래스

    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '

    return phrase
}

let diff
let start = Date.now()

try{
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { //try, catch 어느것이 걸리든 마지막으로 실행해야하는 부분 명시
    diff = Date.now() - start
}

console.log(`경과시간: ${diff}ms`)


//6.1 collection
//원소에 특별한 제약없이 함수,클래스도 값으로 취급하기때문에 이런 배열이 가능하다.
let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

//특별한 값들도 각원소가 될 수 있다.
arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr) // arr[1]은 없으므로 undef이기에 ...으로 처리됐다.
console.log(arr[1])

//2차원 배열(matrix)
let matrix = [
    [1, 2],
    [3, 4]
]

// 배열이 가진 method
a = [1, 2]
b = [2, 3]
let c = a.concat(b) // concat - 배열a에 배열b를 합쳐 하나로만든다.
console.log(c)

arr = []
arr.push(1) // push - 할당연산자를 사용하지않고 요소를 삽입
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())   // pop - stack의 방식으로 마지막값부터 꺼낸다.
console.log(arr)


arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // shift - FIFO(선입선출)의 방식으로 첫번째값부터 꺼낸다.

a = [0, 1, 2]
b = a.slice(1)  // slice - index부터 마지막까지 잘라내서 리턴(값을 직접 자르는게 아니다.)
console.log(b, a)

arr = [0, 7, 8 ,5]
arr.splice(1, 2, 1, 2, 3, 4)    // splice - 1번째 인덱스부터 2번째 인덱스만큼 그 이후 파라미터의 값들을 넣는다.


arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))   // indexOf - 해당값이 어느 인덱스에 들어있는지 확인

arr.splice(arr.indexOf('b'))    // splice에서 첫번째 인덱스만 기술하면 기준으로 끝까지 잘라낸다.
console.log(arr)
// slice와 splice의 차이 - 리턴의 유무 -> splice는 리턴이없어서 객체를 직접 건드린다.
//                                       slice는 리턴을 하므로 객체를 건드리지않고 값을 리턴한다.

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = [4, 3, 2, 1]
let s = arr.sort()  // sort - 해당배열을 오름차순으로 정렬한뒤, 정렬된 값을 리턴
console.log(arr, s) // 값 변경과 리턴을 동시에 한다.

//과제] s가 arr인지, 확인하라
console.log(s == arr)

arr = [8, 11, 22, 34, 9]    // sort는 원소를 string type으로 취급하고있다.
console.log(arr.sort())     // 그러므로 맨앞자리수를 기준으로 정렬 한것이다.

console.log(arr.sort((a, b) => a - b))  // 이전에 배운(5장에서) 식을 이용하면, 오름차순과
console.log(arr.sort((a, b) => b - a))  // 내림차순으로 정렬할 수 있다.


//iterating
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
    arr[i] = e.toUpperCase()    // toUpperCase - 각 배열의 원소를 대문자로 변환
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) // map - map에서 하나씩 원소를 읽은뒤, 괄호안의 조건을 적용시켜 새로운 배열로 리턴
console.log(arr, arr2)

//
let group = {   // 여기서의 그룹은 namespace의 역할로 하고 하나의 클래스같은 개념으로보면 이해가 쉽다.
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
let greeting = arr.join()   // join - 각각의 원소를 붙혀 하나의 문자로 만든다.
console.log(greeting)   // 이때, 기준의 원소 하나하나를 token이라고 한다.
console.log(typeof greeting)

console.log(arr.join('/'))  // 구분자를 바꾸고 싶을때에는 직접 파라미터를 넣어준다.
// 과제] join()에서 'helloworld2'를 return하라.
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()    // toString - 배열을 스트링타입으로 변환
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr) //JSON을 이용해 문자를 다시 배열로 되돌릴수 있다.
console.log(str, '/', typeof str)




//6.2 iterable
let range = {
    from: 1,
    to: 3,
    [Symbol.iterator](){    // Symbol.iterato -current 객체를 리턴
        this.current = this.from
        return this
    },

    next(){
        if(this.current <= this.to)
            return{
                done: false,
                value: this.current++   // value -  출력될값이다.
            }
        else
            return  {
                done: true // done - ture이면 iterating이 끝난다. -> next()를 진행하지않는다.
            }
    }
}

for(let num of range) // for(let .. of 객체)를 통해 iterator를 실행/반복
    console.log(num)


//Generator - iterator의 상위(최신)버전
function* generator() {             // generator를 만들 때는 function에 *을 붙힌다.
    let val = 1
    while(val <= 3) yield val++ //yield의 값을 반복해서 리턴
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, typeof g)    // generator는 하나의 객체로 인식된다.

function* gen() {
    // yield를 여러개 사용 할 수있다.
    yield* generator()  // *을 붙히는건 객체를 부를때
    yield* ['a', 'b']
    yield 9
}

for(let val of gen()){
    console.log(val)
}



//6.3 map
let map = new Map()

map.set('1', 'hello')   // map에 값을 입력할 때에는, 'index', 'value'로 입력한다.
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))
//읽어들일때는 index를 쓴다.
console.log(map.has('1'), map.has(true), map.has(false))    // has - map에 해당 index에 key가 있는지 확인
console.log(map.size)   // size - map에 들어있는 value값의 갯수

console.log(map.delete(1), map.delete(2))   // delete(index) - map의 값삭제 삭제되면 true
console.log(map)

map.clear() // clear - map 요소 전부 삭제
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela') // chaining으로 기술 가능
console.log(map)

//
let greens = new Map([
    ['cucumber', 500],  // 생성자로 만들 수 도 있다. 매트릭스를 이용함
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys() // keys() - 해당맵의 key만을 추출
console.log(keys)

for(let key of keys)// iterator이기때문에 iterating도 가능
    console.log(key)

let values = greens.values()    // values() - 해당맵의 value만을 추출
console.log(values)

for(let value of values)    // 똑같이 iterating도 가능
    console.log(value)

greens.forEach((val, key) => console.log(key, val))
//forEach 사용시 value, key(,map)순으로 작성

//객체를 맵으로 이용할땐 먼저 배열로 바꾼뒤 map에넣는다.
user = {
    name:'aiden',
    age: 50
}

entries = Object.entries(user)  // entries() - 해당객체를 배열로만듬
console.log(entries)
console.log(new Map(entries))

// 반대로 map을 객체로 변환
map = new Map()
map.set('apple', 1).set('orange', 2).set('pear', 3)

fruits = Object.fromEntries(map)    //fromEntries(...) Map...을 객체에 넣는다.
console.log(fruits)





//6.4 set
let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

//set의 특징) key가없기때문에 중복된 value는 없다.

set.add(user1).add(user2).add(user1)
//user1을 중복해서 넣더라도 값은 하나뿐이다.
console.log(set)

console.log(set.size)   // size - 원소의 갯수
console.log(set.has(user1),set.has(user2),set.has({}))
// has(...) - ...객체를 세트가 가지고있는지 확인

console.log(set.delete(user1))  // delete - 원소삭제
console.log(set)

//
set.add(user1)

for(let user of set)    // set도 iterating가능
    console.log(user)

set.forEach(val => console.log(val))    // forEach는 set에도 있다.(map과는 사용법이 다름)

//
set = new Set([1, 2, 3])    //생성자에서 대입가능.
console.log(set)

arr = Array.from(set)   // Array.from(...) -...세트를 배열로 변환
console.log(arr)

set = new Set('hello')
console.log(set)    // set의 특징때문에 중복된 value는 제거




//6.5 destruct
arr = ['ilya', 'kantor']
let [name, surname] = arr   // [value, ...] - 배열을 value에 담는다.
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)   // 배열보다 적은 value의 갯수를 넣으면 index순으로 나머지배열값은 버려진다.

let [three, four] = [3]
console.log(three, four);    // 반대의 경우는 나머지 value는 undef가 된다.

[one, , three] = [1, 2, 3, 4]
console.log(one, three) // 중간에 빈값을 넣으면 해당 순서의파라미터는 건너뛴다.

//
s = 'i am'
let [a1, b1, c1] = s
console.log(a1, b1, c1) // 문자열은 띄워쓰기 까지 포함해서 저장

i = s.split(' ')    // split(...) - ...을 기준으로 배열을 쪼개서 저장
console.log(i);

[a, b] = i
console.log(a, b)

//
user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user)   //객체의 속성에 나눠서 속성값으로 저장할수 있다.

user = {
    name: 'oscar',
    age: 21
}

entries = Object.entries(user)  // Object.entries(...) - ...객체의 속성을 배열화
console.log(entries)

for(let [key, value] of entries)    // destruct로 iterating도 가능
    console.log(key, value)

//
map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map)
    console.log(key, val)   // 같은결과지만 map으로 iterating을 한것이다.

//기존의 tmp를 이용한 교체를 쓸 필요 없이, destruct를 이용하면 훨씬 간편해진다.
let guest = 'jane'
let admin = 'pete';

console.log(guest, admin);
[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, tow, ...rest] = [1, 2, 3, 4]  // ...rest를 이용하면 이름을 사용할때 맞춰줄수있다.
console.log(one, two, three, four);

//
[name, surname='annonymous'] = ['john'] // 기본값을 설정 할 수 있다.
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options    // 객체에 destruct를 사용할 때에는 {}를 사용한다.
console.log(title, height, width);

({title, height, width} = options)  // 다시 사용 할 때에는 ()로 묶어준다.

let {width: w, height: h} = options// 해당속성의 이름을 지정해 줄수 있다.
console.log(w, h)

let {title: t, ...other} = options // ...other - 대입해준값의 제외한 나머지값들을 other에 넣는다.
console.log(t, other)

let {title: subject, wide=1000} = options //key가없을때의 기본값도 지정가능
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

//과제] bread에서 size와 items를 추출하라.
let {size, items} = bread
console.log(size, items)