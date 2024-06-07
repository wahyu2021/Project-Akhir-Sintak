const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navBorder = document.querySelector('.nav-border');
const btnPesan = document.querySelector('#btnPesan');
const threshold = 50;
const screenWidth = window.innerWidth;

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  if(screenWidth <= 992){
    navbar.style.backgroundColor = '#86B6F6';
  } else{
    if (scrollPosition >= threshold) {
        navbar.style.backgroundColor = '#86B6F6';
        navBorder.style.borderLeft = "2px solid #252525a8"
        navLinks.forEach((navLink) =>{
          navLink.style.color = "black";
        })
    } else {
        navbar.style.backgroundColor = 'transparent';
        navBorder.style.borderLeft = "2px solid #b9b8b893"
        navLinks.forEach((navLink) =>{
          navLink.style.color = "white";
        })
    }
  }
  
});

btnPesan.addEventListener('click', () => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Thank you!",
        icon: "success"
      });
    }
  });
})
