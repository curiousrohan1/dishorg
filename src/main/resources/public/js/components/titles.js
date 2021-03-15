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

    cancelRecRename () {
      this.showRename = false;
      mountedApp.showRecTitle = true;
      this.recName = mountedApp.recName;
    },
    editRecName () {
      this.showRename = true;
      mountedApp.showRecTitle = false;
      this.recName = mountedApp.recName;
    },
    plusIng () {
      this.$emit('plus-ing');
      this.recName = mountedApp.recName;
    },
    delRec () {
      $.ajax({
        type: 'DELETE',
        url: `/recipes/${mountedApp.curRec.id}`,
        dataType: 'json',
      })
        .fail(this.fail)
        .done(this.reset);
      this.recName = mountedApp.recName;
    },
    fail (jqXHR) {
      document.getElementById('fail').play();
      let message = '';
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else {
        message = jqXHR.responseJSON.message;
      }
      mountedApp.error = message;
      this.recName = mountedApp.recName;
    },
    applyRecRename () {
      if (this.rename === mountedApp.curRec.name) {
        this.cancelRecRename();
        return;
      }
      this.$emit('hide-err');
      const otherRec = JSON.parse(JSON.stringify(mountedApp.curRec));
      otherRec.name = this.rename;
      $.post({
        url: 'recipes',
        data: JSON.stringify(otherRec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (data) => {
          mountedApp.curRec = data;
        },
      )
        .fail(
          (jqXHR) => {
            mountedApp.recName = mountedApp.curRec.name;
            mountedApp.showRecTitle = false;
            this.showRename = false;
            this.fail(jqXHR);
          },
        );
      this.showRename = false;
      mountedApp.showRecTitle = true;
      mountedApp.recName = this.rename;
      mountedApp.updateRecList = true;
      this.recName = mountedApp.recName;
    },
  },
  template:
    /* html */
    `
  <div>

  </div>`,
});
