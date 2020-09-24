const CookItBest = {
  data() {
    return {
      currentRec:null
    }
  },
  methods:{
  }
}

const app = Vue.createApp(CookItBest);
app.component('titles',{
  props:{
  },
  template:`
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;">
        <strong>Recipes:</strong>
        <button class="btn" data-placement="right" id="plus-rec"
                style="float:right;width:3rem;height:3rem;" title="Add recipe" v-on:click="plusRec">+
        </button>
      </div>
      <div><strong id="rec-title">Ingredients</strong>
        <div id="renamed-recipe-name" style="display:none;">
            <input id="rename-rec-input" placeholder="New Name..." type="text">
            <button class="btn" id="apply-rec-rename"><img src="images/apply.png" style="width:30px;height:30px;" v-on:click="applyRecRename">
            </button>
            <button class="btn" id="cancel-rec-rename"><img src="images/cancel.jpg" style="width:30px;height:30px;" v-on:click="cancelRecRename">
            </button>
        </div>
        <button class="btn" id="edit-rec-name"><img src="images/edit.jpg" style="width:30px;height:30px;" v-on:click="editRecName">
        </button>
        <button class="btn" id="del-rec"><img src="images/del.png" style="width:30px;height:30px;" v-on:click="delRec"></button>
        <button class="btn" data-placement="left" data-toggle="tooltip" id="plus-ing"
                style="float:right;width:3rem;height:3rem;" title="Add ingredient">+
        </button>
      </div>
      <hr>
    </div>
  `,
  methods:{
    plusRec(){
      $('#new-recipe-name').val('');
      $('#add-rec-div').show();
      $('#new-recipe-name').focus();
    },
    applyRecRename(){
      if ($('#rename-rec-input').val() === currentRec.name) {
        $('#cancel-rec-rename').click();
        return;
      }
      $('#error-message').hide();
      const otherRec = JSON.parse(JSON.stringify(currentRec));
      otherRec.name = $('#rename-rec-input').val();
      $('button.recipe-list.active').text(otherRec.name);
      currentRec = otherRec;
    },
    cancelRecRename(){
      $('#rec-title').show();
      $('#edit-rec-name').show();
      $('#del-rec').show();
      $('#renamed-recipe-name').hide();
      $('#rec-title').text(currentRec.name);
    },
    editRecName(){
      $('#rec-title').hide();
      $('#edit-rec-name').hide();
      $('#del-rec').hide();
      $('#renamed-recipe-name').show();
      $('#rename-rec-input').val($('#rec-title').text());
    },
    delRec(){
      var items = document.getElementsByClassName("recipe");
      for (i = 0; i < items.length; i++) {
        if(items[i].text()===currentRec.name){
          items.removeChild(items[i]);
          return;
        }
      }
    }
  }
});
app.component('left-pane', {
  props: {
  },
  template: `
    <div style="position:relative;width:49%;float:left;padding-left:1rem;">
      <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
      <ul class="list-group" id="recipe-list">
      </ul>
      <!--    </div>-->
      <div id="add-rec-div" style="display:none">
          <input id="new-recipe-name" placeholder="New Recipe name..." type="text">
          <button class="btn" id="add-rec"><img src="images/apply.png" style="width:30px;height:30px;"></button>
          <button class="btn" id="cancel-add-rec"><img src="images/cancel.jpg" style="width:30px;height:30px;">
          </button>
      </div>
    </div>
  `,
});
app.component('right-pane',{
  props:{},
  template:`
    <div id="recipe-details-container" style="position:relative;width:49%;float:right;padding-right:1.5rem">
      <ul id="recipe-details">
      </ul>
    </div>
  `
})
app.mount('#dishorg');