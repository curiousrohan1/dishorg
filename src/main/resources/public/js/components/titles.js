const titles = app.component('Titles', {
  emits: ['show-add-rec-div', 'plus-ing', 'hide-err', 'update-cur-rec', 'reset-update', 'update-rec-name', 'update-rec-list'],
  data () {
    return {
      showRename: false,
      rename: '',
      recName: '',
    };
  },
  methods: {


  },
  template:
    /* html */
    `
  <div>

  </div>`,
});
