let currentRec = null;
let currentIdx = null;
let unitList = null;
const noUnit = '[No Unit]';
/*
  getIngDiv

  Returns an ingDiv, which consists of 3 inputs(denoting quantity, name, and unit) and two buttons
  (one is a cancel button, the other is an apply/add button).

  Parameters:
  idx - The index of the ingDiv created
*/
function getIngDiv(idx) {
  $('error-message').hide();
  const ingDiv = `
    <div id="ing-div${idx}">
    <form class="form-inline">
    <label class="sr-only" for="quantity${idx}">Quantity</label>
    <input type="text" class="form-control mb-2 mr-sm-2 inputIngInfo" id="quantity${idx}" placeholder="Quantity" data-idx="${idx}">
    <label class="sr-only" for="unit-dropdown${idx}">Unit</label>
    <select class="form-control mb-2 mr-sm-2" id="unit-dropdown${idx}"></select>
    <label class="sr-only" for="name${idx}">Name</label>
    <input type="text" class="form-control mb-2 mr-sm-2 inputIngInfo" id="name${idx}" placeholder="Name" data-idx="${idx}">
    <button class="btn btn-light apply" id="add-ing${idx}" data-idx="${idx}" type="button">
    <img src="images/apply.png"style="width:30px;height:30px;">
    </button>
    <button class="btn btn-light cancel" id="cancel-ing${idx}" data-idx="${idx}" type="button">
    <img src="images/cancel.jpg"style="width:30px;height:30px;">
    </button>
    </form>
    </div>
    `;
  return ingDiv;
}

/*
  ingCancel

  Part 2 of the click handler for the cancel buttons of the ingDivs. It determines whether or not
  the ing that is being canceled was being created or edited, and cancels accordingly.

  Parameters:
  idx - The index of the ing referenced
*/
function ingCancel(idx) {
  $('error-message').hide();

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
  $('error-message').hide();

  const quantity = $(`#quantity${idx}`).val();
  const name = $(`#name${idx}`).val();
  const unit = $(`#unit-dropdown${idx}`).val();
  if (idx === '') {
    // Idx is empty, so we are adding, not editing.
    currentRec.ingredients.push({ quantity, name, unit });
    $('#unit-dropdown').val(noUnit);
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
  }).fail(failureOnAjaxOfRecipe)
    .done(successOnAjaxOfRecipe);
  $('#quantity').focus();
}

/*
  successOnAjaxOfRecipe

  Clear recipe details and then for each ingredient, append it to recipe details, along with an
  edit and delete button. Then, it appends an ingDiv for editing purposes in the future.

  Parameters:
  recipe - The recipe object obtained in an ajax (PUT, GET, POST) response
*/
function successOnAjaxOfRecipe(recipe) {
  $('error-message').hide();

  $('#recipe-details').empty();
  currentRec = recipe;
  $('#rec-title').text(currentRec.name);
  $('#rec-title').show();
  currentRec.ingredients.forEach((ingredient, idx) => {
    const { quantity } = ingredient;
    const { name } = ingredient;
    const { unit } = ingredient;
    let line = '';
    if (unit === noUnit) {
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
    $('#recipe-details').append(`<li id="ing-edit${idx}">${getIngDiv(idx)}</li>`);
    unitList.forEach((text) => {
      $(`#unit-dropdown${idx}`).append(`<option>${text}</option>`);
    });
    $(`#ing-edit${idx}`).hide();
  });
  $('button.edit-recipes').prop('disabled', false);
  $('button.edit-recipes').click(function () {
    const idx = $(this).data('idx');
    const ing = currentRec.ingredients[idx];
    // Populate the ingredient`s input fields with the current values from currentRec and then show
    // the input fields; also hide the "line".
    $(`#quantity${idx}`).val(ing.quantity);
    $(`#unit-dropdown${idx}`).val(ing.unit);
    $(`#name${idx}`).val(ing.name);
    $('button.edit-recipes').prop('disabled', true);
    $(`#ing-edit${idx}`).show();
    $(`#ing-line-container${idx}`).hide();
  });
  $('li > div > form > button.cancel').click(function () {
    $('button.edit-recipes').prop('disabled', false);
    ingCancel($(this).data('idx'));
  });
  $('li > div > form > button.apply').click(function () {
    ingApply($(this).data('idx'));
  });
  $('button.openModal').click(function () {
    currentIdx = $(this).data('idx');
  });
  $('input.inputIngInfo').keypress(function (event) {
    const idx = $(this).data('idx');
    if ($(`#quantity${idx}`).val() !== ''
      && $(`#name${idx}`).val() !== ''
      && event.keyCode === 13) {
      $(`#add-ing${idx}`).click();
    }
  });
  $('*').click(() => {
    $('#error-message').hide();
  });
  $('input.inputIngInfo').focus(() => {
    $('#error-message').hide();
  });
}

/*
  failureOnAjaxOfRecipe

  Shows the error message and specifies the error.

  Parameters:
  jqXHR - The error object
*/
function failureOnAjaxOfRecipe(jqXHR) {
  let message = null;
  if (jqXHR.readyState === 0) {
    message = 'Failed to contact server.';
  } else {
    message = jqXHR.responseJSON.message;
  }
  $('#error-message').text(message);
  $('#error-message').show();
}

/*
  addRecHandler

  Adds a click handler to the buttons of the recipeList.

  Parameters:
  matchingButtons - The button being referenced
*/
function addRecHandler(matchingButtons) {
  matchingButtons.click(function () {
    $('#error-message').hide();
    $('#recipe-details-container').show();
    $('button.active.recipe-list').removeClass('active');
    $(this).addClass('active');
    $.get(`/recipes/${$(this).data('id')}`).done(successOnAjaxOfRecipe).fail(failureOnAjaxOfRecipe);
  });
}

/*
  reset

  Virtually restarts the whole program. Reloads both the left and right panes.

  Parameters: none.

*/
function reset() {
  $('#recipe-details-container').hide();
  // On page load, gets the recipe list, and appends as buttons to a ul in left pane.
  $.get('/recipes', 'json')
    .done(
      (recipeList) => {
        $('#recipe-list').empty();
        recipeList.forEach((recipe) => {
          $('#recipe-list').append(
            `<button class="recipe-list list-group-item list-group-item-action btn" type="button"
                                                           data-id="${recipe.id}">${recipe.name}
                                                           </button>`,
          );
        });
        addRecHandler($('button.recipe-list'));
      },
    ).fail(failureOnAjaxOfRecipe);

  currentRec = null;
  currentIdx = null;
  $('error-message').hide();
}

$(document).ready(() => {
  reset();
  $.get('/units').done(
    (units) => {
      unitList = units;
      $('#recipe-details-container').append(getIngDiv(''));
      unitList.forEach((unit) => {
        $('#unit-dropdown').append(`<option>${unit}</option>`);
      });
      $('#add-ing').click(() => {
        ingApply('');
      });
      $('#cancel-ing').click(() => {
        ingCancel('');
      });
    },
  ).fail(failureOnAjaxOfRecipe);
  $('#renamed-recipe-name').hide();
  $('#add-rec-div').hide();
  $('#ing-div').hide();
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
    })
      .fail(failureOnAjaxOfRecipe)
      .done(successOnAjaxOfRecipe);
  });
  $('#plus-rec').click(() => {
    $('#new-recipe-name').val('');
    $('#add-rec-div').show();
    $('#new-recipe-name').focus();
  });
  $('#add-rec').click(() => {
    $('#add-rec-div').hide();
    $('#error-message').hide();
    const firstRecipe = { name: $('#new-recipe-name').val(), ingredients: [] };
    $.post({
      url: 'recipes',
      data: JSON.stringify(firstRecipe),
      contentType: 'application/json',
      dataType: 'json',
    }).done(
      (recipe) => {
        currentRec = recipe;
        $('#recipe-list').append(
          `<button class="recipe-list list-group-item list-group-item-action btn" type="button"
                                                            data-id="${recipe.id}">${recipe.name}
                                                            </button>`,
        );
        const lastButton = $('button.recipe-list.list-group-item-action:last-child');
        addRecHandler(lastButton);
        lastButton.trigger('click');
        $('#plus-ing').click();
      },
    ).fail(
      (jqXHR) => {
        $('#add-rec-div').show();
        failureOnAjaxOfRecipe(jqXHR);
      },
    );
  });
  $('#cancel-add-rec').click(() => {
    $('#add-rec-div').hide();
    $('#error-message').hide();
  });
  $('#plus-ing').click(() => {
    $('#unit-dropdown').val(noUnit);
    $('#name').val('');
    $('#quantity').val('');
    $('#ing-div').show();
  });
  $('#del-rec').click(() => {
    $.ajax({
      type: 'DELETE',
      url: `/recipes/${currentRec.id}`,
      dataType: 'json',
    })
      .fail(failureOnAjaxOfRecipe)
      .done(reset);
  });
  $('#edit-rec-name').click(() => {
    $('#rec-title').hide();
    $('#edit-rec-name').hide();
    $('#del-rec').hide();
    $('#renamed-recipe-name').show();
    $('#rename-rec-input').val($('#rec-title').text());
  });
  $('#apply-rec-rename').click(() => {
    if ($('#rename-rec-input').val() === currentRec.name) {
      $('#cancel-rec-rename').click();
      return;
    }
    $('#error-message').hide();
    const otherRec = JSON.parse(JSON.stringify(currentRec));
    otherRec.name = $('#rename-rec-input').val();
    $.post({
      url: 'recipes',
      data: JSON.stringify(otherRec),
      contentType: 'application/json',
      dataType: 'json',
    })
      .done(
        (data) => {
          $('button.recipe-list.active').text(data.name);
          currentRec = otherRec;
        },
      )
      .fail(
        (jqXHR) => {
          $('#rec-title').text(currentRec.name);
          $('#rec-title').hide();
          $('#edit-rec-name').hide();
          $('#del-rec').hide();
          $('#renamed-recipe-name').show();
          failureOnAjaxOfRecipe(jqXHR);
        },
      );
    $('#rec-title').show();
    $('#edit-rec-name').show();
    $('#del-rec').show();
    $('#renamed-recipe-name').hide();
    $('#rec-title').text($('#rename-rec-input').val());
  });
  $('#cancel-rec-rename').click(() => {
    $('#rec-title').show();
    $('#edit-rec-name').show();
    $('#del-rec').show();
    $('#renamed-recipe-name').hide();
    $('#rec-title').text(currentRec.name);
  });
});
