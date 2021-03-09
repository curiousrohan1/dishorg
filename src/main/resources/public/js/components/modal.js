app.component('Modal', {
  data() {
    return {
      showModal: false,
      actions:[
        'Change x',
        'Log out'
        'ETC'
      ]
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  /* html */
  template: `
    <div>
      <button id="modal-btn" @click="openModal"><img
        src="https://cdn1.iconfinder.com/data/icons/foxy-universal-circle-glyph/24/circle-round-userinterface-people-account-person-profile-512.png">
      </button>
      <div class="modal" id="account-dropdown" v-show="showModal">
        <div class="modal-header">
          <span class="close-btn" @click="closeModal">&times;</span>
          <h1>Your Account</h1>
        </div>
        <div class="modal-content">
          <button v-for="action in actions">{{action}}</button>
        </div>
        <div class="modal-footer">
          <h2>I am the Footer</h2>
        </div>
      </div>
    </div>
  `,
});
