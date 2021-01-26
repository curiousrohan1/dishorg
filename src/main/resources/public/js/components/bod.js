const bod = app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': }, TODO
  props: ['showAddRec', 'showAddIng'],
  emits: ['cancel-add-rec', 'cancel-add-ing', 'adding', 'updateRecName', 'error'],
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
            unit: 'cup',
            name: 'yum',
            quantity: 5,
          }, {
            unit: 'oz',
            name: 'yummmmies',
            quantity: 10,
          },

        ],
        name: 'YUMMMMMMMMMMMMMMUY',
      },
      name: '',
    };
  },
  mounted() {
    console.log('got to mounted.');
    $.get('/recipes', 'json')
      .done(
        (recipeList) => {
          this.recipeList = recipeList;
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
      this.$emit('adding', this.recipeList.length);
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
          currentRec = recipe;
          location.reload();
        },
      ).fail(
        (jqXHR) => {
          failureOnAjaxOfRecipe(jqXHR);
        },
      );
      this.cancelAddRec();
    },
    clickRec(idx) {
      rec = this.recipeList[idx];
      for (i = 0; i < this.recipeList.length; i++) {
        this.recipeList[i].active = false;
      }
      rec.active = true;
      this.currentRec = rec;
      this.$emit('updateRecName', this.currentRec.name);
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
        <div v-show="showAddIng" id="make-ing">  
          <input v-model="quantity" placeholder="Quantity" id="quantity"/>
          <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown">{{this.unit}}</select>
          <input placeholder="The Food's Name" id="name"  v-model="name" > 
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn"><img  src="images/apply.png"></button>
            <button class="btn" v-on:click="cancelAddIng"><img  src="images/cancel.jpg"></button>
          </div>
        </div>
      </div>
    </div>
  `,
});
