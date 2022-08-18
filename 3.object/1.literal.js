let user = {
    name: 'frances', //entry는 ,로 구분
    age: 70
}

//user객체
user = {
    name: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
}

console.log(user.name)
console.log(user.name.first)

user.sing()

// user.'nick name'  error
//user.nick name
console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

//man.1     //syntaxError - function에는 문법적으로 체인이 불가능하다.
console.log(man['1'])   // 배열의 요소를 부르듯이 가져온다.