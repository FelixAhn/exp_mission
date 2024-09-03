function IfNumber(number) {
    if (number < 0) {
        console.log("음수입니다.");
    } else if (number === 0) {
        console.log("0입니다.");
    } else {
        console.log("양수입니다.");
    }
}

function SwitchNumber(number) {
    switch (true) {
        case (number < 0):
            console.log("음수입니다.");
            break;
        case (number === 0):
            console.log("0입니다.");
            break;
        case (number > 0):
            console.log("양수입니다.");
            break;
    }
}

function ForNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

function WhileReverseNumber(number) {
    let i = number;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

function main() {
    let number = 10;
    
    IfNumber(number);
    SwitchNumber(number);
    let sum = ForNumber(number);
    console.log(`1부터 ${number}까지의 합 : ${sum}`);
    
    // while 문으로 처리
    console.log("----------------------입력된 숫자까지의 역순 출력----------------------");
    WhileReverseNumber(number);
}

// 메인 함수 실행
main();
