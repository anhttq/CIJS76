// 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("abcdef"));

// 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
function newArray(arr2) {
    return Array.from(new Set(arr2));
}

console.log(newArray([1, 2, 3, 5, 4, 2, 6, 4]));

// 3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
let arr3 = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
arr3.sort();
let counts = {};
for (let i = 0; i < arr3.length; i++) {
    let num = arr3[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

function maxElements() {
    let max = 0;
    for (let x in counts) {
        if (counts[x] > max) {
            max = counts[x];
            maxKey = x;
        }
    }
    return obj = {
        value: max,
        count: Number(maxKey)
    }
}

console.log(maxElements())




