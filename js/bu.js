/**
 * Created by KRM on 8/29/15.
 */



// Sticks the 12-icon bar on top of the page when scrolled up
$(document).ready(function(){

    var stickySidebar = $('#top').offset().top;
    var twelveIconBar = $('.bu_twelveikon_nav');
    var width = $(window).width();

    //if( (width) >= 769 ) {

        $(window).scroll(function () {
            if ($(window).scrollTop() > stickySidebar) {
                $('#top').addClass('stick_me_ontop');
                //$(twelveIconBar).css('background-color', 'rgba(51,51,51,0.9)')
            }
            else {
                $('#top').removeClass('stick_me_ontop');
                //$(twelveIconBar).css('background-color', 'rgba(51,51,51,0.6)')
            }

        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > stickySidebar) {
                $('#sldbr_overlay').addClass('stick_me_ontop_menu');
            }
            else {
                $('#sldbr_overlay').removeClass('stick_me_ontop_menu');
            }

        });


    //}

});


// Go to top
$(document).ready(function(){

    var goTopButton = $("#go-2-top");

    $(window).scroll(function(e){
        if ($(this).scrollTop() > 100) {
            $(goTopButton).fadeIn();
        } else {
            $(goTopButton).fadeOut();
        }

    });


    $(goTopButton).click(function(){
        $('html, body').animate({ scrollTop: ($('.search_area').offset().top - parseInt($('#top').height())) }, 800);

    });

});



$(document).ready(function(){

    var togglerButton = $("#sidebar-toggle_abs");
    var overlaySidebar = $("#sldbr_overlay");
    var visibleTail = $('.pzik');
    var mainMenuUl = $('.sidebar_bumenu');


    $(togglerButton && visibleTail).on('click', function(e){
        $(overlaySidebar).toggleClass('open_ully');
        $("#ovr").toggleClass('show_overlay');

        if( $(overlaySidebar).hasClass('open_ully')) {

            if ((width) >= 850) {
                $(visibleTail).animate({'left': '0'}, 600);
                $(mainMenuUl).animate({'left': '4%'}, 600);

            } else if ((width) <= 850) {
                $(visibleTail).animate({'left': '0'}, 600);
                $(mainMenuUl).animate({'left': '6%'}, 600);

            } if ((width) <= 600) {
                $(visibleTail).animate({'left': '0'}, 600);
                $(mainMenuUl).animate({'left': '6%'}, 600);

            } if ((width) <= 570) {
                $(visibleTail).animate({'left': '0'}, 600);
                $(mainMenuUl).animate({'left': '8%'}, 600);

            } if ((width) <= 440) {
                $(visibleTail).animate({'left': '0'}, 200);
                $(mainMenuUl).animate({'left': '9%'}, 200);

            } if ((width) <= 400) {
                $(visibleTail).animate({'left': '0'}, 200);
                $(mainMenuUl).animate({'left': '11%'}, 200);

            }

        }
        else {
            $(visibleTail).css('left', 'auto');
            $(mainMenuUl).css('left','auto');
        }


        e.stopPropagation();
        //return false;
    });


    //var dropdownLi = $('li.dropdown');
    var maskingSubLvl = $('.masking_sublevel');
    var importedUl = $('.masking_sublevel ul');

    var hiddenUl = $('.hidden_ul ul');
    var hidden = $('.hidden_ul');

    var width = $(window).width();


    if( (width) >= 600 ) {

        $('li.dropdown').on('mouseover', function() {
            //console.log("over: " + $(this).attr("id"));
            $(maskingSubLvl).empty();
            $(this).find(hiddenUl).clone().appendTo(maskingSubLvl);
            $(maskingSubLvl).css('display', 'block');
            $('.dropdown-toggle').css({'background-color': '#333333', 'color': '#ffbf24'});
            $(this).find('.dropdown-toggle').css({'background-color': '#ffbf24', 'color': '#333333'});
        });

        $(document).on('click',function(){
            $(maskingSubLvl).css('display','none');
            $(overlaySidebar).removeClass('open_ully');
            $("#ovr").removeClass('show_overlay');
            $(visibleTail).css('left', 'auto');
            $(mainMenuUl).css('left','auto');
            $('.dropdown-toggle').css({'background-color':'#333333', 'color':'#ffbf24'});

        })

    }

    $('li.dropdown').on('mouseleave',function() {
    //console.log("out: " + $(this).attr("id"));
    //$(maskingSubLvl).empty();
    //$(maskingSubLvl).css('display','none');
    //$(this).find('.dropdown-toggle').css({'background-color':'#333333', 'color':'#ffbf24'});

    });


    $('ul.dropdown-menu').on('mouseleave',function(){
        $('li.dropdown').removeClass('open');
    });

    $('ul.dropdown-menu li a').on('click',function(){
        $(overlaySidebar).removeClass('open_ully');
        $("#ovr").removeClass('show_overlay');
        $(visibleTail).css('left', 'auto');
        $(mainMenuUl).css('left','auto');
    });

});



$(document).ready(function(){

    $(function () {
        $(window).scroll(function () {
            if ($('#idRegForm').is(':visible')){
                $('#idRegForm').fadeOut(700);
            }
        });

        $('#idJoinUs').click(function () { event.stopPropagation(); ToggleLoginPanel('j'); });
        $('#idLogin').click(function () { event.stopPropagation(); ToggleLoginPanel('l'); });
    });

    function ToggleLoginPanel(mode) {
        $('body').click(function (event) {
            var $target = $(event.target);

            if ($target.parents('#idRegForm').length == 0) {
                $('#idRegForm').fadeOut(700);
            }
        });

        $('#idRegForm').fadeIn(700);
        if (mode === 'l') {
            $('#idLoginField').focus();
        }
        else if (mode === 'j') {
            $('#idReqCompanyNameField').focus();
        }

    }

    var closeButton = $('#closethefuckdown');
    var closeIcon = $('#closethefuckdown > i');

    $(closeButton).on('mouseover',function(){
        $(closeIcon).addClass('fa-spin');
    }).on('mouseleave',function(){
        $('#closethefuckdown > i').removeClass('fa-spin');
    });

    $(closeButton).on('click',function(){
        $('#idRegForm').fadeOut(700);
    });

});
