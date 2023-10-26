let login = prompt("Enter username");
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";

let message = login == "Employee" ? alert('Hello') :
    login === "Director" ? alert('Greeting') :
        login == "" ? alert('No login') : aleert(" ");


