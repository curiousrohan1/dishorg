const bod = app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': },TODO

  emits: ['cancel-add-rec', 'cancel-add-ing', 'hide-err', 'update-rec-name'],
  data() {
    return {
      showDropOne: false,
      unit: 'Unit',
      recipeList: [
      ],
      ingName: '',
      quantity: '',
      name: '',
      unitList: [
      ],
      recName: '',
      currentRec: {
        ingredients: [
          { quantity: 5, unit: 'cups', name: 'yumyum' }, { quantity: 6, unit: 'stuffs', name: 'gumgum' },
        ],
      },
      showAddRec: false,
      showAddIng: false,
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
      document.getElementById('fail').play();
      this.$emit('cancel-add-rec');
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
    },
    cancelAddIng() {
      document.getElementById('fail').play();
      this.$emit('cancel-add-ing');
      this.unit = 'Unit';
      this.ingName = '';
      this.quantity = '';
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
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
          document.getElementById('success').play();
          mountedApp.curRec = recipe;
          let i = 0;
          while (i < this.recipeList.length) {
            if (this.recipeList[i].name > recipe.name) {
              this.recipeList.splice(i, 0, recipe);
              break;
            } else {
              i += 1;
            }
          }
          this.clickRec(recipe.idx);
        },
      ).fail(
        (jqXHR) => {
          this.failureOnAjaxOfRecipe(jqXHR);
        },
      );
      this.$emit('cancel-add-rec');
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
    },
    clickRec(idx) {
      this.$emit('hide-err');
      const rec = this.recipeList[idx];
      for (let i = 0; i < this.recipeList.length; i += 1) {
        this.recipeList[i].active = false;
      }
      rec.active = true;
      $.get(`/recipes/${rec.id}`).done(this.successOnAjaxOfRecipe).fail(this.failureOnAjaxOfRecipe);
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod;
      mountedApp.showRecTitle = true; this.showAddIng = mountedApp.displayIngDiv;
    },
    failureOnAjaxOfRecipe(jqXHR) {
      //      document.getElementById('fail').play();
      console.log('Failure :(');
      let message = '';
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      mountedApp.error = message;
      console.log(`failure;${message}`);
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
    },
    successOnAjaxOfRecipe(recipe) {
      document.getElementById('success').play();
      console.log('success!');
      mountedApp.curRec = recipe;
      if (mountedApp.updateRecList) {
        let i = 0;
        while (i < this.recipeList.length) {
          if (this.recipeList[i] !== mountedApp.curRec) {
            this.recipeList.splice(i, 1);
            this.recipeList.splice(i, 0, mountedApp.curRec);
            mountedApp.updateRecList = false;
            break;
          }
          i += 1;
        }
      }
      this.$emit('hide-err');
      mountedApp.recName = mountedApp.curRec.name;
      mountedApp.curRec.ingredients.forEach((ingredient, idx) => {
        const line = this.line(ingredient);
      //        /// /
      //        //        $('#recipe-details').append(`<li id="ing-edit${idx}">${getIngDiv(idx)}</li>`);
      //
      //        //        $(`#ing-edit${idx}`).hide();
      });
      //            $('button.edit-recipes').prop('disabled', false);
      //            $('li > div > form > button.cancel').click(function () {
      //              $('button.edit-recipes').prop('disabled', false);
      //              ingCancel($(this).data('idx'));
      //            });
      //            $('li > div > form > button.apply').click(function () {
      //              ingApply($(this).data('idx'));
      //            });
      //            $('button.openModal').click(function () {
      //              currentIdx = $(this).data('idx');
      //            });
      //            $('input.inputIngInfo').keypress(function (event) {
      //              const idx = $(this).data('idx');
      //              if ($(`#quantity${idx}`).val() !== ''
      //                && $(`#name${idx}`).val() !== ''
      //                && event.keyCode === 13) {
      //                $(`#add-ing${idx}`).click();
      //              }
      //            });
      //            $('*').click(() => {
      //              $('#error-message').hide();
      //            });
      //            $('input.inputIngInfo').focus(() => {
      //              $('#error-message').hide();
      //            });
      console.log('all done! with the success!');
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
    },
    editIng(idx) {
      const ing = mountedApp.curRec.ingredients[idx];
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod;
      this.showAddIng = mountedApp.displayIngDiv;

      // Populate the ingredient's input fields with the current values from mountedApp.curRec and then show
      // the input fields; also hide the "line".
      //      $(`#quantity${idx}`).val(ing.quantity);
      //      $(`#unit-dropdown${idx}`).val(ing.unit);
      //      $(`#name${idx}`).val(ing.name);
      //      $('button.edit-recipes').prop('disabled', true);
      //      $(`#ing-edit${idx}`).show();
      //      $(`#ing-line-container${idx}`).hide();
    },
    applyAddIng() {
      this.$emit('hide-err');
      mountedApp.curRec.ingredients.push({ quantity: this.quantity, name: this.name, unit: this.unit });
      $.ajax({
        type: 'PUT',
        url: `/recipes/${mountedApp.curRec.id}`,
        data: JSON.stringify(mountedApp.curRec),
        contentType: 'application/json',
        dataType: 'json',
      }).fail(this.failureOnAjaxOfRecipe)
        .done(this.successOnAjaxOfRecipe);
      //      axios.put(`/recipes/${mountedApp.curRec.id}`, mountedApp.curRec)
      //        .then(this.successOnAjaxOfRecipe)
      //        .catch((error) => {
      //          console.log(error);
      //        });
      console.log('calling:');
      console.log(`/recipes/${mountedApp.curRec.id}`);
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod;
      this.showAddIng = mountedApp.displayIngDiv;
    },
    line(ing) {
      return (ing.unit === '' || ing.unit === ' ' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
    },
    applyAddIngI() {
      console.log('applying add-ing...');
    },
  },
  /* html */
  template: `
    <div>
        <audio id="success">
          <source src="http://soundbible.com/grab.php?id=1003&type=mp3" type="audio/mp3">
          <source src="http://soundbible.com/grab.php?id=1003&type=wav" type="audio/wav">
        </audio>
        <audio id="fail">
         <source src="http://soundbible.com/grab.php?id=1945&type=mp3" type="audio/mp3">
         <source src="http://soundbible.com/grab.php?id=1945&type=wav" type="audio/wav">
        </audio>
      <div id="left-pane">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
          <button type="button" @click="clickRec(idx)" class="list-group-item list-group-item-action" :class="{active:rec.active}" v-for="(rec,idx) in recipeList">{{rec.name}}</button>
        </ul>
        <div id="add-rec-div" v-show="showAddRec">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text" v-model="this.recName">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" id="add-rec" @click="addRec"><img src="images/apply.png"></button>
            <button class="btn" id="cancel-add-rec" @click="cancelAddRec"><img src="images/cancel.jpg"></button>
          </div>
        </div>
      </div>
      <div id="recipe-details-container">
        <ul id="recipe-details">
           <li v-for="(ing,idx) in currentRec.ingredients" class="ingItem">
            <button class="edit-recipes btn" @click="editIng(idx)">
              <img src="images/edit.jpg">
            </button>
            <button type="button" class="btn openModal" data-toggle="modal" data-target="#cont-del-modal">
              <img src="images/del.png" style="width:30px;height:30px;">
            </button>
            {{this.line(ing)}}
          </li>
        </ul>
        <form class="form-inline" v-show="displayIngDiv" id="make-ing">
          <label class="sr-only" for="quantity">Quantity</label>
          <input type="text" v-model="quantity" class="form-control mb-2 mr-sm-2 inputIngInfo" placeholder="Quantity" id="quantity"/>
          <label class="sr-only" for="unit-dropdown">Unit</label>
          <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown" v-model="unit">
            <option selected>Unit</option>
            <option v-for="unit in unitList">{{unit}}</option>
          </select>
          <label class="sr-only" for="name">Name</label>
          <input type="text" v-model="name" class="form-control mb-2 mr-sm-2 inputIngInfo" placeholder="The Food's Name" id="name"/>
          <div class="btn-group" role="group">
            <button class="btn" @click="applyAddIng"><img  src="images/apply.png"></button>
            <button class="btn" @click="cancelAddIng"><img  src="images/cancel.jpg"></button>
          </div>
        </form>
      </div>
    </div>
  `,
});
