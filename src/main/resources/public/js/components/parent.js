const parent = app.component('Parent', {
  data() {
    return {
      displayWarn: false,
      displayBod: false,
      displayIngDiv: false,
      disabled: true,
      error: '',
      recName: '',
      curRec: null,
      updateProps = false;
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
      this.error = error;
      this.displayWarn = true;
    },
    hideErr() {
      this.displayWarn = false;
    },
    updateRecName(name) {
      this.recName = name;
      this.updateProps=true;
    },
    updateCurRec(rec) {
      this.curRec = rec;
      this.updateProps=true;
    },
  },
  template:
        /* html */
        `
    <div>
      <p class = "alert-danger" id="error-message" v-show="displayWarn">{{error}}</p>
      <div>
        <Titles @show-add-rec-div="showAddDiv" @plus-ing="showAddIngDiv" :recName="recName" :curRec="curRec" :updateProps="updateProps"@hideErr="hideErr" @updateCurRec="updateCurRec($event)"/>
        <hr>
        <Bod :showAddRec="displayBod" id="receiver" :showAddIng="displayIngDiv" @cancel-add-rec="hideAddDiv"
        @cancel-add-ing="hideIngDiv" @error="renderErr($event)" @hideErr="hideErr" @updateRecName="updateRecName($event)" @updateCurRec="updateCurRec($event)"/>
      </div>
    </div>
  `,
});
