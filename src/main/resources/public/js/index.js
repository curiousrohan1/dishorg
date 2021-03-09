const app = Vue.createApp({
  data() {
    return {
      accountOpts: [
        'Information',
        'Change Password',
        'Sign Out',
        'Delete Account',
      ],
      displayWarn: false,
      displayBod: false,
      displayIngDiv: false,
      disabled: true,
      error: '',
      recName: '',
      curRec: {},
      updateRecList: false,
      showModal: false,
      actions: [
        'Change x',
        'Log out',
        'ETC',
      ],
    };
  },
  methods: {
    showAddDiv() {
      this.displayBod = true;
    },
    hideAddDiv() {
      this.displayBod = false;
    },
    showAddIngDiv() {
      this.displayIngDiv = true;
    },
    hideIngDiv() {
      this.displayIngDiv = false;
    },
    hideErr() {
      console.log('hiding warn...');
      this.displayWarn = false;
      console.log('hid warn...');
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
});
