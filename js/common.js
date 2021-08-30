$(document).ready(function(){
    $('#music').on('click', function(){
        $("#music").css('pointer-events','none');
        $('.button-start').remove();
    });
});

function playAudio(url) {
    
    var audio = new Audio(url);
    $('.loading-status').removeClass('d-none');
    $("#music").remove();
    setTimeout(function(){
        $('.loading-status').fadeOut();
        audio.play();
        $("#cake").removeClass('d-none');
        $("#cake-fadein").fadeIn("5000");
    }, 3000);
    audio.onended = function() {
        $('.popup').trigger('click');
        
    };
    
}