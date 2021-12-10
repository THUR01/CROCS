var mouseX;
var mouseY;
var realitem;

$(document).ready(function(){

    $(".cursorJib").hide();
    $(".message_1").hide();
    $(".message_2").hide(); 
    $(".lights").hide();
    $(".holeimg_1").hide();
    $(".holeimg_2").hide();
    $(".holeimg_3").hide();
    $(".holeimg_4").hide();
    $(".holeimg_5").hide();
    $(".holeimg_6").hide();
    $(".holeimg_7").hide();
    $(".holeimg_8").hide();
    $(".holeimg_9").hide();
    $(".holeimg_10").hide();
    $(".holeimg_11").hide();
    $(".holeimg_12").hide();
    $(".holeimg_13").hide();
    $(".holeimg_14").hide();
    $(".holeimg_15").hide();
    $(".holeimg_16").hide();
    $(".holeimg_17").hide();
    $(".holeimg_18").hide();
    $(".holeimg_19").hide();
    $(".holeimg_20").hide();
    $(".backlight_1").hide();
    $(".backlight_2").hide();

    $(document).mousemove(function (e) {
        // console.log(e.pageX, e.pageY);
        $(".cursorJib").css("top", e.pageY + 10);
        $(".cursorJib").css("left", e.pageX + 10);
        mouseX = e.pageX - 20;
        mouseY = e.pageY -20;
    });

    
    $(".Clkchoicebox").on("click", function() {
        $(".message_0").hide();
        $(".Clkchoicebox").hide();
        $(".choicebox").hide();
        $(".cursorJib").show();
        $(".message_1").show();
        $(".clkholeContainer").addClass("pointer");
        $(".click_u").addClass("pointer");
        $(".click_d").addClass("pointer");

        var owl = $(".owl-carousel").owlCarousel({
            // 여기에 옵션 넣는 자리
            items:1,
            loop:true,
            margin:10,
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter
        });
        console.log($(".owl-carousel"));
        

        $('.click_d').click(() => owl.trigger('prev.owl.carousel'))
        $('.click_u').click(() => owl.trigger('next.owl.carousel'))

        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
            
        
        // it loop is true then reset counter from 1
        if(item > items) {
            item = item - items
        }
        
        if (item > 5) {
            realitem = item - 5;
            }
            else if (item < 6) {
               realitem = item + 5;
        }
            console.log(realitem,"클릭전")

           
            $(".cursorJib_i").attr("src", "img/jib_"+realitem+".png");
            $(".cursorJib_i").removeClass("cjib_1");
            $(".cursorJib_i").removeClass("cjib_2");
            $(".cursorJib_i").removeClass("cjib_3");
            $(".cursorJib_i").removeClass("cjib_4");
            $(".cursorJib_i").removeClass("cjib_5");
            $(".cursorJib_i").removeClass("cjib_6");
            $(".cursorJib_i").removeClass("cjib_7");
            $(".cursorJib_i").removeClass("cjib_8");
            $(".cursorJib_i").removeClass("cjib_9");
            $(".cursorJib_i").removeClass("cjib_10");
            $(".cursorJib_i").addClass("cjib_"+realitem);
        
        console.log(realitem);
        
        if (realitem == 1) {
            $(".jibdot_1").css("animation-name", "dot");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 2) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "dot");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 3) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "dot");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 4) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "dot");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 5) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "dot");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 6) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "dot");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 7) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "dot");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 8) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "dot");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 9) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "dot");
            $(".jibdot_10").css("animation-name", "none");
        }
        else if (realitem == 10) {
            $(".jibdot_1").css("animation-name", "none");
            $(".jibdot_2").css("animation-name", "none");
            $(".jibdot_3").css("animation-name", "none");
            $(".jibdot_4").css("animation-name", "none");
            $(".jibdot_5").css("animation-name", "none");
            $(".jibdot_6").css("animation-name", "none");
            $(".jibdot_7").css("animation-name", "none");
            $(".jibdot_8").css("animation-name", "none");
            $(".jibdot_9").css("animation-name", "none");
            $(".jibdot_10").css("animation-name", "dot");
        }
        
    
        
        $(".clickhole_1").on("click", function() {    //지비츠 장착
            $(".holeimg_1").show();
            $(".Iholeimg_1").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_1").removeClass("jib_1");
            $(".Iholeimg_1").removeClass("jib_2");
            $(".Iholeimg_1").removeClass("jib_3");
            $(".Iholeimg_1").removeClass("jib_4");
            $(".Iholeimg_1").removeClass("jib_5");
            $(".Iholeimg_1").removeClass("jib_6");
            $(".Iholeimg_1").removeClass("jib_7");
            $(".Iholeimg_1").removeClass("jib_8");
            $(".Iholeimg_1").removeClass("jib_9");
            $(".Iholeimg_1").removeClass("jib_10");
            $(".Iholeimg_1").addClass("jib_"+realitem);
        })
        $(".clickhole_2").on("click", function() {
            $(".holeimg_2").show();
            $(".Iholeimg_2").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_2").removeClass("jib_1");
            $(".Iholeimg_2").removeClass("jib_2");
            $(".Iholeimg_2").removeClass("jib_3");
            $(".Iholeimg_2").removeClass("jib_4");
            $(".Iholeimg_2").removeClass("jib_5");
            $(".Iholeimg_2").removeClass("jib_6");
            $(".Iholeimg_2").removeClass("jib_7");
            $(".Iholeimg_2").removeClass("jib_8");
            $(".Iholeimg_2").removeClass("jib_9");
            $(".Iholeimg_2").removeClass("jib_10");
            $(".Iholeimg_2").addClass("jib_"+realitem);
        })
        $(".clickhole_3").on("click", function() {
            $(".holeimg_3").show();
            $(".Iholeimg_3").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_3").removeClass("jib_1");
            $(".Iholeimg_3").removeClass("jib_2");
            $(".Iholeimg_3").removeClass("jib_3");
            $(".Iholeimg_3").removeClass("jib_4");
            $(".Iholeimg_3").removeClass("jib_5");
            $(".Iholeimg_3").removeClass("jib_6");
            $(".Iholeimg_3").removeClass("jib_7");
            $(".Iholeimg_3").removeClass("jib_8");
            $(".Iholeimg_3").removeClass("jib_9");
            $(".Iholeimg_3").removeClass("jib_10");
            $(".Iholeimg_3").addClass("jib_"+realitem);
        })
        $(".clickhole_4").on("click", function() {
            $(".holeimg_4").show();
            $(".Iholeimg_4").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_4").removeClass("jib_1");
            $(".Iholeimg_4").removeClass("jib_2");
            $(".Iholeimg_4").removeClass("jib_3");
            $(".Iholeimg_4").removeClass("jib_4");
            $(".Iholeimg_4").removeClass("jib_5");
            $(".Iholeimg_4").removeClass("jib_6");
            $(".Iholeimg_4").removeClass("jib_7");
            $(".Iholeimg_4").removeClass("jib_8");
            $(".Iholeimg_4").removeClass("jib_9");
            $(".Iholeimg_4").removeClass("jib_10");
            $(".Iholeimg_4").addClass("jib_"+realitem);
        })
        $(".clickhole_5").on("click", function() {
            $(".holeimg_5").show();
            $(".Iholeimg_5").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_5").removeClass("jib_1");
            $(".Iholeimg_5").removeClass("jib_2");
            $(".Iholeimg_5").removeClass("jib_3");
            $(".Iholeimg_5").removeClass("jib_4");
            $(".Iholeimg_5").removeClass("jib_5");
            $(".Iholeimg_5").removeClass("jib_6");
            $(".Iholeimg_5").removeClass("jib_7");
            $(".Iholeimg_5").removeClass("jib_8");
            $(".Iholeimg_5").removeClass("jib_9");
            $(".Iholeimg_5").removeClass("jib_10");
            $(".Iholeimg_5").addClass("jib_"+realitem);
        })
        $(".clickhole_6").on("click", function() {
            $(".holeimg_6").show();
            $(".Iholeimg_6").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_6").removeClass("jib_1");
            $(".Iholeimg_6").removeClass("jib_2");
            $(".Iholeimg_6").removeClass("jib_3");
            $(".Iholeimg_6").removeClass("jib_4");
            $(".Iholeimg_6").removeClass("jib_5");
            $(".Iholeimg_6").removeClass("jib_6");
            $(".Iholeimg_6").removeClass("jib_7");
            $(".Iholeimg_6").removeClass("jib_8");
            $(".Iholeimg_6").removeClass("jib_9");
            $(".Iholeimg_6").removeClass("jib_10");
            $(".Iholeimg_6").addClass("jib_"+realitem);
        })
        $(".clickhole_7").on("click", function() {
            $(".holeimg_7").show();
            $(".Iholeimg_7").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_7").removeClass("jib_1");
            $(".Iholeimg_7").removeClass("jib_2");
            $(".Iholeimg_7").removeClass("jib_3");
            $(".Iholeimg_7").removeClass("jib_4");
            $(".Iholeimg_7").removeClass("jib_5");
            $(".Iholeimg_7").removeClass("jib_6");
            $(".Iholeimg_7").removeClass("jib_7");
            $(".Iholeimg_7").removeClass("jib_8");
            $(".Iholeimg_7").removeClass("jib_9");
            $(".Iholeimg_7").removeClass("jib_10");
            $(".Iholeimg_7").addClass("jib_"+realitem);
        })
        $(".clickhole_8").on("click", function() {
            $(".holeimg_8").show();
            $(".Iholeimg_8").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_8").removeClass("jib_1");
            $(".Iholeimg_8").removeClass("jib_2");
            $(".Iholeimg_8").removeClass("jib_3");
            $(".Iholeimg_8").removeClass("jib_4");
            $(".Iholeimg_8").removeClass("jib_5");
            $(".Iholeimg_8").removeClass("jib_6");
            $(".Iholeimg_8").removeClass("jib_7");
            $(".Iholeimg_8").removeClass("jib_8");
            $(".Iholeimg_8").removeClass("jib_9");
            $(".Iholeimg_8").removeClass("jib_10");
            $(".Iholeimg_8").addClass("jib_"+realitem);
        })
        $(".clickhole_9").on("click", function() {
            $(".holeimg_9").show();
            $(".Iholeimg_9").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_9").removeClass("jib_1");
            $(".Iholeimg_9").removeClass("jib_2");
            $(".Iholeimg_9").removeClass("jib_3");
            $(".Iholeimg_9").removeClass("jib_4");
            $(".Iholeimg_9").removeClass("jib_5");
            $(".Iholeimg_9").removeClass("jib_6");
            $(".Iholeimg_9").removeClass("jib_7");
            $(".Iholeimg_9").removeClass("jib_8");
            $(".Iholeimg_9").removeClass("jib_9");
            $(".Iholeimg_9").removeClass("jib_10");
            $(".Iholeimg_9").addClass("jib_"+realitem);
        })
        $(".clickhole_10").on("click", function() {
            $(".holeimg_10").show();
            $(".Iholeimg_10").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_10").removeClass("jib_1");
            $(".Iholeimg_10").removeClass("jib_2");
            $(".Iholeimg_10").removeClass("jib_3");
            $(".Iholeimg_10").removeClass("jib_4");
            $(".Iholeimg_10").removeClass("jib_5");
            $(".Iholeimg_10").removeClass("jib_6");
            $(".Iholeimg_10").removeClass("jib_7");
            $(".Iholeimg_10").removeClass("jib_8");
            $(".Iholeimg_10").removeClass("jib_9");
            $(".Iholeimg_10").removeClass("jib_10");
            $(".Iholeimg_10").addClass("jib_"+realitem);
        })
        $(".clickhole_11").on("click", function() {
            $(".holeimg_11").show();
            $(".Iholeimg_11").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_11").removeClass("jib_1");
            $(".Iholeimg_11").removeClass("jib_2");
            $(".Iholeimg_11").removeClass("jib_3");
            $(".Iholeimg_11").removeClass("jib_4");
            $(".Iholeimg_11").removeClass("jib_5");
            $(".Iholeimg_11").removeClass("jib_6");
            $(".Iholeimg_11").removeClass("jib_7");
            $(".Iholeimg_11").removeClass("jib_8");
            $(".Iholeimg_11").removeClass("jib_9");
            $(".Iholeimg_11").removeClass("jib_10");
            $(".Iholeimg_11").addClass("jib_"+realitem);
        })
        $(".clickhole_12").on("click", function() {
            $(".holeimg_12").show();
            $(".Iholeimg_12").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_12").removeClass("jib_1");
            $(".Iholeimg_12").removeClass("jib_2");
            $(".Iholeimg_12").removeClass("jib_3");
            $(".Iholeimg_12").removeClass("jib_4");
            $(".Iholeimg_12").removeClass("jib_5");
            $(".Iholeimg_12").removeClass("jib_6");
            $(".Iholeimg_12").removeClass("jib_7");
            $(".Iholeimg_12").removeClass("jib_8");
            $(".Iholeimg_12").removeClass("jib_9");
            $(".Iholeimg_12").removeClass("jib_10");
            $(".Iholeimg_12").addClass("jib_"+realitem);
        })
        $(".clickhole_13").on("click", function() {
            $(".holeimg_13").show();
            $(".Iholeimg_13").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_13").removeClass("jib_1");
            $(".Iholeimg_13").removeClass("jib_2");
            $(".Iholeimg_13").removeClass("jib_3");
            $(".Iholeimg_13").removeClass("jib_4");
            $(".Iholeimg_13").removeClass("jib_5");
            $(".Iholeimg_13").removeClass("jib_6");
            $(".Iholeimg_13").removeClass("jib_7");
            $(".Iholeimg_13").removeClass("jib_8");
            $(".Iholeimg_13").removeClass("jib_9");
            $(".Iholeimg_13").removeClass("jib_10");
            $(".Iholeimg_13").addClass("jib_"+realitem);
        })
        $(".clickhole_14").on("click", function() {
            $(".holeimg_14").show();
            $(".Iholeimg_14").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_14").removeClass("jib_1");
            $(".Iholeimg_14").removeClass("jib_2");
            $(".Iholeimg_14").removeClass("jib_3");
            $(".Iholeimg_14").removeClass("jib_4");
            $(".Iholeimg_14").removeClass("jib_5");
            $(".Iholeimg_14").removeClass("jib_6");
            $(".Iholeimg_14").removeClass("jib_7");
            $(".Iholeimg_14").removeClass("jib_8");
            $(".Iholeimg_14").removeClass("jib_9");
            $(".Iholeimg_14").removeClass("jib_10");
            $(".Iholeimg_14").addClass("jib_"+realitem);
        })
        $(".clickhole_15").on("click", function() {
            $(".holeimg_15").show();
            $(".Iholeimg_15").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_15").removeClass("jib_1");
            $(".Iholeimg_15").removeClass("jib_2");
            $(".Iholeimg_15").removeClass("jib_3");
            $(".Iholeimg_15").removeClass("jib_4");
            $(".Iholeimg_15").removeClass("jib_5");
            $(".Iholeimg_15").removeClass("jib_6");
            $(".Iholeimg_15").removeClass("jib_7");
            $(".Iholeimg_15").removeClass("jib_8");
            $(".Iholeimg_15").removeClass("jib_9");
            $(".Iholeimg_15").removeClass("jib_10");
            $(".Iholeimg_15").addClass("jib_"+realitem);
        })
        $(".clickhole_16").on("click", function() {
            $(".holeimg_16").show();
            $(".Iholeimg_16").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_16").removeClass("jib_1");
            $(".Iholeimg_16").removeClass("jib_2");
            $(".Iholeimg_16").removeClass("jib_3");
            $(".Iholeimg_16").removeClass("jib_4");
            $(".Iholeimg_16").removeClass("jib_5");
            $(".Iholeimg_16").removeClass("jib_6");
            $(".Iholeimg_16").removeClass("jib_7");
            $(".Iholeimg_16").removeClass("jib_8");
            $(".Iholeimg_16").removeClass("jib_9");
            $(".Iholeimg_16").removeClass("jib_10");
            $(".Iholeimg_16").addClass("jib_"+realitem);
        })
        $(".clickhole_17").on("click", function() {
            $(".holeimg_17").show();
            $(".Iholeimg_17").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_17").removeClass("jib_1");
            $(".Iholeimg_17").removeClass("jib_2");
            $(".Iholeimg_17").removeClass("jib_3");
            $(".Iholeimg_17").removeClass("jib_4");
            $(".Iholeimg_17").removeClass("jib_5");
            $(".Iholeimg_17").removeClass("jib_6");
            $(".Iholeimg_17").removeClass("jib_7");
            $(".Iholeimg_17").removeClass("jib_8");
            $(".Iholeimg_17").removeClass("jib_9");
            $(".Iholeimg_17").removeClass("jib_10");
            $(".Iholeimg_17").addClass("jib_"+realitem);
        })
        $(".clickhole_18").on("click", function() {
            $(".holeimg_18").show();
            $(".Iholeimg_18").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_18").removeClass("jib_1");
            $(".Iholeimg_18").removeClass("jib_2");
            $(".Iholeimg_18").removeClass("jib_3");
            $(".Iholeimg_18").removeClass("jib_4");
            $(".Iholeimg_18").removeClass("jib_5");
            $(".Iholeimg_18").removeClass("jib_6");
            $(".Iholeimg_18").removeClass("jib_7");
            $(".Iholeimg_18").removeClass("jib_8");
            $(".Iholeimg_18").removeClass("jib_9");
            $(".Iholeimg_18").removeClass("jib_10");
            $(".Iholeimg_18").addClass("jib_"+realitem);
        })
        $(".clickhole_19").on("click", function() {
            $(".holeimg_19").show();
            $(".Iholeimg_19").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_19").removeClass("jib_1");
            $(".Iholeimg_19").removeClass("jib_2");
            $(".Iholeimg_19").removeClass("jib_3");
            $(".Iholeimg_19").removeClass("jib_4");
            $(".Iholeimg_19").removeClass("jib_5");
            $(".Iholeimg_19").removeClass("jib_6");
            $(".Iholeimg_19").removeClass("jib_7");
            $(".Iholeimg_19").removeClass("jib_8");
            $(".Iholeimg_19").removeClass("jib_9");
            $(".Iholeimg_19").removeClass("jib_10");
            $(".Iholeimg_19").addClass("jib_"+realitem);
        })
        $(".clickhole_20").on("click", function() {
            $(".holeimg_20").show();
            $(".Iholeimg_20").attr("src", "img/jib_"+realitem+".png");
            $(".Iholeimg_20").removeClass("jib_1");
            $(".Iholeimg_20").removeClass("jib_2");
            $(".Iholeimg_20").removeClass("jib_3");
            $(".Iholeimg_20").removeClass("jib_4");
            $(".Iholeimg_20").removeClass("jib_5");
            $(".Iholeimg_20").removeClass("jib_6");
            $(".Iholeimg_20").removeClass("jib_7");
            $(".Iholeimg_20").removeClass("jib_8");
            $(".Iholeimg_20").removeClass("jib_9");
            $(".Iholeimg_20").removeClass("jib_10");
            $(".Iholeimg_20").addClass("jib_"+realitem);
        })
        }
        
        

        $(".clkholeContainer").on("click", function() {     // 안내문
            $(".message_1").hide();
            $(".message_2").show();
            $(".clickComplete").addClass("pointer");
            $(".clickComplete").on("click", function() {
                $(".clickComplete").removeClass("pointer");
                $(".clkholeContainer").removeClass("pointer");
                $(".click_u").removeClass("pointer");
                $(".click_d").removeClass("pointer");
                $(".lights").show();
                $(".message_2").hide();
                $(".star_1").css("animation-name", "starC");
                $(".star_2").css("animation-name", "starC");
                $(".star_3").css("animation-name", "starC");
                $(".star_4").css("animation-name", "starC");
                $(".star_1").css("animation-duration", "0.5s");
                $(".star_2").css("animation-duration", "0.5s");
                $(".star_3").css("animation-duration", "0.5s");
                $(".star_4").css("animation-duration", "0.5s");
                $(".cursorJib").hide();
                $(".merry").css("animation-name", "merry");
                $(".christmas").css("animation-name", "christmas");
                $(".i_dot").css("animation-name", "i_dot");
                $(".t_line").css("animation-name", "t_line");
                $(".bang_l").css("animation-name", "bang_l");
                $(".bang_d").css("animation-name", "bang_d");
                $(".backlight_1").show();
                $(".backlight_2").show();
            })
        })
    })

        

     


    

 
    
    

    

})


