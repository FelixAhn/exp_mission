function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;  // 매번 가장 큰 값이 정렬되므로, 비교 범위를 줄입니다.
    } while (swapped);

    return arr;
}

const arr = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr));  // 출력: [1, 2, 4, 5, 8]