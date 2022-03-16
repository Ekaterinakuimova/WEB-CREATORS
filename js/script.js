

if ($(window).width() < 1024) {
  $(".card-right").removeClass("fadeInLeft");
  
}
    
    $('.link').click(function(e) {
        // Stop the link being followed:
        e.preventDefault();
        // Get the div to be shown:
        var content = $(this).attr('rel');
        // Remove any active classes:
        $('.active').removeClass('active');
        // Add the 'active' class to this link:
        $(this).addClass('active');
        // Hide all the content:
        $('.card-right').fadeOut('3000');
        // Show the requested content:
        $('#' + content).show(function() {
          $('#' + content).addClass("fadeInLeft");
          // $('#' + content).removeClass("fadeOutLeft");
        });
});