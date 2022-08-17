function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(name, gun) {
    this.name = name
    this.fire = () => gun.fire()
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()

//
function Ball() {}

function Player(name) {
    this.name = name
    this.pass = ball => ball
    this.kick = ball => ball
}

const ball = new Ball()
const player1 = new Player('최한석')
const player2 = new Player('한아름')
const player3 = new Player('양승일')
//과제 다음이야기를 표현하라.
// 최한석이 한아름에게 공을 패스했다. 한아름은 양승일에게 공을
// 패스했다.  양승일은 공을 찼다.

player3.kick(player2.pass(player1.pass(ball)))

//
function Food(name) {
    this.name = name
}

function Mom() {
    this.cook = foodName => new Food(foodName)
}

function Child() {
    this.eat = food => console.log(food)
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))