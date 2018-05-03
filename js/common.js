$(function(f){
    var element = f('.logo');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 500 ? 'In': 'Out')](200);           
    });
});

// !!!!!!!!!! Пыталась сделать переход от первого блока ко второму фейдом, но при обратном скролле первый блок исчезает и не появляется 
// пока не нашла решение проблемы

// $(window).scroll(function(e) {
//    if($(window).scrollTop()>=200) {
//     $('.top-section').fadeIn(200);
//    } else {
//      $('.top-section').fadeOut(200);
//    }
// });

// !!!!!!!!!! Нашла вот такой способ перехода от первого ко второму блоку, решила оставить этот вариант
$(function() {
    var documentEl = $(document),
        fadeElem = $('.top-section');

    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/600);
        }); 
    });
});
