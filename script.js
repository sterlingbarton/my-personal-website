
const contactBtn = document.querySelector('.btn');
const contactBtnText = document.querySelector('.text')
const contactContainer = document.querySelector('.contact-container');
const icon = document.querySelector('.fa-envelope');

$(window).scroll(function(){
    if($(window).scrollTop() >= 300){
        contactContainer.classList.add('floating-container');
        contactBtn.className = 'floating-button';
        icon.style.display = 'block';
        contactBtnText.style.display = 'none';
    } else{
        contactContainer.className = 'contact-container';
        contactBtn.className = 'btn';
        icon.style.display = 'none';
        contactBtnText.style.display = 'block';
    }
});

