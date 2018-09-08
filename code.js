$(document).on("scroll", function () {


    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    // first section

    const $art2 = $(".art2");
    const art2FromTop = $art2.offset().top;
    const art2Height = $art2.outerHeight(true);

    const $art3 = $(".art3");
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight(true);

    const $art4 = $(".art4");
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight(true);

    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        $art2.addClass("active");
    }
    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        $art3.addClass("active");
    }
    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        $art4.addClass("active");
    }
    // second section

    const $op1 = $(".op1");
    const op1fromTop = $op1.offset().top;
    const op1Height = $op1.height();

    const $op2 = $(".op2");
    const op2fromTop = $op2.offset().top;
    const op2Height = $op2.height();

    if (scrollValue > op1fromTop + op1Height - windowHeight - op1Height / 2)
        $op1.addClass("active");
    if (scrollValue > op2fromTop + op2Height - windowHeight - op2Height / 2)
        $op2.addClass("active");

    //class reset
    if (scrollValue < 100) {
        $("article").removeClass("active");
    }
})