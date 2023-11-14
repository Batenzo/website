
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
      Host : "smtp.elasticemail.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : document.getElementById('email').value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }