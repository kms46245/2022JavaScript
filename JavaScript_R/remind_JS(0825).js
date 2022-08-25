//6.5 destruct(실행을 위해 앞부분 재작성)
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

let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {
    console.log(name, item1, item2)
}

showMenu(menu)



//6.6 date
console.log(Date())
console.log(typeof Date()) // string

let date = new Date()
console.log(date)
console.log(typeof date)    // object
console.log(date.toLocaleDateString())  // 실행하는 국가기준의 날짜

console.log(
    //2022년 8월 25일 14:17 기준
    date.getFullYear(),      // 2022
    date.getMonth(),         // 7 (0 ~ 11로 표현되므로, 7 = 8월)
    date.getDate(),          // 25(0 ~ 30)
    date.getUTCHours(),      // 5 (UTC기준의 시간)
    date.getHours(),         // 14
    date.getMinutes(),       // 17
    date.getSeconds(),       // 22
    date.getMilliseconds(),  // 527(초기준의 milisecond)
    date.getDay()            // 4(0 ~ 6 == 일 ~ 토)
)

console.log(date.getTime())  // 1661404807451ms (현시간을 ms단위로)
console.log(Date.now())      // 1661404851481ms (위와 동일)

date = new Date(0)           // 기준은 1970-01-01 00:00:00
console.log(date)

date = new Date(1000 * 60 * 60 * 24)    // 기준에서 내일
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)   // 기준에서 어제
console.log(date)



//6.7 json
//serialzing
user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)     // value까지 전부 string type으로 전환 > 이것을 serialzing이라고한다.
console.log(json)

user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}

console.log(JSON.stringify(user))   // value안의 또다른 value들도 포함

//
let room = {
    number: 23


}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() {return this.number}   // 해당요소를 이 값으로 치환(함수여도 값으로 치환된다.)
s = JSON.stringify(meetup)
console.log(s)

//parsing - serializing의 반대개념
let manJson = '{"name": "will", "age": 27, "major": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)
console.log(man)
console.log(typeof man)
console.log()



// 7.1~7.3은 개별 파일로 작성
// 8.1 basic
//let promise = new Promise((resolve, reject) => resolve('done'))
                           //ㄴexecutor - promise안의 parameter, 무조건 성공 실패 2개를 받아야한다.
/*
promise.then(console.log, console.log)
           //ㄴresolve  / reject
promise.then(console.log, null)
promise.then(console.log)   // then - resolve일때
promise.catch(console.log)  // catch - reject일때
*/

//과제] 1초 뒤에, resolve하도록 하라.
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log)
*/

//
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result)),
    error => console.log(error)
*/

// 다음 예제를 위해 잠시 주석처리
/*
new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'),2000))
        .then(console.log)  //완성
        .catch(e => console.log(e.message))
        .finally(() => console.log('promise가 생성되었습니다.'))

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
        .then(console.log)
        .catch(e => console.log(e.message)) //미완성
        .finally(() => console.log('promise가 생성되었습니다.'))
*/


//8.2 chaining
/*
new Promise((resolve, reject) => setTimeout(() => {resolve(1), 1000}))
    .then(result => {
        console.log(result) // 1
        return result + 1
        // handler가 리턴한 값은 resolve의 리턴값으로 돌아간다.
    }).then(result => {
        console.log(result)  // 2
        return result + 1
    }).then(console.log)    //3
*/

// 8.3 try
// promise에서 resolve나 reject를 실행하다 error가 발생한것을 연출했다.
new Promise((resolve, reject) => reject(new Error(2)))
    .catch(e => console.log(e.message)) // catch는 원래 reject를 처리할때 사용한다.

new Promise((resolve, reject) => {throw new Error(1)})
    .catch(e => console.log(e.message)) // 하지만 catch는 error가 났을때도 처리한다.

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message))
    // 위처럼 executor에서 난 에러 포함, handler 에러도 잡는다.

    new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message))
    .then(result => console.log(result))    // 순서를 바꾸어 then을 실행하면, catch를 실행하고서 다른사례도 실행하고있다.
                                            // 그렇기에 의도한것이 아니라면 catch는 마지막으로 쓰는것이 좋다.
                                            
new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {       // 에러가 났을 경우 가장 가까운 핸들러인 여기로 넘어간다.
        if(e instanceof URIError) {   // URIError - url에 관해 에러가 났을때 사용되는 클래스
        } else {
            console.log(e.message)  // 결과 - 5
            throw e
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 결과 - 5
    // 실행된 then에서 가장 가까운 catch핸들러가 또있기 때문에 then이 넘어가고 해당 catch 구문이 실행된다.
    console.log()



// 8.4. async
async function f() {  // promise의 상위버전
    // async가 실행되면 자동으로 promise로 만들어준다.
return 1    // 여기에서의 return값은 promise의 result값이 된다.
}                              

f().then(console.log)

f = async function() {
return Promise.resolve(2)
}
f().then(console.log)   // resolve의 값도 직접 사용할 수있다.

f = async function() {
return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message))  // reject도 마찬가지

//
f = async function() {
let promise = new Promise((resolve, reject) => {
setTimeout(() => resolve(4), 1000)
})
let result = await promise  // await - 다음명령문이 실행될때까지 promise를 지연시킨다.
                    //         일반 fn에선 실행할 수 없다.
console.log(result)         // 만약 await가 적용되지않으면 값이 undef로 나와한다.
}
f() // 실행하니 정상적으로 1초를 기다리고 4가나온것을 확인했다.


//

class Waiter {
async wait() { 
return await Promise.resolve('cooked bread')
}
}

new Waiter().wait().then(console.log)   // 필요한 경우에는 해당 클래스의 프로미스가 끝나기전까지 작동을 중지 시킬수 있다.
