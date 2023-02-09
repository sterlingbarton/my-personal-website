
const contactBtn = document.querySelector('.btn');
const floatingBtn = document.querySelector('.floating-button');

$(window).scroll(function()
{
    console.log($(window).scrollTop())
    if($(window).scrollTop() >= 300){
        contactBtn.style.display = 'none';
        floatingBtn.style.display = 'block';
    } else{
        contactBtn.style.display = 'block';
        floatingBtn.style.display = 'none';
    }
    document.getElementById("fixed_box").innerHTML = "You have Scrolled to " + $(window).scrollTop() + "px";
});