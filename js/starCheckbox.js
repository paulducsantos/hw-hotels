$(document).ready(function() {
  //var test = [1,2,3];
  //console.log((jQuery.inArray(4, test)));

  $('#5starCheckbox').click(function() {

    if ($("#5starCheckbox").is(":checked")) {

      $(pageObject.location).each(function() {
        if ($(this).hasClass('star5')){
        $(this).css('display', 'block');
        pageObject.stars[5] = true;
        }
      });

    } else {
      $(pageObject.location).each(function() {
        if ($(this).hasClass('star5')){
        $(this).css('display', 'none');
        pageObject.stars[5] = false;
        }
      });

    }
    
}); 

  $('#4starCheckbox').click(function() {

    if ($("#4starCheckbox").is(":checked")) {

      $(pageObject.location).each(function() {
        if ($(this).hasClass('star4')){
        $(this).css('display', 'block');
        pageObject.stars[4] = true;
        }
      });

    } else {
      $(pageObject.location).each(function() {
        if ($(this).hasClass('star4')){
        $(this).css('display', 'none');
        pageObject.stars[4] = false;
        }
      });

    }
    
}); 

    $('#3starCheckbox').click(function() {

    if ($("#3starCheckbox").is(":checked")) {

      $(pageObject.location).each(function() {
        if ($(this).hasClass('star3')){
        $(this).css('display', 'block');
        pageObject.stars[3] = true;
        }
      });

    } else {
      $(pageObject.location).each(function() {
        if ($(this).hasClass('star3')){
        $(this).css('display', 'none');
        pageObject.stars[3] = false;
        }
      });

    }
    
}); 

      $('#2starCheckbox').click(function() {

    if ($("#2starCheckbox").is(":checked")) {

      $(pageObject.location).each(function() {
        if ($(this).hasClass('star2')){
        $(this).css('display', 'block');
        pageObject.stars[2] = true;
        }
      });

    } else {
      $(pageObject.location).each(function() {
        if ($(this).hasClass('star2')){
        $(this).css('display', 'none');
        pageObject.stars[2] = false;
        }
      });

    }
    
}); 

});