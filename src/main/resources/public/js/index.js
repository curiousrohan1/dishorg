
const store = Vuex.createStore({
  state() {
    return {
      currentRec: {},
      showRecTitle: true,
      recipeList: [],
      error: ''
    }
  },
  mutations: {
    setCurRec(state, newRec) {
      if (newRec === {}) {
        //        for (var prop in state.currentRec) {
        //          if (state.currentRec.hasOwnProperty(prop)) {
        //            delete state.currentRec[prop];
        //          }
        //        }
        state.currentRec = {};
      } else {
        state.currentRec = newRec;
      }
    },
    updateCurRec(state, newRec) {
      state.currentRec.ingredients = newRec.ingredients;
      state.currentRec.name = newRec.name;
    },
    updateRecList(state, newRecList) {
      state.recipeList.length = 0;
      for (let i = 0; i < newRecList.length; i += 1) {
        state.recipeList.splice(state.recipeList.length, 0, newRecList[i]);
      }
    },
    activateRec(state, idx) {
      for (let i = 0; i < state.recipeList.length; i += 1) {
        state.recipeList[i].active = false;
      }
      state.recipeList[idx].active = true;
    },
    addRecipe(state, recipe) {
      let i = 0;
      while (i < state.recipeList.length && state.recipeList[i].name < recipe.name) {
        i += 1;
      }
      state.recipeList.splice(i, 0, recipe);
    },
    sortRecList(state) {
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
    updateEditIng(state, obj) {
      state.currentRec.ingredients[obj.idx] = obj.ing;
    },
    delIng(state, idx) {
      state.currentRec.ingredients.splice(idx, 1);
    },
    setError(state, newError) {
      state.error = newError;
    }
  }
})
const app = Vue.createApp({
  data() {
    return {
      displayBod: false,
      displayIngDiv: false,
      disabled: true,
      recName: '',
      curRec: {},
      updateRecList: false,
      showModal: false,
      actions: [
        'Change x',
        'Change Password',
        'Log out',
        'Delete Account',
      ],
      showRecTitle: true,
      signedIn: true,
      username: '',
      password: ''
    }
  },
  methods: {
    hideIngDiv() {
      this.displayIngDiv = false;
    },
    openModal() {
      this.showModal = !this.showModal;
    },

    isEmpty(obj) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          return false;
      }
      return true;
    },

    setCreds(obj) {
      this.username = obj.username;
      this.password = obj.password;
    }
  },
  computed: {



  }
}).use(store);
