$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      if($(this).scrollTop() > $nav.height()){
        $nav.removeClass('navbar-dark');
        $nav.addClass('navbar-light');
      }
      else{
        $nav.removeClass('navbar-light');
        $nav.addClass('navbar-dark');
      }
    });
});

function sendContact(token) {
  //alert("Here");
  console.log(token);
  var valid;	
  valid = validateContact();
  if(valid) {
    $("#contactForm").removeClass('was-validated');
      jQuery.ajax({
          url: "email_form.php",
          data:'userName='+$("#emailInput").val()+'&userEmail='+
          $("#emailInput").val()+'&subject='+
          $("#nameInput").val()+'&content='+
          $("#commentInput").val(),
          type: "POST",
          success:function(data){
              $("#mail-status").html(data);
          },
          error:function (){}
      });
  }
  else{
    $("#contactForm").addClass('was-validated');
  }
}

function validateContact() {
  var valid = true;	
  if(!$("#nameInput").val()) {
      valid = false;
  }
  if(!$("#emailInput").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      valid = false;
  }
  if(!$("#commentInput").val()) {
      valid = false;
  }
  return valid;
}

var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $('section[id]').each(function (index, elem) {
      var offsetTop = $(elem).offset().top;
      var outerHeight = $(this).outerHeight(true);

      if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
          var elemId = $(elem).attr('id');
          $("nav ul li a.active").removeClass('active');
          $("nav ul li a[href='#" + elemId + "']").addClass('active');
      }
  });
};

$(function () {
  $(window).on('scroll', function () {
      addClassOnScroll();
  });
});