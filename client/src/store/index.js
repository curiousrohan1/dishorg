import { createStore } from 'vuex'
//import HomeView from '../views/HomeView.vue'
import stack from './modules/stack'



const store = createStore({
  modules:{
    stack,
  }
})

export default store