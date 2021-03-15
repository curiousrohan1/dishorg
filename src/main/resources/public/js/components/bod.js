const bod = app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': },TODO

  emits: ['cancel-add-rec', 'cancel-add-ing', 'hide-err', 'update-rec-name'],
  data () {
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
  mounted () {
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

    cancelAddIng () {
      document.getElementById('fail').play();
      this.$emit('cancel-add-ing');
      this.unit = 'Unit';
      this.ingName = '';
      this.quantity = '';
      this.currentRec = mountedApp.curRec;
      this.showAddRec = mountedApp.displayBod; this.showAddIng = mountedApp.displayIngDiv;
    },



    editIng (idx) {
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
    applyAddIng () {
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
    line (ing) {
      return (ing.unit === '' || ing.unit === ' ' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
    },
    applyAddIngI () {
      console.log('applying add-ing...');
    },
  },
  /* html */
  template: `
    <div>

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
