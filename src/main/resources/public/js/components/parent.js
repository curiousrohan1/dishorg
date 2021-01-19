const parent = app.component('Parent', {
    data() {
        return {
            displayWarn: false,
            displayBod: false,
            displayIngDiv: false,
            disabled: true,
            nameRec: ""
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
        enableEdit(size) {
            this.disabled = size == 0;
        },
        updateRecName(name) {
            this.nameRec = name;
        }
    },
    template:
        /*html*/
        `
    <div>
      <p class = "alert-danger" id="error-message" v-show="displayWarn">WARNING</p>
      <div>
        <Titles @show-add-rec-div="showAddDiv" @plus-ing="showAddIngDiv" :abled="this.disabled" :recName="this.nameRec"/>
        <hr>
        <Bod :showAddRec="displayBod" id="receiver" :showAddIng="displayIngDiv" @cancel-add-rec="hideAddDiv" @cancel-add-ing="hideIngDiv" @adding="enableEdit($event)" @update-rec-name="updateRecName($event)"/>
      </div>
    </div>
  `,
});