// @ts-ignore
const store = Vuex.createStore({
  state () {
    return {
      currentRec: {},
      showRecTitle: true,
      recipeList: []
    }
  },
  mutations: {
    setCurRec (state, newRec) {
      state.currentRec = newRec;
    },
    updateCurRec (state, newRec) {
      state.currentRec.ingredients = newRec.ingredients;
      state.currentRec.name = newRec.name;
    },
    updateRecList (state, newRecList) {
      state.recipeList.length = 0;
      for (let i = 0; i < newRecList.length; i += 1) {
        state.recipeList.splice(state.recipeList.length, 0, newRecList[i]);
      }
    },
    activateRec (state, idx) {
      for (let i = 0; i < state.recipeList.length; i += 1) {
        state.recipeList[i].active = false;
      }
      state.recipeList[idx].active = true;
    },
    addRecipe (state, recipe) {
      let i = 0;
      while (i < state.recipeList.length && state.recipeList[i].name < recipe.name) {
        i += 1;
      }
      state.recipeList.splice(i, 0, recipe);
    },
    sortRecList (state) {
      console.log(state.recipeList)
      state.recipeList.sort(
        (a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          // a must be equal to b
          return 0;
        }
      );
      console.log(state.recipeList)
    },
    updateEditIng (state, obj) {
      state.currentRec.ingredients[obj.idx] = obj.ing;
    }
  }
})
const app = Vue.createApp({
  data () {
    return {
      accountOpts: [
        'Information',
        'Change Password',
        'Sign Out',
        'Delete Account',
      ],
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

    hideIngDiv () {
      this.displayIngDiv = false;
    },
    openModal () {
      this.showModal = true;
    },
    closeModal () {
      this.showModal = false;
    },
    updateErr (message) {
      this.error = message;
    },
    cancelRename () {
      console.log(rightPane._component.methods)
    }
  },
  computed: {
    displayWarn () {
      if (this.error === '') {
        return false;
      }
      return true;
    }
  }
});
app.use(store);