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