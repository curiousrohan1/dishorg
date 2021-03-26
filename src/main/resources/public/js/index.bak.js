const app = Vue.createApp({
  data () {
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
      showRecTitle: true,
    };
  },
  methods: {
    showAddDiv () {
      this.displayBod = true;
    },
    hideAddDiv () {
      this.displayBod = false;
    },
    showAddIngDiv () {
      this.displayIngDiv = true;
    },
    openModal () {
      this.showModal = true;
    },
    closeModal () {
      this.showModal = false;
    },
  },
});
