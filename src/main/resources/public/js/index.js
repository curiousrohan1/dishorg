const App = Vue.createApp({
  data() {
    return {
    };
  },
  methods: {},
});
App.component('parent', {
  template: `
    <div>
      <p :class={"alert-danger"} id="error-message" :style="display:none;text-align:center;"/>
      <div>
        <titles/>
        <hr>
        <bod/>
      </div>
    </div>
  `,
});
App.component('titles', {
  template: `
  <div>
    <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <strong>Recipes:</strong>
        <button class="btn" data-placement="right" data-toggle="tooltip" id="plus-rec"
                style="float:right;width:3rem;height:3rem;" title="Add recipe">+
        </button>
    </div>
    <div><strong id="rec-title"></strong>
        <div id="renamed-recipe-name">
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
App.component('bod', {
  template: `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
        <ul class="list-group" id="recipe-list">
        </ul>
        <!--    </div>-->
        <div id="add-rec-div">
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