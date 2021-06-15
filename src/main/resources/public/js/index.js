
const store = Vuex.createStore({
  state() {
    return {
      currentRec: {},
      showRecTitle: true,
      recipeList: [],
      error: '',
      groceryList: [],
      currentGroc: {
        name:"",
        recipes:[],
      },
      showGrocTitle: true,
      consolidatedIngredients:[]
    }
  },
  mutations: {
    setCurRec(state, newRec) {
      if (newRec === {}) {
        state.currentRec = {};
      } else {
        state.currentRec = newRec;
      }
    },
    updateCurRec(state, newRec) {
      state.currentRec.ingredients = newRec.ingredients;
      state.currentRec.name = newRec.name;
      this.commit('refreshIngredients');
    },
    updateCurGroc(state, newGroc) {
      state.currentGroc.recipes = newGroc.recipes;
      state.currentGroc.name = newGroc.name;
    },
    setCurGroc(state, newGroc) {
      if (newGroc === {}) {
        state.currentGroc = {
            name:"",
            recipes:[],
        };
      } else {
        state.currentGroc = newGroc;
      }
      this.commit('refreshIngredients');
    },
    updateRecList(state, newRecList) {
      state.recipeList.length = 0;
      for (let i = 0; i < newRecList.length; i += 1) {
        state.recipeList.splice(state.recipeList.length, 0, newRecList[i]);
      }
    },
    updateGrocList(state, newGrocList) {
      state.groceryList.length = 0;
      for (let i = 0; i < newGrocList.length; i += 1) {
        state.groceryList.splice(state.groceryList.length, 0, newGrocList[i]);
      }
    },
    activateRec(state, idx) {
      for (let i = 0; i < state.recipeList.length; i += 1) {
        state.recipeList[i].active = false;
      }
      state.recipeList[idx].active = true;
    },
    activateGroc(state, idx) {
      for (let i = 0; i < state.groceryList.length; i += 1) {
        state.groceryList[i].active = false;
      }
      state.groceryList[idx].active = true;
    },
    addRecipe(state, recipe) {
      let i = 0;
      while (i < state.recipeList.length && state.recipeList[i].name < recipe.name) {
        i += 1;
      }
      state.recipeList.splice(i, 0, recipe);
    },
    addGroc(state, grocery) {
      let i = 0;
      while (i < state.groceryList.length && state.groceryList[i].name < grocery.name) {
        i += 1;
      }
      state.groceryList.splice(i, 0, grocery);
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
    sortGrocList(state) {
      state.groceryList.sort(
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
    delRec(state, idx) {
      state.currentGroc.recipes.splice(idx, 1);
    },
    setError(state, newError) {
      state.error = newError;
    },
    refreshIngredients(state){
        var i;
        var j;
        var rec;
        var ing;
        var newIngs=[];
        for(i = 0; i < state.currentGroc.recipes.length; i += 1){
            rec=state.currentGroc.recipes[i];
            for(j = 0; j < rec.ingredients.length; j += 1){
                ing = rec.ingredients[j];
                newIngs.push(ing);
            }
        }
        state.consolidatedIngredients = newIngs;
        for(var i=0;i<state.consolidatedIngredients.length;i+=1){//length is 2
            for(var j=i+1;j<state.consolidatedIngredients.length;j+=1){
                var ing1=state.consolidatedIngredients[i];//5 cups of water
                var ing2=state.consolidatedIngredients[j];//6 cups of water
                if(ing1.unit===ing2.unit){// yep
                    if(ing2.name === ing1.name){//yep
                        ing1.quantity += ing2.quantity;//11 now
                        state.consolidatedIngredients.splice(j,1);
                    }
                    else{
                        j++;
                    }
                }
                else{
                    j++;
                }
            }
        }
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
}).use(store);