let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
};
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let submitBtn =document.querySelector(".submit-btn");

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == ""||msg == "") {
            emptyerror();
        } 
        else {
            sendmail(name.value, email.value, msg.value);
            success;
        }
    });
}
validate();
function sendmail(name, email, msg) {
    emailjs.send("service_6p7znvj", "template_7qmw60", {
        from_name: "Bernard",
        to_name: name,
        message: msg,
    });

}
function emptyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",   
      });
}
function success(); {
    swal({
        title: "Email sent successfully",
        text: "I reply in 24hours",
        icon: "Success",
    });
}
// Header Background Change on Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
});
 