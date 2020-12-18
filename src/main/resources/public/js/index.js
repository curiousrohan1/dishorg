const App = Vue.createApp({
  data() {
    return {
    };
  },
//  methods: {},
});
const parent = App.component('Parent', {
  data() {
    return {
      displayWarn: false,
      displayBod: false,
    };
  },
  methods: {
    showBod() {
      this.displayBod = true;
    },
  },
  template: `
    <div>
      <p style="text-align: center;" class = "alert-danger" id="error-message" v-show="displayWarn">WARNING</p>
      <div>
        <titles @show-rec="showBod"/>
        <hr>
        <bod id="receiver" v-show="displayBod"/>
      </div>
    </div>
  `,
});
const titles = App.component('Titles', {
  props: {},
  emits: { 'show-rec': null },
  data() {
    return {
      showRename: false,
    };
  },
  methods: {
    showAddDiv() {
      this.$emit('show-rec');
    },
  },
  template: `
  <div>
    <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <strong>Recipes:</strong>
        <button class="btn" data-placement="right" data-toggle="tooltip" id="plus-rec"
                style="float:right;width:3rem;height:3rem;" title="Add recipe" v-on:click="showAddDiv">+
        </button>
    </div>
    <div><strong id="rec-title"></strong>
        <div id="renamed-recipe-name" v-show="showRename">
            <input id="rename-rec-input" placeholder="New Name..." type="text">
            <button class="btn" id="apply-rec-rename"><img src="images/apply.png" style="width:30px;height:30px;">
            </button>
            <button class="btn" id="cancel-rec-rename"><img src="images/cancel.jpg" style="width:30px;height:30px;">
            </button>
        </div>
        <button class="btn" id="edit-rec-name"><img src="images/edit.jpg" style="width:30px;height:30px;">
        </button>
        <button class="btn" id="del-rec"><img src="images/del.png" style="width:30px;height:30px;"></button>
        <button class="btn" data-placement="left" data-toggle="tooltip" id="plus-ing"
                style="float:right;width:3rem;height:3rem;" title="Add ingredient">+
        </button>
    </div>
  </div>`,
});
const bod = App.component('Bod', {
  props: {},
  data() {
    return {
      showAddRec: false,
    };
  },
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
          <button class="btn" id="cancel-add-rec"><img src="images/cancel.jpg" style="width:30px;height:30px;">
          </button>
        </div>
      </div>
      <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
        <ul id="recipe-details">
        </ul>
      </div>
    </div>
  `,
});
App.mount('#dishorg');
