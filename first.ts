// 변수 a에 string 타입이 들어가야되는데 number타입이 들어왔기때문에 빨간줄로 오류가 출력된다.

let a : string = 'hello';
//a = 123;
// string 타입으로 수정
a = '123';

// 변수가 봤을때 명확하게 숫자타입이면 타입을 적어줄 수 있다.
// 자바스크립트의 변수, 매개변수, 리턴값 이 세개만 타입을 다 붙여놓으면 그게 타입스크립트가 된다.
// 변수에는 변수이름 뒤에 : 콜론 붙이고 타입(string, number ... )을 적는다.
// 주의할 점은 타입을 대문자로 작성하면 안된다.
const b : number = 5;

// 함수의 타이핑- 매개변수뒤, 리턴값자리에 타입을 붙여준다.
function add(x: number, y: number) : number { return x + y };

// 변수가 중복되었을때도 오류로 알려준다.
// const add: (x: number, y: number) => number = (x, y) => x + y;
const add2: (x: number, y: number) => number = (x, y) => x + y;

const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };