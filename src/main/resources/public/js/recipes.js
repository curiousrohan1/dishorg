var currentRec = null;
function successOnAjaxOfRecipe(recipe, status) {
    recipe.ingredients.forEach(function (ingredient, idx, arr) {
        var quantity = ingredient.quantity;
        var name = ingredient.name;
        var unit = ingredient.unit;
        var line = quantity + " " + unit + " of " + name;
        $("#recipe-details").append('<li>' + line + '</li>')
    });
    currentRec=recipe;
}

function addHandler() {
    $("button.recipe-list").click(function () {
        $("#recipe-details-container").show();
        $("button.active.recipe-list").removeClass("active");
        $(this).addClass("active");
        $("#recipe-details").empty();
        $.get("/recipes/" + $(this).data("id"), successOnAjaxOfRecipe);
    });
}
$(document).ready(function () {
    $("#unit").val("");
    $("#name").val("");
    $("#quantity").val("");
    $("#recDiv").hide();
    $("#ingDiv").hide();
    $("#recipe-details-container").hide();
    $("#new-recipe-name").keypress(function(event) {
        if (event.keyCode === 13) {
            $("#addRec").click();
        }
    });
    $.get("/recipes", function (recipeList, status) {
        recipeList.forEach(function (recipe, idx, arr) {
            $("#recipe-list").append(
                '<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="'
                + recipe.id + '">' + recipe.name + '</button>');
        });
        addHandler();
    }, "json");
    $("#plusRec").click(function () {
        $("#new-recipe-name").val("");
        $("#recDiv").show();
        $("#new-recipe-name").focus();
    });
    $("#addRec").click(function () {
        $("#recDiv").hide();
        var recipe = { name: $("#new-recipe-name").val(), ingredients: [] };
        $.post({
            url: "recipes", data: JSON.stringify(recipe), contentType: "application/json", dataType: "json", success: function (data, status) {
                $("#recipe-list").append(
                    '<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="'
                    + data.id + '">' + data.name + '</button>');
                addHandler();
                $("button.recipe-list.list-group-item-action:last-child").trigger("click");
            }
        });
    });
    $("#plusIng").click(function () {
        $("#unit").val("");
        $("#name").val("");
        $("#quantity").val("");
        $("#ingDiv").show();
    });
    $("#addIng").click(function () {
        $("#recipe-details").empty();
        var quantity = $("#quantity").val();
        var name = $("#name").val();
        var unit = $("#unit").val();
        var line = quantity + " " + unit + " of " + name;
        currentRec.ingredients.push({ quantity: quantity, name: name, unit: unit });
        $("#unit").val("");
        $("#name").val("");
        $("#quantity").val("");
        $.ajax({
            type:"PUT", url: "/recipes/"+currentRec.id, data: JSON.stringify(currentRec), contentType: "application/json", dataType: "json", success: successOnAjaxOfRecipe
        });
        $("#ingDiv").hide();
    });
});