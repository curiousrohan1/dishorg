const parent = app.component('Parent', {
    data() {
        return {
            displayWarn: false,
            displayBod: false,
            displayIngDiv: false
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
        }
    },
    template:
        /*html*/
        `
    <div>
      <p style="text-align: center;" class = "alert-danger" id="error-message" v-show="displayWarn">WARNING</p>
      <div>
        <Titles @show-add-rec-div="showAddDiv" @plus-ing="showAddIngDiv"/>
        <hr>
        <Bod :showAddRec="displayBod" id="receiver" :showAddIng="displayIngDiv"@cancel-add-rec="hideAddDiv" @cancel-add-ing="hideIngDiv"/>
      </div>
    </div>
  `,
});