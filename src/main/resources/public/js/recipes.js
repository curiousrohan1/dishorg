$(document).ready(function () {
    $("#new-title-recipe").hide();
    $("#recipe-details-container").hide();
    $.get("/recipes", function (recipeList, status) {
        recipeList.forEach(function (recipe, idx, arr) {
            $("#recipe-list").append(
                '<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="'
                + recipe.id + '">' + recipe.name + '</button>');
        });
        $("button.recipe-list").click(function () {
            $("#recipe-details-container").show();
            $("button.active.recipe-list").removeClass("active");
            $(this).addClass("active");
            $("#recipe-details").empty();
            console.log($(this).data("id"));
            $.get("/recipes/" + $(this).data("id"), function (recipe, status) {
                recipe.ingredients.forEach(function (ingredient, idx, arr) {
                    var quantity = ingredient.quantity;
                    var name = ingredient.name;
                    var unit = ingredient.unit;
                    var line = quantity + " " + unit + " of " + name;
                    $("#recipe-details").append('<li>' + line + '</li>')
                });
            });
        });
    }, "json")
    $("#plus").click(function () {
        $("#new-title-recipe").show();
    })
    $("#add").click(function () {
         $("#recipe-list").append(
                        '<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="'
                        + recipe.id + '">' + recipe.name + '</button>');
                        $.post({
                                        url: "recipes", data: JSON.stringify(recipe), contentType: "application/json", dataType: "json", success: function (data, status) {
                                            alert("Data: " + data + "\nStatus: " + status);
                                        }
                                    });
    })
});
