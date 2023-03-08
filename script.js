function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lautarolezcano@gmail.com",
        Password : "9FEBD4753D91650794D3AE64279408731612",
        To : "lautarolezcano@gmail.com",
        From : "lautarolezcano@gmail.com",
        Subject : "New contact form",
        Body : "name:" + document.getElementById("name").value
        + "<br> email: " + document.getElementById ("email").value
        + "<br> message: " + document.getElementById ("message").value
    }).then(
      message => alert(message)
    );
}