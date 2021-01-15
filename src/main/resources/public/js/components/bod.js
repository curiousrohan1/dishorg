const bod = app.component('Bod', {
  emits: { 'cancel-add-rec': null },
  props: ['showAddRec', 'showAddIng'],
  methods: {
    cancelAddRec() {
      this.$emit('cancel-add-rec')
    },
  },
  /*html*/
  template: `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
        </ul>
        <!--    </div>-->
        <div id="add-rec-div" v-show="showAddRec">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text">
          <button class="btn" id="add-rec"><img src="images/apply.png" style="width:30px;height:30px;"></button>
          <button class="btn" id="cancel-add-rec" v-on:click="cancelAddRec"><img src="images/cancel.jpg" style="width:30px;height:30px;">
          </button>
        </div>
      </div>
      <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
        <ul id="recipe-details">
        </ul>
        <div v-show="showAddIng">
          
        </div>
      </div>
    </div>
  `,
});