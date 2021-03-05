app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': },TODO
//   props:{showAddRec:type,etc}TODO
  props: {
    showAddRec: Boolean, showAddIng: Boolean, updateRecList: Boolean,
  },
  emits: ['cancel-add-rec', 'cancel-add-ing', 'error', 'hide-err', 'update-rec-name', 'update-cur-rec'],
  data() {
    return {
      showDropOne: false,
      unit: 'Unit',
      recipeList: [
      ],
      ingName: '',
      quantity: '',
      currentRec: {
        ingredients: [
          {
            unit: 'Lorem',
            name: 'Ipsum Dolor',
            quantity: 0,
          },
        ],
        name: 'Example Recipe',
      },
      name: '',
      unitList: [
      ],
      recName:''
    }
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
    },
    cancelAddIng() {
      document.getElementById('fail').play();
      this.$emit('cancel-add-ing');
      this.unit = 'Unit';
      this.ingName = '';
      this.quantity = '';
    },
    addRec() {
      var rec = {
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
          this.currentRec = recipe;
          this.$emit('update-cur-rec', this.currentRec);
          let i = 0;
          while(i < this.recipeList.length){
            if(this.recipeList[i].name>recipe.name){
              this.recipeList.push(recipe,i);
              break;
            }
            else{
              i+=1;
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
    },
    clickRec(idx) {
      this.$emit('hide-err');
      var rec = this.recipeList[idx];
      for (let i = 0; i < this.recipeList.length; i += 1) {
        this.recipeList[i].active = false;
      }
      rec.active = true;
      $.get(`/recipes/${rec.id}`).done(this.successOnAjaxOfRecipe).fail(this.failureOnAjaxOfRecipe);
    },
    failureOnAjaxOfRecipe(jqXHR) {
      //      document.getElementById('fail').play();
      console.log('Failure :(');
      let message = null;
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      this.$emit('error', message);
      console.log(`failure;${message}`);
    },
    successOnAjaxOfRecipe(recipe) {
      document.getElementById('success').play();
      console.log(`success!;${recipe}`);
      this.currentRec = recipe;
      if (this.updateRecList) {
        var i = 0;
        while (i < this.recipeList.length) {
          if (this.recipeList[i] === this.currentRec) {
            this.recipeList.splice(i, 1);
            break;
          }
          i += 1;
        }
        this.recipeList.push(this.currentRec);
      }
      this.$emit('hide-err');
      this.$emit('update-rec-name', this.currentRec.name);
      this.$emit('update-cur-rec', this.currentRec);
      this.currentRec.ingredients.forEach((ingredient, idx) => {
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
    },
    editIng(idx) {
      const ing = this.currentRec.ingredients[idx];
      // Populate the ingredient's input fields with the current values from this.currentRec and then show
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
      this.currentRec.ingredients.push({ quantity: this.quantity, name: this.name, unit: this.unit });
      this.$emit('update-cur-rec', this.currentRec);
      $.ajax({
        type: 'PUT',
        url: `/recipes/${this.currentRec.id}`,
        data: JSON.stringify(this.currentRec),
        contentType: 'application/json',
        dataType: 'json',
      }).fail(this.failureOnAjaxOfRecipe)
        .done(this.successOnAjaxOfRecipe);
      //      axios.put(`/recipes/${this.currentRec.id}`, this.currentRec)
      //        .then(this.successOnAjaxOfRecipe)
      //        .catch((error) => {
      //          console.log(error);
      //        });
      console.log('calling:');
      console.log(`/recipes/${this.currentRec.id}`);
    },
    line(ing) {
      return (ing.unit === '' || ing.unit === ' ' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
    },
    applyAddIngI() {
      console.log('applying add-ing...');
    },
    //    successOnAjaxOfRecipeI(recipe) {
    //      this.currentRec = recipe;
    //      console.log('Got in Here!')
    //    },
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
           <li v-for="(ing,idx) in this.currentRec.ingredients" class="ingItem">
            <button class="edit-recipes btn" @click="editIng(idx)">
              <img src="images/edit.jpg">
            </button>
            <button type="button" class="btn openModal" data-toggle="modal" data-target="#cont-del-modal">
              <img src="images/del.png" style="width:30px;height:30px;">
            </button>
            {{this.line(ing)}}
          </li>
        </ul>
        <form class="form-inline" v-show="showAddIng" id="make-ing">
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
