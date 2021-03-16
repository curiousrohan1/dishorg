// @ts-ignore
const store = Vuex.createStore({
  state () {
    return {
      currentRec: {},
      showRecTitle: true
    }
  },
  mutations: {
    setCurRec (state, newRec) {
      state.currentRec = newRec;
    },
    updateCurRec(state, newRec){
      state.currentRec.ingredients = newRec.ingredients;
      state.currentRec.name = newRec.name;
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