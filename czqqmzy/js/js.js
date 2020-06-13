$(document).ready(function () {
    $('#back').hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('#back').fadeIn(200);
            }
            else
                $('#back').fadeOut(200);
            
        });
        
        $('#back').click(function(){
            $('body,html').animate({
                scrollTop:0
            },
            500);
            return false;
        });
    });
        
});

$(document).ready(function () {
    var i = 0;
    var timer;
 $('.item1').eq(0).show().siblings('.item1').hide();
 function Show() {
     $('.item1').eq(i).fadeIn(300).siblings('.item1').fadeOut(300);
     $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
 }
 function showTime() {
     timer = setInterval(function () {
         Show();
         i++;
         if (i == 3){
             i = 0;
         }
     },2000);
 }
 showTime();
 $('.tab').hover(function () {
            i = $(this).index();
            Show();
            clearInterval(timer);
        }, function () {
            
            showTime();
        });
 $('.prev').click(function () {
     clearInterval(timer);
     if(i == 0){
         i = 3;
     }
     i--;
     Show();
     showTime();
 });
 $('.next').click(function () {
     clearInterval(timer);
     if(i==2){
         i=-1;
     }
     i++;
     Show();
     showTime();
 });
});




function GetTime() {
    var EndTime = new Date('2020/06/28 12:00:00');
    var NowTime = new Date();
    var t = EndTime.getTime()-NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if(t>0){
        d = Math.floor(t/1000/60/60/24);
        h = Math.floor(t/1000/60/60%24);
        m = Math.floor(t/1000/60%60);
        s = Math.floor(t/1000%60);
    }
    document.getElementById('daytime').innerHTML =d;
    document.getElementById('hourtime').innerHTML =h;
    document.getElementById('minutestime').innerHTML =m;
    document.getElementById('secondtime').innerHTML =s;
}
setInterval(GetTime,0);

function Draw() {
    var number = document.getElementsByTagName('input');
    var luck =  Math.floor(Math.random()*100000000+1);
    number[0].placeholder ="恭喜您，您的抽奖号码是"+luck;  
}
document.getElementById('btn').addEventListener('click',
      function (even) {
          Draw();
      },{once:true});