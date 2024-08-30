const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 사용자로부터 현재 나이와 n년 후 나이를 받을 함수
const getInputs = () => {
  return new Promise((resolve, reject) => {
    rl.question('현재 나이를 입력하세요: ', (age) => {
      rl.question('몇 년 후의 나이를 알고 싶으신가요? ', (years) => {
        // 입력 받은 나이와 년을 숫자로 변환
        const currentAge = parseInt(age, 10);
        const futureYears = parseInt(years, 10);

        // n년 후 나이 계산
        const futureAge = currentAge + futureYears;
        console.log(`n년 후의 나이는 ${futureAge}세입니다.`);
        
        rl.close();
        resolve();
      });
    });
  });
};

getInputs();
