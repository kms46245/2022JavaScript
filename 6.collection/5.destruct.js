let arr = ['ilya', 'kantor']
let [name, surname] = arr   // [value, ...] - 배열을 value에 담는다.
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)   // 배열보다 적은 value의 갯수를 넣으면 index순으로 나머지 배열값은 버려진다.

let [three, four] = [3]
console.log(three, four);    // 반대로 배열의 파라미터가 적으면 나머지는 undef로 남는다.


[one, , three] = [1, 2, 3, 4]
console.log(one, three) // 중간에 빈값넣으면 해당 순서의 파라미터는 건너뛴다.

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)    // 문자열은 띄워쓰기까지 포함해서 저장된다.

i = s.split(' ')    // split(...) - ...을 기준으로 배열로 쪼개 나눠진다.
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user)   // 객체의 속성에 이름을 나눠서 속성으로 저장

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user) // Object.entries(...) - ...객체의 속성을 배열화
console.log(entries)

for(let [key, value] of entries) console.log(key, value)    // destruct로 iterating도 가능

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val)    // 같은 결과지만 여기는 map으로 iterating을 했다.


// 기존의 tmp를 이용한 교체를 이용할 필요없이 destruct를 하면 훨씬 간편해진다.
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4]  // ...rest를 이용하면 이름을 사용할때 맞춰줄수있다.
console.log(one, two, three);

//
[name, surname='annonymous'] = ['john'] // 값이 없는경우의 기본값을 설정할 수 있다.
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options    // 객체에 destruct를 할 경우는 {}를 하면된다.
console.log(title, height, width);

({title, height, width} = options)  // 다시 사용할때에는 ()로 묶어준다.

let {width: w, height: h} = options // 해당하는 속성의 이름을 임의로 지정해줄 수 있다.
console.log(w, h)

let {title: t, ...other} = options  // ...other - 대입해준 값을 제외한 나머지 값들을 other에 넣는다.
console.log(t, other)

let {title: subject, wide=1000} = options   // key가없을때의 기본값도 지정가능
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

// 과제: bread에서 size와 items를 추출하라.
let {size, items} = bread
console.log(size, items)