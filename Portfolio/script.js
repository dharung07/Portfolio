const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open-menu');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open-menu');
}

function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendbtn = document.querySelector('.send-btn');

  sendbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function sendmail(name,email,msg) {
  emailjs.send("service_97p44cu","template_lcdfink",{
    to_name: name,
    from_name: email,
    message: msg,
    });
}

function emptyerror() {
  swal({
    title: "Oh no...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent succesfully",
    text: "We try to reply in 12hrs!",
    icon: "success",
  });
}