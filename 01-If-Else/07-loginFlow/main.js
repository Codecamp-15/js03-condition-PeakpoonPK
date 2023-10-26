let a = prompt('Username');
let b = prompt('Password');
let c = `Hello ${a}`;

if (a == '') { alert('username is required'); }
else if (b == '') { alert('password is required'); }
else if (a == 'admin' && b == '1234') { alert(c); }
else if (a == 'john' && b == 'qwerty') { alert(c); }
else { alert('invalid user or password') }
