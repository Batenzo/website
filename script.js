
//header scroll
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active'); 
}

//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

  // Send email

  function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "",
      Password : "",
      To : '',
      From : document.getElementById('email').value,
      Subject : "New contact form enquiry",
      Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone no: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message")
  }).then(
    message => alert("Contact form temporarily not working 😔. Please use email or phone")
  );
  }