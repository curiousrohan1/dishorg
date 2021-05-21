export default  = app.component('Makerec', {
  data() {
    return {
      exhibitRightPane: false
    }
  },
  computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
    showRightPane() {
      return !this.isEmpty(this.$store.state.currentRec);
    }
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
    hideRightPane() {
      this.exhibitRightPane = false;
    },
    displayRightPane() {
      this.exhibitRightPane = true;
    },
  },
  /*html*/
  template:
    `<div>
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
          <LeftPane
            @update-err="updateErr($event)"
            @show-right-pane="displayRightPane"
            id="left-pane"
          ></LeftPane>
          <RightPane
            @update-err="updateErr($event)"
            @hide-right-pane="hideRightPane"
            id="right-pane"
            v-show="this.exhibitRightPane"
          ></RightPane>
        </div>
      </div>
    </div>`

})
