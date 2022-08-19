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


class Duck extends Animal{
    
    // 코딩하지않으면 기본 생성자가 자동으로 생성된다.
    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run ')
    }

    hide() {
        console.log(this.name, 'hide')
    }
}

let duck = new Duck('duck') // prototype인 Animal의 생성자를 사용한 것이다.
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()


class Rabbit extends Animal {
    stop() {
        super.stop()        // super - 부모(prototype)의 클래스에서의 속성을 사용한다.
        this.hide()         // this - 자식(본인)의 클래스 속성을 사용
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

//
Rabbit = class extends Animal{
    constructor(name, color) {
        super(name)       // 생성자의 경우에는 부모의 생성자를 사용한다(파라미터도 맞춰줘야함)
        this.color = color
    }
}

console.log(new Rabbit('rabbit', 'black'))