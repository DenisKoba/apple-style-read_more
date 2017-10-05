

$(".js-expand").click(function () {
    var expand = $(this).attr('data-id');
    $('.js-expand-block[data-id="'+expand+'"]').addClass("active-expand-block");
    $('.js-block[data-id="'+expand+'"]').addClass("active-block");
    $(".background").fadeIn();
})

$(".js-close").each(function () {
    $(this).click(function () {
        $(".js-expand-block").removeClass("active-expand-block");
        $(".js-block").removeClass("active-block");
        $(".background").fadeOut();
    })
})