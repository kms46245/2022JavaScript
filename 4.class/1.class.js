class User{     // sugar syntax -> 조금더 편한 문법(내부적으로는 원래 사용하던 문법을 이용한다.)
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}`)
    }
}

let user = new User('john')
console.log(user.name)
user.introduce()            // 보통은 java를 이용하던 사람들만 이용하는 문법


User = class {
    name // 멤버 변수임을 알려주는 효과가 있는것이고, 없어도 작동된다.
    age

    constructor(name, age) {
        this.name = name        // 여기서 멤버변수가없을때는 추가 있으면 수정으로 자동적용되기때문
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

new User('abel', 12).introduce()


function makeClass(phrase){     // 클래스를 값으로 생각해 클래스를 리턴 받을수도 있다.
    return class {
        sayHi(){
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()              // param이 없는 constructor는 생략가능하다.