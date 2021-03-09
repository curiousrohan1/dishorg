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
      curRec: null,
      updateRecList: false,
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
    renderErr(error) {
      console.log('displaying warn...');
      this.error = error;
      this.displayWarn = true;
      console.log('displayed warn...');
    },
    hideErr() {
      console.log('hiding warn...');
      this.displayWarn = false;
      console.log('hid warn...');
    },
    updateRecName(name) {
      console.log('updating rec name...');
      this.recName = name;
      console.log('updated rec name...');
    },
    updateCurRec(rec) {
      console.log('updating current rec...');
      this.curRec = rec;
      console.log('updated current rec...');
    },
    toggleUpdateRecList(doUpdate) {
      this.updateRecList = doUpdate;
    },
  },
});
