const themeToggler = document.querySelector(".theme-toggler");

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    
    
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
})

//change sign in and sign up screen
const btnSignin = document.querySelector('#signin');
const btnSignup= document.querySelector('#signup');
var body = document.querySelector('body');


btnSignin.addEventListener('click', () => {
    if(body.className == 'sign-up dark-theme-variables'){
        body.className = 'sign-in dark-theme-variables';
    } else {
        body.className = 'sign-in';
    }
})

btnSignup.addEventListener('click', () => {
    if(body.className == 'sign-in dark-theme-variables'){
        body.className = 'sign-up dark-theme-variables';
    } else {
        body.className = 'sign-up';
    }
})
