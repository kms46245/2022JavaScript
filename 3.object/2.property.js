let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

// delete로 해당 파라미터의 값을 undefined로 지울수 있다.
delete user.weight
console.log(user.weight)


//in ~function - 값이 있는지 없는지 확인한다.
console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.name = 'paker'
console.log(Object.keys(user)) //key가 리턴하는 값은 배열
console.log(Object.values(user))
console.log(Object.entries(user)) //node로 실행되어야 값이나옴

//
user = {
    greet: function() {console.log('hello')}
}
//arrow로 refactoring
user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning

user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.name)       //일반적인 chainning undefined error
console.log(user.city?.name)        // undefined

// ? - 존재하지않는 객체(파라미터)에 대해 명시만 해주는 개념
let street
//street = user.city.name
street = user?.city?.name
console.log(street)

//  명시되어있지만 값이없으면 -> undefined이고 이렇게되면 기본값을 리턴한다('where')
street =user?.city?.street ?? 'where'
console.log(street)

//할당연산자 왼쪽에는 쓸수 없다
//user?.address = 'sejong' //error

user = null
//user.greet() //TypeError: Cannot read properties of null
console.log(user?.greet)
user = undefined
//user.greet()

// function을 부를때에는 뒤에 .()를 붙여서 ?를 사용할수 있다.
user = {}
//user.greet()
console.log(user.greet?.())