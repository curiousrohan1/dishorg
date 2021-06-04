app.component('Makerec', {
  computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
  },
  /*html*/
  template: `
    <div>
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
          ></Leftpane>
          <Rightpane
            @update-err="updateErr($event)"
            id="right-pane"
          ></Rightpane>
        </div>
      </div>
    </div>
`
})