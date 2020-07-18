let currentRec = null;
let currentIdx = null;

/*
  successOnAjaxOfRecipe

  Clear recipe details and then for each ingredient, append it to recipe details, along with an
  edit and delete button. Then, it appends an ingDiv for editing purposes in the future.

  Parameters:
  recipe - The recipe object obtained in an ajax (PUT, GET, POST) response
  status - string status; should be "success"
*/
function successOnAjaxOfRecipe(recipe) {
  $('#recipe-details').empty();
  currentRec = recipe;
  $('#rec-title').text(currentRec.name);
  currentRec.ingredients.forEach((ingredient, idx) => {
    const { quantity } = ingredient;
    const { name } = ingredient;
    const { unit } = ingredient;
    let line = '';
    if (unit === '') {
      line = `${quantity} ${name}`;
    } else {
      line = `${quantity} ${unit} of ${name}`;
    }
    $('#recipe-details').append(`
        <li id="ing-line-container${idx}">
            <button class="edit-recipes btn" id="edit-ing${idx}" data-idx="${idx}">
                <img src="images/edit.jpg"style="width:30px;height:30px;">
            </button>
            <button type="button" class="btn openModal" data-toggle="modal" data-idx="${idx}"
                    id="open-modal${idx}" data-target="#cont-del-modal">
                <img src="images/del.png"style="width:30px;height:30px;">
            </button>
            ${line}
        </li>`);
    $('#recipe-details').append(`<li id="ing-edit${idx}">${createIngDiv(idx)}</li>`);
    $(`#ing-edit${idx}`).hide();
    $('button.edit-recipes').prop('disabled', false);
    $(`#quantity${idx}, #unit${idx}, #name${idx}`).keypress((event) => {
      if ($(`#quantity${idx}`).val() !== '' && $(`#name${idx}`).val() !== ''
          && event.keyCode === 13) {
        $(`#add-ing${idx}`).click();
      }
    });
  });
  $('button.edit-recipes').click(function () {
    const idx = $(this).data('idx');
    const ing = currentRec.ingredients[idx];
    // Populate the ingredient's input fields with the current values from currentRec and then show
    // the input fields; also hide the "line".
    $(`#quantity${idx}`).val(ing.quantity);
    $(`#unit${idx}`).val(ing.unit);
    $(`#name${idx}`).val(ing.name);
    $('button.edit-recipes').prop('disabled', true);
    $(`#ing-edit${idx}`).show();
    $(`#ing-line-container${idx}`).hide();
    $(`#quantity${idx}`).focus();
  });
  $('li > div > button.cancel').click(function () {
    $('button.edit-recipes').prop('disabled', false);
    ingCancel($(this).data('idx'));
  });
  $('li > div > button.apply').click(function () {
    ingApply($(this).data('idx'));
  });
  $('button.openModal').click(function () {
    currentIdx = $(this).data('idx');
  });
}

/*
  createIngDiv

  Returns an ingDiv, which consists of 3 inputs(denoting quantity, name, and unit) and two buttons
  (one is a cancel button, the other is an apply/add button).

  Parameters:
  idx - The index of the ingDiv created
*/
function createIngDiv(idx) {
  return `
   <div id="ing-div${idx}">
      <input id="quantity${idx}" placeholder="Quantity" type="text" class="inputIngInfo"
             data-idx="${idx}">
      <input id="unit${idx}" placeholder="Unit" type="text" class="inputIngInfo" data-idx="${idx}">
      <input id="name${idx}" placeholder="Name" type="text" data-idx="${idx}" class="inputIngInfo">
      <button class="btn btn-dark apply" id="add-ing${idx}" data-idx="${idx}" type="button">
        <img src="images/apply.png"style="width:30px;height:30px;">
      </button>
      <button class="btn btn-light cancel" id="cancel-ing${idx}" data-idx="${idx}" type="button">
        <img src="images/cancel.jpg"style="width:30px;height:30px;">
      </button>
    </div>`;
}

/*
  ingCancel

  Part 2 of the click handler for the cancel buttons of the ingDivs. It determines whether or not
  the ing that is being canceled was being created or edited, and cancels accordingly.

  Parameters:
  idx - The index of the ing referenced
*/
function ingCancel(idx) {
  if (idx === '') {
    $('#ing-div').hide();
  } else {
    $(`#ing-edit${idx}`).hide();
    $(`#ing-line-container${idx}`).show();
  }
}

/*
  ingApply

  Part 2 of the click handler for the apply buttons of the ingDivs. It determines whether or not
  the ing that is being applied was being created or edited, and applies accordingly.

  Parameters:
  idx - The index of the ing denoted
*/
function ingApply(idx) {
  const quantity = $(`#quantity${idx}`).val();
  const name = $(`#name${idx}`).val();
  const unit = $(`#unit${idx}`).val();
  let line = '';
  if (unit === '') {
    line = `${quantity} ${name}`;
  } else {
    line = `${quantity} ${unit} of ${name}`;
  }
  if (idx === '') {
    // Idx is empty, so we are adding, not editing.
    currentRec.ingredients.push({ quantity, name, unit });
    $('#unit').val('');
    $('#name').val('');
    $('#quantity').val('');
  } else {
    // Idx is not empty, so we are editing not adding.
    currentRec.ingredients[idx] = { quantity, name, unit };
  }
  $.ajax({
    type: 'PUT',
    url: `/recipes/${currentRec.id}`,
    data: JSON.stringify(currentRec),
    contentType: 'application/json',
    dataType: 'json',
    success: successOnAjaxOfRecipe,
  });
  $('#quantity').focus();
}

/*
  recipeButtonCallback

  The callback of the recipe buttons.

  Parameters: none.
*/
function recipeButtonCallback() {
  $('#recipe-details-container').show();
  $('button.active.recipe-list').removeClass('active');
  $(this).addClass('active');
  $.get(`/recipes/${$(this).data('id')}`, successOnAjaxOfRecipe);
  $('#ing-div').hide();
}

/*
  reset

  Virtually restarts the whole program. Reloads both the left and right panes.

  Parameters: none.

*/
function reset() {
  $('#recipe-details-container').hide();
  // On page load, gets the recipe list, and appends as buttons to a ul in left pane.
  $.get('/recipes', (recipeList) => {
    $('#recipe-list').empty();
    recipeList.forEach((recipe) => {
      $('#recipe-list').append(
        `<button class="recipe-list list-group-item list-group-item-action " type="button"
                 data-id="${recipe.id}">${recipe.name}
         </button>`,
      );
    });
    $('button.recipe-list').click(recipeButtonCallback);
  }, 'json');
  currentRec = null;
  currentIdx = null;
}

$(document).ready(() => {
  reset();
  $('#renamed-recipe-name').hide();
  $('#add-rec-div').hide();
  $('#ing-div').hide();
  $('#recipe-details-container').append(createIngDiv(''));
  $('#add-ing').click(() => {
    ingApply('');
  });
  $('#cancel-ing').click(() => {
    ingCancel('');
  });
  $('#new-recipe-name').keypress((event) => {
    if (event.keyCode === 13) {
      $('#add-rec').click();
    }
  });
  $('#rename-rec-input').keypress((event) => {
    if (event.keyCode === 13) {
      $('#apply-rec-rename').click();
    }
  });
  $('#cont-del').click(() => {
    currentRec.ingredients.splice(currentIdx, 1);
    $.ajax({
      type: 'PUT',
      url: `/recipes/${currentRec.id}`,
      data: JSON.stringify(currentRec),
      contentType: 'application/json',
      dataType: 'json',
      success: successOnAjaxOfRecipe,
    });
  });
  $('input.inputIngInfo').keypress(function (event) {
    const idx = $(this).data('idx');
    if ($(`#quantity${idx}`).val() !== '' && $(`#name${idx}`).val() !== '' && event.keyCode === 13) {
      $(`#add-ing${idx}`).click();
    }
  });

  $('#plus-rec').click(() => {
    $('#new-recipe-name').val('');
    $('#add-rec-div').show();
    $('#new-recipe-name').focus();
  });
  $('#add-rec').click(() => {
    $('#add-rec-div').hide();
    currentRec = { name: $('#new-recipe-name').val(), ingredients: [] };
    $.post({
      url: 'recipes',
      data: JSON.stringify(currentRec),
      contentType: 'application/json',
      dataType: 'json',
      success: (recipe) => {
        currentRec = recipe;
        $('#recipe-list').append(
          `<button class="recipe-list list-group-item list-group-item-action " type="button"
                   data-id="${recipe.id}">${recipe.name}
           </button>`,
        );
        const lastButton = $('button.recipe-list.list-group-item-action:last-child');
        lastButton.click(recipeButtonCallback);
        lastButton.trigger('click');
        $('#plus-ing').click();
      },
    });
  });
  $('#plus-ing').click(() => {
    $('#unit').val('');
    $('#name').val('');
    $('#quantity').val('');
    $('#ing-div').show();
    $('#quantity').focus();
  });
  $('#del-rec').click(() => {
    $.ajax({
      type: 'DELETE',
      url: `/recipes/${currentRec.id}`,
      dataType: 'json',
      statusCode: {
        200: reset,
      },
    });
  });
  $('#edit-rec-name').click(() => {
    $('#rec-title').hide();
    $('#renamed-recipe-name').show();
  });
  $('#apply-rec-rename').click(() => {
    currentRec.name = $('#rename-rec-input').val();
    $.post({
      url: 'recipes',
      data: JSON.stringify(currentRec),
      contentType: 'application/json',
      dataType: 'json',
      success(data) {
        $('button.recipe-list.active').text(data.name);
      },
    });
    $('#rec-title').show();
    $('#renamed-recipe-name').hide();
    $('#rename-rec-input').val($('#rec-title').text());
    $('#rec-title').text(currentRec.name);
  });
  $('#cancel-rec-rename').click(() => {
    $('#rec-Title').show();
    $('#renamed-recipe-name').hide();
    $('#rename-rec-input').val($('#rec-title').text());
  });
});
