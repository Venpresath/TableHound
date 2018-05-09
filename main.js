let currentTable = $(".table").click(function () {
    currentTable = $(this);
});

let currentInfo = $(".table").click(function () {
    currentInfo = $(this).find("div.info");
});



$(() => {

    $(".modal").hide();
    $(".info").hide();

    $(currentTable).click(function () {
        if (!$(this).is(".reserved")) {
            $(".modal").slideDown().show(1000);
        }
    });

    $("#submit").click(function () {
        let name = $("#name").val();
        let phone = $("#phone").val();
        $(currentTable).find(".infoName").text(name);
        $(currentTable).find(".infoNumber").text(phone);
        $(".modal").slideUp().hide(1000);
        $(currentTable).addClass("reserved");
    });

    $("#close").click(function () {
        $(".modal").slideUp().hide(1000);
    });

    $(".table").hover(function(){
        if ($(this).is(".reserved")) {
            $(this).find("div.info").show();
        }
    }, function(){
        $(this).find("div.info").hide();
    }); 
});