const groceryList = { template: '<div>make a grocery list</div>' }
const home={template:'<div>Home</div>'}
const routes = [
  {
    path: '/foo', component: groceryList
  },
  {
    path:'/', component:home
  }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
const store = Vuex.createStore({
  state() {
    return {
      currentRec: {},
      showRecTitle: true,
      recipeList: []
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
    }
  }
})
const app = Vue.createApp({
  data() {
    return {
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
        'Change Password',
        'Log out',
        'Delete Account',
      ],
      showRecTitle: true,
      hovered: false,
      classObj: {
        'btn-dark': this.hovered, 'btn-light': !this.hovered
      },
      username: '',
      password: '',
      signIn: true,
      rightPaneShow: true
    }
  },
  methods: {
    hideIngDiv() {
      this.displayIngDiv = false;
    },
    openModal() {
      this.showModal = !this.showModal;
    },
    updateErr(message) {
      this.error = message;
      window.setTimeout(() => {
        this.error = '';
      }, 3000)
    },
    setHover(boole) {
      this.hovered = boole;
    },
    logIn() {
      this.signIn = false;
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          return false;
      }
      return true;
    },
    hideRightPane() {
      this.displayRightPane = false;
    },
    displayRightPane() {
      this.displayRightPane = true;
    }
  },
  computed: {
    displayWarn() {
      return this.error !== '';
    },
    displayModalButton() {
      return (this.username !== '') && (this.password !== '');
    },
    showRightPane() {
      this.displayRightPane = !this.isEmpty(this.$store.state.currentRec);
      return !this.isEmpty(this.$store.state.currentRec);
    }
  }
}).use(store).use(router);
