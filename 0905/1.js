const str = "abcdefghijklmnopqrxtuvwxyz";

// stack
function stack(str) {
    let stack = [];

    // 문자열을 스택에 넣기
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    
    // 스택에서 하나씩 꺼내서 새로운 문자열에 추가
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// queue
function queue(str) {
    let queue = [];

    // 문자열을 큐에 넣기
    for (let i = 0; i < str.length; i++) {
        queue.unshift(str[i]); // 큐의 앞에 새 문자를 삽입
    }

    return queue.join('');
}

console.log(`스택를 이용 : ${stack(str)}`);
console.log(`큐를 이용 : ${queue(str)}`);
