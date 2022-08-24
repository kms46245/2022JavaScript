interface Profile {     // interface - 나만의 타입을 만들때 사용한다.
    id: number  // interface에서 parameter를 나열할때 ,를 쓰지않는다.    
    username: string
    nickname: string
}

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = {
    id: 1,  // interface와는 달리 ,를 써준다.
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)

//
interface Relationship {
    from: Profile       // interface를 만들며 다른 interface도 참조할 수있다.
    to: Profile
}

const relationship: Relationship = {
    from: {
        id: 1,
        username: 'cain',
        nickname: 'hero'
    }  ,
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile {  // interface끼리 상속 받을 수 있다.
    email: string
    password: string
}

// 과제] acccount의 data를 채워라.
const account: Account = {
    id: 1,
    username: 'cain',
    nickname: 'hero',
    email: 'abc@def.com',
    password: '1q2w3e4r'
}

interface User {
    id: number
    username: string
    photoUri?: string   // optional variable을 쓸수 있다.
}

let user: User ={
    id: 1,
    username: 'abel'
    // 'phoroUri'는 optional variable이므로 선언하는것은 자유이다.
}

console.log(user)

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
}

console.log(user)

//
interface Shape {
    getArea(): number   //function도 요소로 사용가능
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}   // 해당 클래스에서만 쓰는 속성은 private으로 지정한다.

    // implement되었으므로 overriding은 필수다.
    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())
