const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navBorder = document.querySelector('.nav-border');
const btnPesan = document.querySelector('#btnPesan');
const penerbanganGroup = document.querySelector('.penerbangan-group');
const hotelGroup = document.querySelector('.hotel-group');
const busGroup = document.querySelector('.bus-group');
const titlePopulers = document.querySelectorAll('.title-populer');
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

const removeActiveClass = () => {
  titlePopulers.forEach((titlePopuler) => {
    titlePopuler.classList.remove('this-menu');
  });
}

// penerbangan
document.querySelector('#penerbangan').addEventListener('click', () => {
  // display
  removeActiveClass();
  penerbanganGroup.style.display = 'flex';
  hotelGroup.style.display = 'none';
  busGroup.style.display = 'none';

  // change menu
  document.querySelector('#penerbangan').classList.add('this-menu')
})

// hotel
document.querySelector('#hotel').addEventListener('click', () => {
  removeActiveClass();
  penerbanganGroup.style.display = 'none';
  hotelGroup.style.display = 'flex';
  busGroup.style.display = 'none';
  document.querySelector('#hotel').classList.add('this-menu')
})

// bus
document.querySelector('#bus').addEventListener('click', () => {
  removeActiveClass();
  penerbanganGroup.style.display = 'none';
  hotelGroup.style.display = 'none';
  busGroup.style.display = 'flex';
  document.querySelector('#bus').classList.add('this-menu')
})
