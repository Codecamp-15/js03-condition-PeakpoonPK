let user = prompt("Username");
switch (user) {
    case "codecamp":
        let pass = prompt("password")
        switch (pass) {
            case '123456':
                user = "user codecamp";
                break;
            default:
                alert("Wrong password");
                break;
        }
        break;
    default:
        alert("guest");
}
let a = `Hello ${user}`;
alert(a)
