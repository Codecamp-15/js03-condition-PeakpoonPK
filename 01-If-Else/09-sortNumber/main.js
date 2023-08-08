// let a = +prompt('FirstNumber');
// let b = +prompt('SecondNumber');
// let c = +prompt('ThirdNumber');

// if (a, b, c === null || a.trim(), b.trim(), c.trim() === '' || isNaN(a, b, c))
//     alert('Invalid Number')
// else if (a >= b && b >= c) { alert(`${a},${b},${c}`); }
// else if (b >= c && c >= a) { alert(`${b},${c},${a}`); }
// else if (c >= a && a >= b) { alert(`${c},${a},${b}`); }
// else if (a >= b && b <= c && a >= c) { alert(`${a}, ${c},${b}`); }
// else if (b >= a && b >= c && a >= c) { alert(`${b}, ${a}, ${c}`); }
// else if (c >= a && c >= b && b >= a) { alert(`${c}, ${b}, ${a}`); }

// V.0 แสดงเฉำาะตัวที่มากที่สุด




let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = prompt('Enter number 3') * 1;


// V.0 แสดงเฉำาะตัวที่มากที่สุด
// Case : X maximun
// Case : Y Maximun
// Case : Z Maximun
// Dry Principle: Don't Repeat Yourself
// let max;
// if (x > y && x > z) max = x;//{ console.log(`MAX=${x}`); }
// else if (y > x && y > z) max = y;//{ console.log(`MAX= ${y}`); }
// else if (z > x && z > y) max = z; //{ console.log(`MAX= ${z}`); }

// V.1 แสดงเฉพาะเลขที่ไม่เหมือนกัน --> แสดงผลตามลำดับ
// Case : X maximun
// 1A : y >z
// 2A : z >y
// Case : Y Maximun
// Case : Z Maximun


// let max;
// let min;
// let mid;
// if (x > y && x > z) {
//     max = x;
//     if (y > z) {
//         mid = y;
//         min = z;
//     }
//     else {
//         mid = z;
//         min = y;
//     }
// }
// else if (y > x && y > z) {
//     max = y;
//     if (x > z) {
//         min = z;
//         mid = x;
//     }
//     else {
//         min = x;
//         mid = z;
//     }
// }
// else if (z > x && z > y) {
//     max = z;
//     if (x > y) {
//         mid = x;
//         min = y;
//     }
//     else {
//         mid = y;
//         max = x;
//     };
// }

// console.log(`${max},${mid},${min}`);

// V.2 แสดงเฉพาะเลขที่เหมือนกัน
let max;
let min;
let mid;
if (x >= y && x >= z) {
    max = x;
    if (y >= z) {
        mid = y;
        min = z;
    }
    else {
        mid = z;
        min = y;
    }
}
else if (y >= x && y >= z) {
    max = y;
    if (x >= z) {
        min = z;
        mid = x;
    }
    else {
        min = x;
        mid = z;
    }
}
else if (z >= x && z >= y) {
    max = z;
    if (x >= y) {
        mid = x;
        min = y;
    }
    else {
        mid = y;
        max = x;
    };
}

console.log(`${max},${mid},${min}`);
