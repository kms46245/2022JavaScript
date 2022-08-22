class Animal {
    constructor(name){
        this.name = name
    }
    
    // 생성자뿐만이아니라 메서드에서도 this.를 이용하면 속성값을 추가/수정할수 있다.
    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop(){
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)     // 없던 속성값이 내부의 메서드를 통해 생긴것을 확인할 수 있다.
animal.stop()
console.log(animal)


class Rabbit extends Animal{
    
    /* 코딩하지않으면 기본 생성자가 자동으로 생성된다.
    *기본생성자*
    constructor(...args){
        super(...args)          // 부모의 생성자가 실행
    }*/

    hide() {
        console.log(this.name, 'hide')
    }
}

let rabbit = new Rabbit() // prototype인 Animal의 생성자를 사용한 것이다.
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

//
Rabbit = class extends Animal{
    constructor(name, color) {
        super(name)       // 생성자의 경우에는 부모의 생성자를 사용한다(파라미터도 맞춰줘야함)
        this.color = color
    }

    stop() {
        super.stop()      // method도 마찬가지
        this.hide()
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()