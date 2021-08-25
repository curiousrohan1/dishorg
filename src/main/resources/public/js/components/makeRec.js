app.component('Makerec', {
  computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
  },
  data() {
    return{
        displayModal:false
    };
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
    focus() {
      this.$refs.rightPane.plusIng(true);
    },
    showModal(exhibitModal){
        this.displayModal=exhibitModal;
    }
  },
  /*html*/
  template: `
    <div>
        <p
          class="alert alert-danger"
          id="error-message"
          role="alert"
          v-show="displayWarn"
        >
          {{this.$store.state.error}}
        </p>
        <div class="clearfix">
          <Leftpane
            @update-err="updateErr($event)"
            id="left-pane"
            @focus="focus"
          ></Leftpane>
          <Rightpane
            @update-err="updateErr($event)"
            id="right-pane"
            ref="rightPane"
            @show-modal="showModal(true)"
          ></Rightpane>
        </div>
    </div>
    <div class="modal fade" v-show="this.displayModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Are you sure you want to delete this recipe?</h5>
                    <button class="close btn">
                        <span aria-hidden="true">&times</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        Recipe deletion cannot be undone. Please confirm that you want
                        to delete this recipe.
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="showModal(false)">
                        Cancel Deletion
                    </button>
                    <button class="btn btn-primary" @click="this.$refs.rightPane.delRec()">
                        Confirm Deletion
                    </button>
                </div>
            </div>
        </div>
    </div>
`
})
