app.component('Titles', {
  props: { recName: String, curRec: Object },
  emits: ['show-add-rec-div', 'plus-ing', 'hide-err', 'update-cur-rec', 'reset-update', 'update-rec-name', 'update-rec-list'],
  data() {
    return {
      showRename: false,
      showRecTitle: true,
      rename: '',
    };
  },
  methods: {
    showAddRecDiv() {
      this.$emit('show-add-rec-div');
    },
    cancelRecRename() {
      this.showRename = false;
      this.showRecTitle = true;
    },
    editRecName() {
      this.showRename = true;
      this.showRecTitle = false;
    },
    plusIng() {
      this.$emit('plus-ing');
    },
    delRec() {
      $.ajax({
        type: 'DELETE',
        url: `/recipes/${mountedApp.curRec.id}`,
        dataType: 'json',
      })
        .fail(this.fail)
        .done(this.reset);
    },
    fail(jqXHR) {
      document.getElementById('fail').play();
      let message = "";
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      mountedApp.error = message;
    },
    applyRecRename() {
      if (this.rename === mountedApp.curRec.name) {
        this.cancelRecRename();
        return;
      }
      this.$emit('hide-err');
      const otherRec = JSON.parse(JSON.stringify(mountedApp.curRec));
      otherRec.name = this.rename;
      $.post({
        url: 'recipes',
        data: JSON.stringify(otherRec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (data) => {
          mountedApp.curRec = data;
        },
      )
        .fail(
          (jqXHR) => {
            mountedApp.recName = mountedApp.curRec.name;
            this.showRecTitle = false;
            this.showRename = false;
            this.fail(jqXHR);
          },
        );
      this.showRename = false;
      this.showRecTitle = true;
      mountedApp.recName = this.rename;
      mountedApp.updateRecList = true;
    },
  },
  template:
        /* html */
        `
    <div>
      <audio id="success">
        <source src="http://soundbible.com/grab.php?id=1003&type=mp3" type="audio/mp3">
        <source src="http://soundbible.com/grab.php?id=1003&type=wav" type="audio/wav">
       </audio>
       <audio id="fail">
        <source src="http://soundbible.com/grab.php?id=1945&type=mp3" type="audio/mp3">
        <source src="http://soundbible.com/grab.php?id=1945&type=wav" type="audio/wav">
       </audio>
        <div id="left-titles">
            <strong class="text-primary"><h2>Recipes:</h2></strong>
            <button class="btn text-primary" data-placement="right" data-toggle="tooltip" id="plus-rec"
            title="Add recipe" @click="showAddRecDiv">+</button>
        </div>
        <div>
            <strong id="rec-title" v-show="showRecTitle">{{this.recName}}</strong>&nbsp;&nbsp;&nbsp;
            <div id="renamed-recipe-name" v-show="showRename">
                <input id="rename-rec-input" placeholder="New Name..." type="text" v-model="rename">
                <button class="btn" id="apply-rec-rename" @click = "applyRecRename"><img src="images/apply.png"></button>
                <button class="btn" id="cancel-rec-rename" @click = "cancelRecRename"><img src="images/cancel.jpg"></button>
            </div>
            <button  class="btn disabled" id="edit-rec-name" @click="editRecName"  v-show="!showRename"><img src="images/edit.jpg"></button>
            <button class="btn disabled" id="del-rec"  v-show="!showRename" @click="delRec"><img src="images/del.png"></button>
            <button class="btn text-primary" data-placement="left" data-toggle="tooltip" id="plus-ing"
             title="Add ingredient" @click="plusIng">+</button>
    </div>
  </div>`,
});
