let currentTable = $(".table").click(function () {
    currentTable = $(this);
});

$(() => {

    $(".modal").hide();

    $(currentTable).click(function () {
        if (!$(this).is(".reserved")) {
            $(".modal").slideDown().show(1000);
        }
    });

    $("#submit").click(function () {
        $(currentTable).addClass("reserved");
    });


    $("#submit").click(function () {
        $(".modal").slideUp().hide(1000);
    });

    $("#close").click(function () {
        $(".modal").slideUp().hide(1000);
    });
});