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
      state.recipeList.sort(
        (a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }
      );
    },
    updateEditIng (state, obj) {
      state.currentRec.ingredients[obj.idx] = obj.ing;
    },
    delIng (state, idx) {
      state.currentRec.ingredients.splice(idx, 1);
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
        'Options',
        'Change x',
        'Log out',
        'ETC',
      ],
      showRecTitle: true,
      hovered: false,
      classObj: {
        'btn-dark': this.hovered, 'btn-light': !this.hovered
      },
      username: '',
      password: '',
      signIn: true
    }
  },
  methods: {
    hideIngDiv () {
      this.displayIngDiv = false;
    },
    openModal () {
      this.showModal = !this.showModal;
    },
    updateErr (message) {
      this.error = message;
      window.setTimeout(() => {
        this.error = '';
      }, 3000)
    },
    setHover (boole) {
      this.hovered = boole;
    },
    logIn () {
      this.signIn = false;
    }
  },
  computed: {
    displayWarn () {
      if (this.error === '') {
        return false;
      }
      return true;
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.username.focus();
    });
  },
});
app.use(store);
