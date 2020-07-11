let currentRec = null;
let currentIdx = null;
/*
  createIngDiv

  Returns an ingDiv, which consists of 3 inputs(denoting quantity, name, and unit) and two buttons(one is a
  cancel button, the other is an apply/add button).

  Parameters:
  idx - The index of the ingDiv created
*/
function createIngDiv(idx) {
    return `
       <div id="ingDiv${idx}">
            <input id="quantity${idx}" placeholder="Quantity" type="text"class="inputIngInfo"data-idx="${idx}">
            <input id="unit${idx}" placeholder="Unit" type="text"class="inputIngInfo"data-idx="${idx}">
            <input id="name${idx}" placeholder="Name" type="text" data-idx="${idx}" class="inputIngInfo">
            <button class="btn btn-dark apply" id="addIng${idx}" data-idx="${idx}" type="button"><img src="images/apply.png"style="width:30px;height:30px;"></button>
            <button class="btn btn-light cancel" id="cancelIng${idx}" data-idx="${idx}" type="button"><img src="images/cancel.jpg"style="width:30px;height:30px;"></button>
        </div>`
}
/*
  ingCancel

  Part 2 of the click handler for the cancel buttons of the ingDivs. It determines whether or not the ing that is being canceled was being created or edited, and cancels accordingly.

  Parameters:
  idx - The index of the ing referenced
*/
function ingCancel(idx) {
  if (idx === '') {
    $('#ingDiv').hide();
  } else {
    $(`#ingEdit${idx}`).hide();
    $(`#ingLineContainer${idx}`).show();
  }
}
/*
  ingApply

  Part 2 of the click handler for the apply buttons of the ingDivs. It determines whether or not the ing that
  is being applied was being created or edited, and applies accordingly.

  Parameters:
  idx - The index of the ing denoted
*/
function ingApply(idx) {
  const quantity = $(`#quantity${idx}`).val();
  const name = $(`#name${idx}`).val();
  const unit = $(`#unit${idx}`).val();
  const line = `${quantity} ${unit} of ${name}`;
  if (idx === '') {
    currentRec.ingredients.push({ quantity, name, unit });
    $('#unit').val('');
    $('#name').val('');
    $('#quantity').val('');
  } else {
    currentRec.ingredients[idx] = { quantity, name, unit };
  }
  $.ajax({
    type: 'PUT', url: `/recipes/${currentRec.id}`, data: JSON.stringify(currentRec), contentType: 'application/json', dataType: 'json', success: successOnAjaxOfRecipe,
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
  $('#recipe-details').empty();
  recipe.ingredients.forEach((ingredient, idx, arr) => {
    const { quantity } = ingredient;
    const { name } = ingredient;
    const { unit } = ingredient;
    const line = `${quantity} ${unit} of ${name}`;
    $('#recipe-details').append(`
            <li id="ingLineContainer${idx}">
                <button class="edit-recipes btn" id="editIng${idx}" data-idx="${idx}"><img src="images/edit.jpg"style="width:30px;height:30px;"></button>
                <button type="button" class="btn openModal" data-toggle="modal" data-idx="${idx}"id="openModal${idx}" data-target="#confToDelModal"><img src="images/del.png"style="width:30px;height:30px;"></button>
                ${line}
            </li>`);
    $('#recipe-details').append(`<li id="ingEdit${idx}">${createIngDiv(idx)}</li>`);
    $(`#ingEdit${idx}`).hide();
    $(`#quantity${idx}`).val(quantity);
    $(`#unit${idx}`).val(unit);
    $(`#name${idx}`).val(name);
    $('button.edit-recipes').prop('disabled', false);
  });
  currentRec = recipe;
  $('#recTitle').text(currentRec.name);
  $('button.edit-recipes').click(function () {
    const idx = $(this).data('idx');
    const ing = currentRec.ingredients[idx];
    $(`#quantity${idx}`).val(ing.quantity);
    $(`#unit${idx}`).val(ing.unit);
    $(`#name${idx}`).val(ing.name);
    $('button.edit-recipes').prop('disabled', true);
    $(`#ingEdit${idx}`).show();
    $(`#ingLineContainer${idx}`).hide();
  });
  $('li div button.cancel').click(function () {
    $('button.edit-recipes').prop('disabled', false);
    const idx = $(this).data('idx');
    ingCancel(idx);
  });
  $('li div button.apply').click(function () {
    const idx = $(this).data('idx');
    ingApply(idx);
  });
  $('button.openModal').click(function () {
    currentIdx = $(this).data('idx');
  });
  $('#continueDel').click(() => {
    const ing = currentRec.ingredients[currentIdx];
    const newIngArr = [];
    currentRec.ingredients.forEach((ingredient, idx, arr) => {
      if (ing !== ingredient) {
        newIngArr.push({ quantity: ingredient.quantity, unit: ingredient.unit, name: ingredient.name });
      }
    });
    currentRec.ingredients = newIngArr;
    $.ajax({
      type: 'PUT', url: `/recipes/${currentRec.id}`, data: JSON.stringify(currentRec), contentType: 'application/json', dataType: 'json', success: successOnAjaxOfRecipe,
    });
  });
}
/*
  addRecHandler

  Adds a click handler to the buttons of the recipeList.

  Parameters:
  matchingButtons - The button being referenced
*/
function addRecHandler(matchingButtons) {
  matchingButtons.click(function () {
    $('#recipe-details-container').show();
    $('button.active.recipe-list').removeClass('active');
    $(this).addClass('active');
    $.get(`/recipes/${$(this).data('id')}`, successOnAjaxOfRecipe);
  });
}
/*
  virtualRestart

  Virtually restarts the whole program. Reloads both the left and right panes.

  Parameters:
  data - The currentRec object being deleted
  status - string status; should be "success"
*/
function virtualRestart(data, status) {
  $('#renamed-recipe-name').hide();
  $('#unit').val('');
  $('#name').val('');
  $('#quantity').val('');
  $('#recDiv').hide();
  $('#ingDiv').hide();
  $('#recipe-details-container').hide();
  // On page load, gets the recipe list, and appends as buttons to a ul in left pane.
  $.get('/recipes', (recipeList, status) => {
    $('#recipe-list').empty();
    recipeList.forEach((recipe, idx, arr) => {
      $('#recipe-list').append(
        `<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="${
          recipe.id}">${recipe.name}</button>`,
      );
    });
    addRecHandler($('button.recipe-list'));
  }, 'json');
  currentRec = null;
  currentIdx = null;
}

$(document).ready(() => {
  virtualRestart(null, null);
  $('#recipe-details-container').append(createIngDiv(''));
  $('#addIng').click(() => {
    ingApply('');
  });
  $('#cancelIng').click(() => {
    ingCancel('');
  });
  $('#new-recipe-name').keypress((event) => {
    if (event.keyCode === 13) {
      $('#addRec').click();
    }
  });
  $('#renameRecInput').keypress((event) => {
    if (event.keyCode === 13) {
      $('#applyRecRename').click();
    }
  });
  $('input.inputIngInfo').keypress(function (event) {
    const idx = $(this).data('idx');
    if ($(`#unit${idx}`).val() !== '') {
      if ($(`#quantity${idx}`).val() !== '') {
        if ($(`#name${idx}`).val() !== '') {
          if (event.keyCode === 13) {
            $(`#addIng${idx}`).click();
          }
        }
      }
    }
  });

  $('#plusRec').click(() => {
    $('#new-recipe-name').val('');
    $('#recDiv').show();
    $('#new-recipe-name').focus();
  });
  $('#addRec').click(() => {
    $('#recDiv').hide();
    const recipe = { name: $('#new-recipe-name').val(), ingredients: [] };
    $.post({
      url: 'recipes',
      data: JSON.stringify(recipe),
      contentType: 'application/json',
      dataType: 'json',
      success(data, status) {
        $('#recipe-list').append(
          `<button class="recipe-list list-group-item list-group-item-action " type="button" data-id="${
            data.id}">${data.name}</button>`,
        );
        const lastButton = $('button.recipe-list.list-group-item-action:last-child');
        addRecHandler(lastButton);
        lastButton.trigger('click');
      },
    });
  });
  $('#plusIng').click(() => {
    $('#unit').val('');
    $('#name').val('');
    $('#quantity').val('');
    $('#ingDiv').show();
  });
  $('#delRec').click(() => {
    $.ajax({
      type: 'DELETE',
      url: `/recipes/${currentRec.id}`,
      dataType: 'json',
      statusCode: {
        200: virtualRestart,
      },
    });
  });
  $('#editRecName').click(() => {
    $('#recTitle').hide();
    $('#editRecName').hide();
    $('#renamed-recipe-name').show();
    $('#renameRecInput').val($('#recTitle').text());
  });
  $('#applyRecRename').click(() => {
    currentRec.name = $('#renameRecInput').val();
    $.post({
      url: 'recipes',
      data: JSON.stringify(currentRec),
      contentType: 'application/json',
      dataType: 'json',
      success(data, status) {
        $('button.recipe-list.active').text(data.name);
      },
    });
    $('#recTitle').show();
    $('#editRecName').show();
    $('#renamed-recipe-name').hide();
    $('#renameRecInput').val($('#recTitle').text());
    $('#recTitle').text(currentRec.name);
  });
  $('#cancelRecRename').click(() => {
    $('#recTitle').show();
    $('#editRecName').show();
    $('#renamed-recipe-name').hide();
    $('#renameRecInput').val($('#recTitle').text());
  });
});
