let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5 ,4)

console.log(date1 - date2)      // mil sec 단위로 표현됐다. -> number 타입으로 바뀌었다.

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // Symbol을 사용할땐 []을사용한다  // toPrimitive - 리턴받는 타입을 지정하는 메서드
        return hint == 'string' ? this.name : this.age
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive](){ // 타입을 지정하지않을때는 return 그대로 받는다.
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)   // 20 > 38이므로 false (user의 타입이 number로 전환되어 나이로 인식)
console.log(user + 50)      // number 타입으로 받아서 계산이 되었다. (string으로 받지않음)
console.log(user2 + 50)

user = {
    name: 'neo',
    age: 11,
    toString() {            // toString() - string 타입으로 리턴
        return this.name
    }
}

console.log(user + '')

// valueOf - 해당 value를  해당 파라미터의 타입으로 리턴
user.valueOf = function(){
    return this.age
}

console.log(user + 100) // valueof 있을때 - 111 / valueof 없을때 - neo100
// valueof toString 둘다 없으면 object타입으로 리턴되어 진다.

userStr = JSON.stringify(user)  // JSON.stringfy() - user의 파라미터 자체를 string 타입으로 바뀐다.
console.log(userStr)
console.log(typeof userStr) // string 타입으로 바뀐것을 확인했다.