
$(document).ready(function() {

    $("#back").hide();

    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          $("#back").fadeIn(200);
        } else {
          $("#back").fadeOut(200);
        }
      });

      $("#back").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
    });
  });




  $(document).ready(function () {
    var i = 0;
    var timer;


    $('.item').eq(0).show().siblings('.item').hide();

    function Show() {

        $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);


        $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');

    }


    function showTime() {

        timer = setInterval(function () {

            Show();
            i++;

            if (i == 5) {
                i = 0;
            }
        }, 3000);
    }



    showTime();


    $('.tab').hover(function () {

        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        //
        showTime();
    });


    $('.prev').click(function () {
        clearInterval(timer);
        if (i == 0) {
            i = 5;
        }
        i--;
        Show();
        showTime();
    });


    $('.next').click(function () {
        clearInterval(timer);
        if (i == 4) {
            i = -1;
        }
        i++;
        Show();
        showTime();
    });
});

