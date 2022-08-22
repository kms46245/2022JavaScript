class CoffeeMachine {
    waterAmount     // 클래스의 속성이 아닌 객체의 속성이므로(10번줄)

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine)) // 여기선 속성이 나오지않는다.
console.log(CoffeeMachine.prototype)    // 프로토타입의 속성도 물론 아니다.

let machine = new CoffeeMachine(220)
console.log(machine)    // machine이라고 만든 객체에는 waterAmount가 존재한다.

machine.waterAmount = 1
machine.voltage = 110
console.log(machine)    // machine의 속성을 직접 수정 추가할 수 도있다.

//
CoffeeMachine = class {
    _waterAmount       // _를찍고 이름을 붙이면 protected의 성격을 띄게된다.

    //accessor(getter,setter)를 만드는 법은 _를뺀 이름으로 만들어준다.
    get waterAmount() {     // protected를 불러오기위한 getter
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {  //protected된 값의 변경을 위한 setter
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype)    // waterAmount가 이전과 달리 프로토타입에서 생성된다.

machine = new CoffeeMachine()
console.log(machine)    
// 여기서 말하는 waterAmount는 get set을 불러온것이다.
// -> 이것을 <Accessor>라고 하고 그것을 프로토타입이 저장하는것이다.

machine.waterAmount = 1
console.log(machine)    // 1이아닌 setter에 지정된 2 * waterAmount를 사용해 2가 들어있다.
console.log(machine.waterAmount) // getter를 이용해서 가져왔기때문에 100이 추가됐다.

machine._waterAmount = 11           // accessor를 쓰겠다는 의미를 가지지않기때문에 
console.log(machine._waterAmount)   // accessor를 이용하지않고 적용한다.
