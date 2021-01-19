const bod = app.component('Bod', {
  emits: ['cancel-add-rec', 'cancel-add-ing', 'adding'],
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': }, TODO
  props: ['showAddRec', 'showAddIng'],
  data() {
    return {
      showDropOne: false,
      unit: "Unit",
      recipeList: [
      ],
      ingName: '',
      quantity: '',
      recName: '',
      currentRec: {
        ingredients: [
          {
            unit: "cup",
            name: "yum",
            quantity: 5
          }, {
            unit: "oz",
            name: "yummmmies",
            quantity: 10
          }

        ],
        name: "YUMMMMMMMMMMMMMMUY"
      },
      name: ""
    }
  },
  methods: {
    cancelAddRec() {
      this.$emit('cancel-add-rec');
    },
    cancelAddIng() {
      this.$emit('cancel-add-ing')
      this.unit = 'Unit';
      this.ingName = ''
      this.quantity = ''
    },
    addRec() {
      this.$emit('adding', this.recipeList.length);
      const rec = {
        name: this.recName,
        ingredients: [

        ],
        id: this.recipeList.length,
        active: false
      }
      this.recipeList.push(rec);
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
    }
  },
  /*html*/
  template: `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
          <button type="button" v-on:click="clickRec(rec.id)" class="list-group-item list-group-item-action" :class="{active:rec.active}" v-for="rec in recipeList">{{rec.name}}</button>
        </ul>
         <!-- id="{{rec.id}}"--> 
        <!--    </div>-->
        <div id="add-rec-div" v-show="showAddRec">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text" v-model="this.recName">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" id="add-rec" v-on:click="addRec"><img src="images/apply.png" style="width:30px;height:30px;"></button>
            <button class="btn" id="cancel-add-rec" v-on:click="cancelAddRec"><img src="images/cancel.jpg" style="width:30px;height:30px;"></button>
          </div>
        </div>
      </div>
      <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
        <ul id="recipe-details">
          <li v-for="ing in currentRec.ingredients">{{ing.name}}</li>
        </ul>
        <div v-show="showAddIng" style="width:100%;display:inline-block;">  
          <input v-model="quantity" placeholder="Quantity" id="quantity" style="display: inline-block;"/>
          <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown" style="display: inline-block; width:5rem">{{this.unit}}</select>
          <input placeholder="The Food's Name" id="name" style="display: inline-block;" v-model="name" > 
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" style="display: inline-block;"><img  src="images/apply.png" style="width:30px;height:30px;"></button>
            <button class="btn" style="display: inline-block;" v-on:click="cancelAddIng"><img  src="images/cancel.jpg" style="width:30px;height:30px;"></button>
          </div>
        </div>
      </div>
    </div>
  `,
});