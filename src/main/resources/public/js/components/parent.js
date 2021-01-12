const parent = app.component('Parent', {
    data() {
        return {
            displayWarn: false,
            displayBod: false,
        };
    },
    methods: {
        showAddDiv() {
            this.displayBod = true;
        },
        get(id) {
            return Document.getElementById(id);
        },
    },
    template:
        /*html*/
        `
    <div>
      <p style="text-align: center;" class = "alert-danger" id="error-message" v-show="displayWarn">WARNING</p>
      <div>
        <Titles @show-add-rec-div="showAddDiv"/>
        <hr>
        <Bod :showAddRec="displayBod" id="receiver"/>
      </div>
    </div>
  `,
});