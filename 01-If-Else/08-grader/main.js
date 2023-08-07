let r = prompt('Your score ?');

if (r >= 0 && r <= 100) {
    if (r >= 80) { alert('A'); }
    else if (r >= 70 && r < 80) { alert('B'); }
    else if (r >= 60 && r < 70) { alert('C'); }
    else if (r >= 50 && r < 60) { alert('D'); }
    else if (r >= 0 && r < 50) { alert('F'); };
}
else {
    alert('Invalid Range')
}