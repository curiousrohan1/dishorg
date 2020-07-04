var currentRec = null;

function createIngDiv(idx) {
    return `
       <div id="ingDiv${idx}">
            <input id="quantity${idx}" placeholder="Quantity" type="text">
            <input id="unit${idx}" placeholder="Unit" type="text">
            <input id="name${idx}" placeholder="Name" type="text">
            <button class="btn btn-dark" id="addIng${idx}" data-index="${idx}" type="button">Apply</button>
            <button class="btn btn-light" id="cancelIng${idx}" data-index="${idx}" type="button">Cancel</button>
        </div>`
}

function successOnAjaxOfRecipe(recipe, status) {
    recipe.ingredients.forEach(function (ingredient, idx, arr) {
        var quantity = ingredient.quantity;
        var name = ingredient.name;
        var unit = ingredient.unit;
        var line = quantity + " " + unit + " of " + name;
        $("#recipe-details").append('<li>' + line + '</li>')
        $("#recipe-details").append(`<li id="ingEdit${idx}">` + createIngDiv(idx) + '</li>');
        $("#ingEdit"+idx).hide();
        $("#quantity"+idx).val(quantity);
        $("#unit"+idx).val(unit);
        $("#name"+idx).val(name);
    });
    currentRec=recipe;
}

function addHandler(matchingButtons) {
    matchingButtons.click(function () {
        $("#recipe-details-container").show();
        $("button.active.recipe-list").removeClass("active");
        $(this).addClass("active");
        $("#recipe-details").empty();
        $.get("/recipes/" + $(this).data("id"), successOnAjaxOfRecipe);
    });
}
$(document).ready(function () {
    $("#recipe-details-container").append(createIngDiv(""));
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
    // On page load, gets the recipe list, and appends as buttons to a ul in left pane.
    $.get("/recipes", function (recipeList, status) {
        recipeList.forEach(function (recipe, idx, arr) {
            $("#recipe-list").append(
                '<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="'
                + recipe.id + '">' + recipe.name + '</button>');
        });
        addHandler($("button.recipe-list"));
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
                var lastButton=$("button.recipe-list.list-group-item-action:last-child");
                addHandler(lastButton);
                lastButton.trigger("click");
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