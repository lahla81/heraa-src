$(document).ready(function(){
    $('.latest-project-thumbnail').hover(function(){
        $(this).find('.project-overlay').slideToggle();
        $(this).find('.project-category').slideToggle();
    })
})