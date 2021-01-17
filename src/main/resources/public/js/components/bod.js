const bod = app.component('Bod', {
  emits: { 'cancel-add-rec': null, 'cancel-add-ing': null },
  props: ['showAddRec', 'showAddIng'],
  data() {
    return {
      showDropOne: false,
      unit: "Unit",
      recipeList: [
        {
          name: 'HII'
        }
      ]
    }
  },
  methods: {
    cancelAddRec() {
      this.$emit('cancel-add-rec');
      this.unit = 'Unit';
      document.getElementById('name').value = '';
      document.getElementById('quantity').value = '';
    },
    cancelAddIng() {
      this.$emit('cancel-add-ing')
    },
    addRec() {
      this.cancelAddRec();

    }
  },
  /*html*/
  template: `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
          <button type="button" class="list-group-item list-group-item-action" v-for="rec in recipeList">{{rec.name}}</button>
        </ul>
        <!--    </div>-->
        <div id="add-rec-div" v-show="showAddRec">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" id="add-rec" v:on-click="addRec"><img src="images/apply.png" style="width:30px;height:30px;"></button>
            <button class="btn" id="cancel-add-rec" v-on:click="cancelAddRec"><img src="images/cancel.jpg" style="width:30px;height:30px;"></button>
          </div>
        </div>
      </div>
      <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
        <ul id="recipe-details">
        </ul>
        <div v-show="showAddIng" style="width:100%;display:inline-block;">  
          <input placeholder="Quantity" id="quantity" style="display: inline-block;"> 
          <select class="form-control mb-2 mr-sm-2" id="unit-dropdown" style="display: inline-block; width:5rem">{{this.unit}}</select>
          <input placeholder="The Food's Name" id="name" style="display: inline-block;"> 
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn" style="display: inline-block;"><img  src="images/apply.png" style="width:30px;height:30px;"></button>
            <button class="btn" style="display: inline-block;" v-on:click="cancelAddIng"><img  src="images/cancel.jpg" style="width:30px;height:30px;"></button>
          </div>
        </div>
      </div>
    </div>
  `,
});