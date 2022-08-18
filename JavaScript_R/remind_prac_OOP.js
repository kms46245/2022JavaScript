function Shotgun() {
    this.name = '샷건'
    this.fire = () => console.log('팡')
}

function Rifle() {
    this.name = '라이플'
    this.fire = () => console.log('타다당')
}

function User(name, gun){
    this.name = name
    this.reload = () => `${gun.name}의 탄을 장전했다.`
    this.fire = () => gun.fire()
}

let rifle = new Rifle()
let shotgun = new Shotgun()
let user1 = new User('최한석', rifle)
let user2 = new User('한아름', shotgun)

console.log(user1.reload())
user1.fire()
console.log(user2.reload())
user2.fire()


//----------------------------------

let ball = {
    name : '축구공',
    toString() {
        return this.name
    }
}

function Player(name){
    this.name = name
    this.pass = ball => `${name}가 패스한 ${ball}`
    this.shoot = ball => `${name}가 슛한 ${ball}`
}

const player1 = new Player('김씨')
const player2 = new Player('이씨')
const player3 = new Player('최씨')

console.log(player3.shoot(player2.pass(player1.pass(ball))))