// let a = prompt("Write Number");

// if (a > 0) { alert("Positive number"); }
// else if (a == 0) { alert("Zero"); }
// else if (a < 0) { alert("Negative number"); }
// else { alert("Invalid number"); }

let num = prompt('Enter number 1');

console.log(num);

// Guad-CLause
// ห้ามดปลี่ยนตำแหน่ง เพราะ Null (trueแล้สหยุดเลย)
if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number')
} else if (+num > 0) { alert("Positive number"); }
else if (+num == 0) { alert("Zero"); }
else if (+num < 0) { alert("Negative Number"); }
// if (isNaN(num)) {
//     alert('Invalid Number')
// }
