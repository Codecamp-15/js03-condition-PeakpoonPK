let a = prompt('FirstNumber');
let b = prompt('SecondNumber');
let c = prompt('ThirdNumber');

if (a, b, c === null || a.trim(), b.trim(), c.trim() === '' || isNaN(a, b, c))
    alert('Invalid Number')
else if (+a > +b && +b > +c) { alert(`${a},${b},${c}`); }
else if (+b > +c && +c > +a) { alert(`${b},${c},${a}`); }
else if (+c > +a && +a > +b) { alert(`${c},${a},${b}`); }
else if (+a > +b && +b < +c && +a > +c) { alert(`${a}, ${c},${b}`); }
else if (+b > +a && +b > +c && +a > +c) { alert(`${b}, ${a}, ${c}`); }
else if (+c > +a && +c > +b && +b > +a) { alert(`${c}, ${b}, ${a}`); }
