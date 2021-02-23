const titles = app.component('Titles', {
  props: ['recName', 'curRec', 'updateProps'],
  emits: ['show-add-rec-div', 'plus-ing', 'hideErr', 'updateCurRec', 'resetUpdate'],
  data() {
    return {
      showRename: false,
      showRecTitle: true,
      rename: '',
      datRecName: '',
      datCurRec: {},
    };
  },
  mounted() {
    if (this.updateProps === true) {
      this.datRecName = this.recName;
      this.datCurRec = this.curRec;
      this.$emit('resetUpdate');
    }
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
        url: `/recipes/${datCurRec.id}`,
        dataType: 'json',
      })
        .fail(fail)
        .done(reset);
    },
    fail(jqXHR) {
      document.getElementById('fail').play();
      let message = null;
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      this.$emit('error', message);
      $('#error-message').show();
    },
    applyRecRename() {
      if (this.rename === this.datCurRec.name) {
        this.cancelRecRename();
        return;
      }
      this.$emit('hideErr');
      const otherRec = JSON.parse(JSON.stringify(this.datCurRec));
      otherRec.name = this.rename;
      $.post({
        url: 'recipes',
        data: JSON.stringify(otherRec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (data) => {
          this.datCurRec = data;
          this.$emit('updateCurRec', this.datCurRec);
        },
      )
        .fail(
          (jqXHR) => {
            this.datRecName = this.datCurRec.name;
            this.showRecTitle = false;
            this.showRename = true;
            this.fail(jqXHR);
          },
        );
      this.showRecTitle = true;
      this.datRecName = this.rename;
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
            title="Add recipe" v-on:click="showAddRecDiv">+</button>
        </div>
        <div>
            <strong id="rec-title" v-show="showRecTitle">{{this.datRecName}}</strong>&nbsp;&nbsp;&nbsp;
            <div id="renamed-recipe-name" v-show="showRename">
                <input id="rename-rec-input" placeholder="New Name..." type="text" v-model="rename">
                <button class="btn" id="apply-rec-rename" v-on:click = "applyRecRename"><img src="images/apply.png"></button>
                <button class="btn" id="cancel-rec-rename" v-on:click = "cancelRecRename"><img src="images/cancel.jpg"></button>
            </div>
            <button  class="btn disabled" id="edit-rec-name" v-on:click="editRecName"  v-show="!showRename"><img src="images/edit.jpg"></button>
            <button class="btn disabled" id="del-rec"  v-show="!showRename" v-on:click="delRec"><img src="images/del.png"></button>
            <button class="btn text-primary" data-placement="left" data-toggle="tooltip" id="plus-ing"
             title="Add ingredient" v-on:click="plusIng">+</button>
    </div>
  </div>`,
});
