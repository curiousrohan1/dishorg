var currentRec = null;
var currentIdx=null;
function createIngDiv(idx) {
    return `
       <div id="ingDiv${idx}">
            <input id="quantity${idx}" placeholder="Quantity" type="text">
            <input id="unit${idx}" placeholder="Unit" type="text">
            <input id="name${idx}" placeholder="Name" type="text">
            <button class="btn btn-dark apply" id="addIng${idx}" data-idx="${idx}" type="button"><img src="images/apply.png"style="width:30px;height:30px;"></button>
            <button class="btn btn-light cancel" id="cancelIng${idx}" data-idx="${idx}" type="button"><img src="images/cancel.jpg"style="width:30px;height:30px;"></button>
        </div>`
}

function ingCancel(idx) {
    if (idx === "") {
        $("#ingDiv").hide();
    } else {
        $("#ingEdit"+idx).hide();
        $("#ingLineContainer"+idx).show();
    }
}

function ingApply(idx) {
    var quantity = $("#quantity" + idx).val();
    var name = $("#name" + idx).val();
    var unit = $("#unit" + idx).val();
    var line = quantity + " " + unit + " of " + name;
    if(idx === ""){
        currentRec.ingredients.push({ quantity: quantity, name: name, unit: unit });
        $("#unit").val("");
        $("#name").val("");
        $("#quantity").val("");
    } else {
        currentRec.ingredients[idx] = { quantity: quantity, name: name, unit: unit };
    }
    $.ajax({
        type:"PUT", url: "/recipes/"+currentRec.id, data: JSON.stringify(currentRec), contentType: "application/json", dataType: "json", success: successOnAjaxOfRecipe
    });
}

/*
  successOnAjaxOfRecipe
  
  Clear recipe details and then for each ingredient, append it to recipe details, along with an edit button.
  Then, it appends an ingDiv for editing purposes in the future.
  
  Parameters:
  recipe - The recipe object obtained in an ajax (PUT, GET, POST) response
  status - string status; should be "success"
*/
function successOnAjaxOfRecipe(recipe, status) {
    $("#recipe-details").empty();
    recipe.ingredients.forEach(function (ingredient, idx, arr) {
        var quantity = ingredient.quantity;
        var name = ingredient.name;
        var unit = ingredient.unit;
        var line = quantity + " " + unit + " of " + name;
        $("#recipe-details").append(`
            <li id="ingLineContainer${idx}">
                <button class="edit-recipes btn" id="editIng${idx}" data-idx="${idx}"><img src="images/edit.jpg"style="width:30px;height:30px;"></button>
                <button type="button" class="btn openModal" data-toggle="modal" data-idx="${idx}"id="openModal${idx}" data-target="#confToDelModal"><img src="images/del.png"style="width:30px;height:30px;"></button>
                ${line}
            </li>`)
        $("#recipe-details").append(`<li id="ingEdit${idx}">` + createIngDiv(idx) + '</li>');
        $("#ingEdit"+idx).hide();
        $("#quantity"+idx).val(quantity);
        $("#unit"+idx).val(unit);
        $("#name"+idx).val(name);
        $("button.edit-recipes").prop("disabled", false );
    });
    currentRec=recipe;
    $("#recTitle").text(currentRec.name);
    $("button.edit-recipes").click(function(){
        var idx=$(this).data("idx");
        var ing=currentRec.ingredients[idx];
        $("#quantity"+idx).val(ing.quantity);
        $("#unit"+idx).val(ing.unit);
        $("#name"+idx).val(ing.name);
        $("button.edit-recipes").prop("disabled", true );
        $("#ingEdit"+idx).show();
        $("#ingLineContainer"+idx).hide();
    });
    $("li div button.cancel").click(function(){
        $("button.edit-recipes").prop("disabled", false );
        var idx=$(this).data("idx");
        ingCancel(idx);
    });
    $("li div button.apply").click(function(){
        var idx=$(this).data("idx");
        ingApply(idx);
    });
    $("button.openModal").click(function(){
        currentIdx=$(this).data("idx");
    })
    $("#continueDel").click(function(){
        var ing = currentRec.ingredients[currentIdx]
        var newIngArr = [];
        currentRec.ingredients.forEach(function(ingredient, idx, arr){
            if(ing!==ingredient){
                newIngArr.push({quantity:ingredient.quantity,unit:ingredient.unit,name:ingredient.name})
            }
        });
        currentRec.ingredients=newIngArr;
        $.ajax({
            type:"PUT", url: "/recipes/"+currentRec.id, data: JSON.stringify(currentRec), contentType: "application/json", dataType: "json", success: successOnAjaxOfRecipe
        });
    });
}

function addRecHandler(matchingButtons) {
    matchingButtons.click(function () {
        $("#recipe-details-container").show();
        $("button.active.recipe-list").removeClass("active");
        $(this).addClass("active");
        $.get("/recipes/" + $(this).data("id"), successOnAjaxOfRecipe);
    });
}
$(document).ready(function() {
    $("#renamed-recipe-name").hide();
    $("#recipe-details-container").append(createIngDiv(""));
    $("#addIng").click(function() {
        ingApply("");
    });
    $("#cancelIng").click(function() {
        ingCancel("");
    });
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
        addRecHandler($("button.recipe-list"));
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
                addRecHandler(lastButton);
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
    $("#editRecName").click(function(){
        $("#recTitle").hide();
        $("#editRecName").hide();
        $("#renamed-recipe-name").show();
        $("#renameRecInput").val($("#recTitle").text());
    })
    $("#applyRecRename").click(function(){
        currentRec.name= $("#renameRecInput").val();
        $.post({
            url: "recipes", data: JSON.stringify(currentRec), contentType: "application/json", dataType: "json", success: function (data, status) {
                $("button.recipe-list.active").text(data.name);
            }
         });
        $("#recTitle").show();
        $("#editRecName").show();
        $("#renamed-recipe-name").hide();
        $("#renameRecInput").val($("#recTitle").text());
    })
    $("#cancelRecRename").click(function(){
        $("#recTitle").show();
        $("#editRecName").show();
        $("#renamed-recipe-name").hide();
        $("#renameRecInput").val($("#recTitle").text());
    })
});