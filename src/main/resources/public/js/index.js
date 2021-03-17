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
      state.recipeList.length = 0
      for (let i = 0; i < newRecList.length; i += 1) {
        state.recipeList.splice(state.recipeList.length, 0, newRecList[i]);
      }
    },
    activateRec (state, idx) {
      for (let i = 0; i < state.recipeList.length; i += 1) {
        state.recipeList[i].active = false;
      }
      state.recipeList[idx].active = true;
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