//give tables reserved or available class
let currentTable = $(".table").click(function () {
    currentTable = $(this);
});

$(() => {

    $(".modal").hide();

    $(currentTable).click(function () {
        if (!$(this).is(".reserved")) {
            $(".modal").show();
        }
    });


    $("#submit").click(function () {
        $(currentTable).addClass("reserved");
    });


    $("#submit").click(function () {
        $(".modal").hide();
    });

    $("#close").click(function () {
        $(".modal").hide();
    });
});