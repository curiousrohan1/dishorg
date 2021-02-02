app.component('Modal', {
  data() {
    return {
      showModal: false,
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
      <button id="modal-btn" v-on:click="openModal"><img
        src="https://cdn1.iconfinder.com/data/icons/foxy-universal-circle-glyph/24/circle-round-userinterface-people-account-person-profile-512.png">
      </button>
      <div class="modal" id="account-dropdown">
        <div class="modal-header" v-show="showModal">
          <span class="close-btn" v-on:click="closeModal">&times;</span>
          <h1>Experimental Name</h1>
        </div>
        <div class="modal-content">
          <p>this is the text inside the modal</p>
        </div>
        <div class="modal-footer">
          <h2>I am the Footer</h2>
        </div>
      </div>
    </div>
  `,
});
