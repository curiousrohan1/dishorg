app.component('Parent', {
  data() {
    return {
      displayWarn: false,
      displayBod: false,
      displayIngDiv: false,
      disabled: true,
      error: '',
      recName: '',
      curRec: null,
    };
  },
  methods: {
    showAddDiv() {
      this.displayBod = true;
    },
    hideAddDiv() {
      this.displayBod = false;
    },
    get(id) {
      return Document.getElementById(id);
    },
    showAddIngDiv() {
      this.displayIngDiv = true;
    },
    hideIngDiv() {
      this.displayIngDiv = false;
    },
    renderErr(error) {
      console.log('displaying warn...');
      this.error = error;
      this.displayWarn = true;
      console.log('displayed warn...');
    },
    hideErr() {
      console.log('hiding warn...');
      this.displayWarn = false;
      console.log('hid warn...');
    },
    updateRecName(name) {
      console.log('updating rec name...');
      this.recName = name;
      console.log('updated rec name...');
    },
    updateCurRec(rec) {
      console.log('updating current rec...');
      this.curRec = rec;
      console.log('updated current rec...');
    },
  },
  template:
        /* html */
        `
    <div>
      <p class = "alert-danger" id="error-message" v-show="displayWarn">{{error}}</p>
      <div>
        <Titles @show-add-rec-div="showAddDiv" @plus-ing="showAddIngDiv" :recName="recName" :curRec="curRec" @hideErr="hideErr" @updateCurRec="updateCurRec($event)" @updateRecName="updateRecName($event)"/>
        <hr>
        <Bod :showAddRec="displayBod" id="receiver" :showAddIng="displayIngDiv" @cancel-add-rec="hideAddDiv"
        @cancel-add-ing="hideIngDiv" @error="renderErr($event)" @hideErr="hideErr" @updateRecName="updateRecName($event)" @updateCurRec="updateCurRec($event)" :recName="recName"/>
      </div>
    </div>
  `,
});
