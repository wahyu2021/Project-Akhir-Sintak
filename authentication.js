const submit = document.querySelector('.submit');
const daftar = document.querySelector('#signUp');
const form = document.querySelector('#signInForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');


// masuk ke page sign up
daftar.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.loader-container').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = 'create-account-page/sign-up.html'
        document.querySelector('.loader-container').style.visibility = 'hidden';
    },1000)
})


// sign in
submit.addEventListener('click',async (e) => {
    e.preventDefault();
    
    if((localStorage.getItem('username') === username.value.trim() && localStorage.getItem('password') === password.value.trim()) || (username.value.trim() === 'admin' && password.value.trim() === '123')){
        await Swal.fire({
            icon: "success",
            title: "Successful Login",
        });
        document.querySelector('.loader-container').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('.loader-container').style.visibility = 'hidden';
            window.location.href = 'home-page/home.html'
        },1000)
    } else{
        Swal.fire({
            icon: "error",
            title: "Invalid username or password"
        });
    }
})



