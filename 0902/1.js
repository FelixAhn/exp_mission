// 변수 선언
var a = 10;       // var로 선언된 변수는 함수 스코프를 가짐
let b = 20;       // let으로 선언된 변수는 블록 스코프를 가짐
const c = 30;     // const로 선언된 변수는 상수로, 재할당이 불가능

// 데이터 타입 확인
console.log(typeof a);  // number
console.log(typeof b);  // number
console.log(typeof c);  // number

// 데이터 타입 설명
// 1. Number: 숫자 타입 (정수와 소수 포함)
let num = 42;
console.log(typeof num);  // "number"

// 2. String: 문자열 타입 (텍스트)
let str = "Hello, World!";
console.log(typeof str);  // "string"

// 3. Boolean: 논리 타입 (true 또는 false)
let isTrue = true;
console.log(typeof isTrue);  // "boolean"

// 4. Undefined: 값이 할당되지 않은 변수
let undef;
console.log(typeof undef);  // "undefined"

// 5. Null: 의도적으로 비어 있는 값 (자바스크립트에서는 "object"로 표시됨)
let empty = null;
console.log(typeof empty);  // "object"

// 6. Object: 객체, 배열, 함수 등 복합 데이터 타입
let obj = { name: "Alice", age: 25 };
console.log(typeof obj);  // "object"

// 7. Symbol: 고유하고 변경 불가능한 데이터 타입 (주로 객체의 키로 사용)
let sym = Symbol("id");
console.log(typeof sym);  // "symbol"

// 8. BigInt: 매우 큰 정수를 나타내기 위한 데이터 타입
let bigNum = BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigNum);  // "bigint"

// 다양한 연산자 사용 예시

// 산술 연산자
let sum = a + b;       // 덧셈
let diff = a - b;      // 뺄셈
let product = a * b;   // 곱셈
let quotient = a / b;  // 나눗셈
let remainder = a % b; // 나머지

console.log(sum, diff, product, quotient, remainder);  // 결과 출력

// 비교 연산자
console.log(a == b);   // 값이 같은지 비교 (동등 연산자)
console.log(a === b);  // 값과 타입이 모두 같은지 비교 (일치 연산자)
console.log(a != b);   // 값이 다른지 비교 (부등 연산자)
console.log(a !== b);  // 값 또는 타입이 다른지 비교 (불일치 연산자)

// 논리 연산자
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);  // 논리 AND
console.log(isAdult || hasID);  // 논리 OR
console.log(!isAdult);          // 논리 NOT

// 할당 연산자
let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4

console.log(x);  // 결과 출력
