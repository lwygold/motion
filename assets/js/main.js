const faq_type1 = function () {
    var faq_past = -1;
    $('.faq ul li').bind("click", function (e) {
        setTimeout(function () {
            locoScroll.update();
        }, 500);
        var idx = $(this).index();
        $(this).parent().find('li').removeClass('active color')
        if (idx == faq_past) {
            $(this).removeClass('active color')
            faq_past = -1;
        } else {
            $(this).addClass('active color')
            faq_past = idx;
        }
    });
}