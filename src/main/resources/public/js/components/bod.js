app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': }, props:{showAddRec:type, etc}TODO
  props: ['showAddRec', 'showAddIng'],
  emits: ['cancel-add-rec', 'cancel-add-ing', 'error', 'hideErr', 'updateRecName', 'updateCurRec'],
  data() {
    return {
      showDropOne: false,
      unit: 'Unit',
      recipeList: [
      ],
      ingName: '',
      quantity: '',
      recName: '',
      currentRec: {
        ingredients: [
          {
            unit: ' ',
            name: ' ',
            quantity: 0,
          },
        ],
        name: 'YUMMMMMMMMMMMMMMUY',
      },
      name: '',
      unitList: [
      ],
    };
  },
  mounted() {
    $.get('/recipes', 'json')
      .done(
        (recipeList) => {
          this.recipeList = recipeList;
        },
      ).fail(this.failureOnAjaxOfRecipe);
    $.get('/units').done(
      (units) => {
        this.unitList = units;
        //            $('#recipe-details-container').append(getIngDiv(''));
        //            unitList.forEach((unit) => {
        //              $('#unit-dropdown').append(`<option>${unit}</option>`);
        //            });
        //            $('#add-ing').click(() => {
        //              ingApply('');
        //            });
        //            $('#cancel-ing').click(() => {
        //              ingCancel('');
        //            });
      },
    ).fail(this.failureOnAjaxOfRecipe);
  },
  methods: {
    cancelAddRec() {
      this.$emit('cancel-add-rec');
    },
    cancelAddIng() {
      this.$emit('cancel-add-ing');
      this.unit = 'Unit';
      this.ingName = '';
      this.quantity = '';
    },
    addRec() {
      const rec = {
        name: this.recName,
        ingredients: [

        ],
        id: this.recipeList.length,
        active: false,
      };
      $.post({
        url: 'recipes',
        data: JSON.stringify(rec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (recipe) => {
          this.currentRec = recipe;
          location.reload();
          this.$emit('updateCurRec', this.currentRec);
        },
      ).fail(
        (jqXHR) => {
          failureOnAjaxOfRecipe(jqXHR);
        },
      );
      this.cancelAddRec();
    },
    clickRec(idx) {
      this.$emit('hideErr');
      rec = this.recipeList[idx];
      for (i = 0; i < this.recipeList.length; i++) {
        this.recipeList[i].active = false;
      }
      rec.active = true;
      $.get(`/recipes/${rec.id}`).done(this.successOnAjaxOfRecipe).fail(this.failureOnAjaxOfRecipe);
    },
    failureOnAjaxOfRecipe(jqXHR) {
      let message = null;
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      this.$emit('error', message);
      $('#error-message').show();
    },
    successOnAjaxOfRecipe(recipe) {
      this.$emit('hideErr');
      this.currentRec = recipe;
      this.$emit('updateRecName', this.currentRec.name);
      //      currentRec.ingredients.forEach((ingredient, idx) => {
      //        const { quantity } = ingredient;
      //        const { name } = ingredient;
      //        const { unit } = ingredient;
      //        let line = '';
      //        if (unit === noUnit) {
      //          line = `${quantity} ${name}`;
      //        } else {
      //          line = `${quantity} ${unit} of ${name}`;
      //        }
      //        $('#recipe-details').append(`
      //          <li id="ing-line-container${idx}">
      //          <button class="edit-recipes btn" id="edit-ing${idx}" data-idx="${idx}">
      //          <img src="images/edit.jpg"style="width:30px;height:30px;">
      //          </button>
      //          <button type="button" class="btn openModal" data-toggle="modal" data-idx="${idx}"
      //          id="open-modal${idx}" data-target="#cont-del-modal">
      //          <img src="images/del.png"style="width:30px;height:30px;">
      //          </button>
      //          ${line}
      //          </li>`);
      //        $('#recipe-details').append(`<li id="ing-edit${idx}">${getIngDiv(idx)}</li>`);
      //        unitList.forEach((text) => {
      //          $(`#unit-dropdown${idx}`).append(`<option>${text}</option>`);
      //        });
      //        $(`#ing-edit${idx}`).hide();
      //      });
      //      $('button.edit-recipes').prop('disabled', false);
      //      $('button.edit-recipes').click(function () {
      //        const idx = $(this).data('idx');
      //        const ing = currentRec.ingredients[idx];
      //        // Populate the ingredient`s input fields with the current values from currentRec and then show
      //        // the input fields; also hide the "line".
      //        $(`#quantity${idx}`).val(ing.quantity);
      //        $(`#unit-dropdown${idx}`).val(ing.unit);
      //        $(`#name${idx}`).val(ing.name);
      //        $('button.edit-recipes').prop('disabled', true);
      //        $(`#ing-edit${idx}`).show();
      //        $(`#ing-line-container${idx}`).hide();
      //      });
      //      $('li > div > form > button.cancel').click(function () {
      //        $('button.edit-recipes').prop('disabled', false);
      //        ingCancel($(this).data('idx'));
      //      });
      //      $('li > div > form > button.apply').click(function () {
      //        ingApply($(this).data('idx'));
      //      });
      //      $('button.openModal').click(function () {
      //        currentIdx = $(this).data('idx');
      //      });
      //      $('input.inputIngInfo').keypress(function (event) {
      //        const idx = $(this).data('idx');
      //        if ($(`#quantity${idx}`).val() !== ''
      //          && $(`#name${idx}`).val() !== ''
      //          && event.keyCode === 13) {
      //          $(`#add-ing${idx}`).click();
      //        }
      //      });
      //      $('*').click(() => {
      //        $('#error-message').hide();
      //      });
      //      $('input.inputIngInfo').focus(() => {
      //        $('#error-message').hide();
      //      });
      //    }
    },
    applyAddIng() {
      this.$emit('hideErr');
      this.currentRec.ingredients.push({ quantity: this.quantity, name: this.name, unit: this.unit });
      this.unit = 'Unit';
      this.name = '';
      this.quantity = '';
      $.ajax({
        type: 'PUT',
        url: `/recipes/${currentRec.id}`,
        data: JSON.stringify(this.currentRec),
        contentType: 'application/json',
        dataType: 'json',
      }).fail(this.failureOnAjaxOfRecipe)
        .done(this.successOnAjaxOfRecipe);
    },
  },
  /* html */
  template: `
    <div>
      <div id="left-pane">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
          <button type="button" v-on:click="clickRec(idx)" class="list-group-item list-group-item-action" :class="{active:rec.active}" v-for="(rec,idx) in recipeList">{{rec.name}}</button>
        </ul>
        <div id="add-rec-div" v-show="showAddRec">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text" v-model="this.recName">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" id="add-rec" v-on:click="addRec"><img src="images/apply.png"></button>
            <button class="btn" id="cancel-add-rec" v-on:click="cancelAddRec"><img src="images/cancel.jpg"></button>
          </div>
        </div>
      </div>
      <div id="recipe-details-container">
        <ul id="recipe-details">
          <li v-for="ing in currentRec.ingredients">{{ing.name}}</li>
        </ul>
        <form class="form-inline" v-show="showAddIng" id="make-ing">
          <label class="sr-only" for="quantity">Quantity</label>
          <input type="text" v-model="quantity" class="form-control mb-2 mr-sm-2 inputIngInfo" placeholder="Quantity" id="quantity"/>
          <label class="sr-only" for="unit-dropdown">Unit</label>
          <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown">
            <option selected>{{this.unit}}</option>
            <option v-for="unit in unitList">{{unit}}</option>
          </select>
          <label class="sr-only" for="name">Name</label>
          <input type="text" v-model="name" class="form-control mb-2 mr-sm-2 inputIngInfo" placeholder="The Food's Name" id="name"/>
          <div class="btn-group" role="group">
            <button class="btn" v-on:click="applyAddIng"><img  src="images/apply.png"></button>
            <button class="btn" v-on:click="cancelAddIng"><img  src="images/cancel.jpg"></button>
          </div>
        </form>
      </div>
    </div>
  `,
});
