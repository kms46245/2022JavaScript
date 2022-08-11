//if(true이면 실행 false이면 건너뛰고 else)
if(true){}
if(false){} else{}

// undefined,null,0은 값이 없는 것이기에 (false) 실행이 건너 뛰게된다.
if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

// 값이 존재하고있으므로 true이기에 조건문 실행
if(-1) {console.log('!')}

console.log(true ? 1 : 0)

//Switch
//명령문이 한줄에 2개이상일때는 ;으로 구분 하자.
let val

switch('boo') {
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right'
}

console.log(val)