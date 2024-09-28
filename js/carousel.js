$(document).ready(function(){
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
  
    // Modal Functionality
    var modal = $('#imageModal');
    var modalImg = $('#modalImage');
  
    // When 'View Image' button is clicked
    $('.view-image-btn').on('click', function() {
      var imgSrc = $(this).data('image');
      modalImg.attr('src', imgSrc);
      modal.show();
    });
  
    // Close the modal when 'X' is clicked
    $('.close-modal').on('click', function() {
      modal.hide();
    });
  
    // Close the modal when clicking outside the image
    $(window).on('click', function(e) {
      if ($(e.target).is('#imageModal')) {
        modal.hide();
      }
    });
    $('.side-button').on('click', function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
      });
      
      $('.side-button-right').on('click', function() {
        $('.owl-carousel').trigger('next.owl.carousel');
      });
  });