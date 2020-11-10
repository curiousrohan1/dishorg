const CookItBest = {
  data() {
    return {
      currentRec: null,
      currentIdx: null,
      unitList: null
    };
  },
  methods: {
    getIngDiv(idx) {
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
    },
    ingCancel(idx) {
      $('error-message').hide();
      if (idx === '') {
        $('#ing-div').hide();
      } else {
        $(`#ing-edit${idx}`).hide();
        $(`#ing-line-container${idx}`).show();
      }
    },
    ingApply(idx) {
      $('error-message').hide();

      const quantity = $(`#quantity${idx}`).val();
      const name = $(`#name${idx}`).val();
      const unit = $(`#unit-dropdown${idx}`).val();
      if (idx === '') {
        // Idx is empty, so we are adding, not editing.
        currentRec.ingredients.push({ quantity, name, unit });
        $('#unit-dropdown').val('[No Unit]');
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
    },
    successOnAjaxOfRecipe(recipe) {
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
        if (unit === '[No Unit]') {
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
    },
    failureOnAjaxOfRecipe(jqXHR) {
      let message = null;
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      $('#error-message').text(message);
      $('#error-message').show();
    },
    reset() {
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
    },
  },
};
const app = Vue.createApp(CookItBest);
app.component('titles', {
  props: {
  },
  template: `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <strong>Recipes:</strong>
        <button class="btn" data-placement="right" id="plus-rec"
                style="float:right;width:3rem;height:3rem;" title="Add recipe" v-on:click="plusRec">+
        </button>
      </div>
      <div><strong id="rec-title">Ingredients</strong>
        <div id="renamed-recipe-name" style="display:none;">
            <input id="rename-rec-input" placeholder="New Name..." type="text">
            <button class="btn" id="apply-rec-rename"><img src="images/apply.png" style="width:30px;height:30px;" v-on:click="applyRecRename">
            </button>
            <button class="btn" id="cancel-rec-rename"><img src="images/cancel.jpg" style="width:30px;height:30px;" v-on:click="cancelRecRename">
            </button>
        </div>
        <button class="btn" id="edit-rec-name"><img src="images/edit.jpg" style="width:30px;height:30px;" v-on:click="editRecName">
        </button>
        <button class="btn" id="del-rec"><img src="images/del.png" style="width:30px;height:30px;" v-on:click="delRec"></button>
        <button class="btn" data-placement="left" data-toggle="tooltip" id="plus-ing"
                style="float:right;width:3rem;height:3rem;" title="Add ingredient" v-on:click="plusIng">+
        </button>
      </div>
      <hr>
      <right-pane></right-pane>
      <left-pane></left-pane>
    </div>
  `,
  methods: {
    plusRec() {
      $('#new-recipe-name').val('');
      $('#add-rec-div').show();
      $('#new-recipe-name').focus();
    },
    applyRecRename() {
      if ($('#rename-rec-input').val() === currentRec.name) {
        $('#cancel-rec-rename').click();
        return;
      }
      $('#error-message').hide();
      const otherRec = JSON.parse(JSON.stringify(currentRec));
      otherRec.name = $('#rename-rec-input').val();
      $('button.recipe-list.active').text(otherRec.name);
      currentRec = otherRec;
    },
    cancelRecRename() {
      $('#rec-title').show();
      $('#edit-rec-name').show();
      $('#del-rec').show();
      $('#renamed-recipe-name').hide();
      $('#rec-title').text(currentRec.name);
    },
    editRecName() {
      $('#rec-title').hide();
      $('#edit-rec-name').hide();
      $('#del-rec').hide();
      $('#renamed-recipe-name').show();
      $('#rename-rec-input').val($('#rec-title').text());
    },
    delRec() {
      const items = document.getElementsByClassName('recipe-list');
      for (i = 0; i < items.length; i++) {
        if (items[i].text() === currentRec.name) {
          items.removeChild(items[i]);
          return;
        }
      }
      reset();
    },
    plusIng() {
      $('#unit-dropdown').val('[No Unit]');
      $('#name').val('');
      $('#quantity').val('');
      $('#ing-div').show();
    },
  },
});
app.component('left-pane', {
  props: {
  },
  template: `
    <div style="position:relative;width:49%;float:left;padding-left:1rem;">
      <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
      <ul class="list-group" id="recipe-list">
      </ul>
      <!--    </div>-->
      <div id="add-rec-div" style="display:none">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text">
          <button class="btn" id="add-rec" v-on:click="addRec"><img src="images/apply.png" style="width:30px;height:30px;"></button>
          <button class="btn" id="cancel-add-rec" v-on:click="cancelAddRec"><img src="images/cancel.jpg" style="width:30px;height:30px;">
          </button>
      </div>
    </div>
  `,
  methods: {
    addRec() {
      $('#add-rec-div').hide();
      $('#error-message').hide();
      const firstRecipe = { name: $('#new-recipe-name').val(), ingredients: [] };
      currentRec = firstRecipe;
      $('#recipe-list').append(`<button class="recipe-list list-group-item list-group-item-action btn" type="button" data-id="${firstRecipe.id}" v-on:click="recHandler">${firstRecipe.name}</button>`);
      const lastButton = $('button.recipe-list.list-group-item-action:last-child');
      lastButton.trigger('click');
      $('#plus-ing').click();
    },
    cancelAddRec(){
      $('#add-rec-div').hide();
      $('#error-message').hide();
    },
    recHandler(){
      $('#error-message').hide();
      $('#recipe-details-container').show();
      $('button.active.recipe-list').removeClass('active');
      $(this).addClass('active');
      successOnAjaxOfRecipe(currentRec);
    }
  },
});
app.component('right-pane', {
  props: {},
  template: `
    <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
      <ul id="recipe-details">
      </ul>
    </div>
  `,
});
app.mount('#dishorg');