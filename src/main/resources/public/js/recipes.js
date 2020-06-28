$(document).ready(function () {
    $.get("/recipes", function (data, status) {
        data.forEach(function (value, idx, arr) {
            $("#recipe-list").append('<button class="recipe-list list-group-item list-group-item-action " type="button">' + value.name + '</button>');
        });
        $("button.recipe-list").click(function () {
            $("button.active.recipe-list").removeClass("active");
            $(this).addClass("active");
        });
    }, "json")
});
