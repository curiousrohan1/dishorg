const bod = app.component('Bod', {
  // emits: { 'cancel-add-rec': null, 'cancel-add-ing': null, 'adding': },TODO

  emits: ['cancel-add-rec', 'cancel-add-ing', 'hide-err', 'update-rec-name'],
  data () {
    return {
      showDropOne: false,
      unit: 'Unit',
      recipeList: [
      ],
      ingName: '',
      quantity: '',
      name: '',
      unitList: [
      ],
      recName: '',
      currentRec: {
        ingredients: [
          { quantity: 5, unit: 'cups', name: 'yumyum' }, { quantity: 6, unit: 'stuffs', name: 'gumgum' },
        ],
      },
      showAddRec: false,
      showAddIng: false,
    };
  },

        //            $('#recipe-details-container').append(getIngDiv(''));
        //            unitList.forEach((unit) => {
        //              $('#unit-dropdown').append(`<option>${unit}</option>`);
        //            });
        //            $('#add-ing').click(() => {
        //              ingApply('');
        //            });
        //            $('#cancel-ing').click(() => {
        //              ingCancel('');
        //            });
      },

  },
  methods: {


  },
  /* html */
  template: `
    <div>



    </div>
  `,
});
