$(document).ready(function(){
    $('.project-thumbnail').hover(function(){
        $(this).find('.project-overlay').slideToggle();
        $(this).find('.project-category').slideToggle();
    })
})